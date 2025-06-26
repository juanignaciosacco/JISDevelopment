import { useEffect, useState, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { useLanguage } from "../context/LanguageContext";

const Formulario = () => {

  const { language } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, lastname, email, subject, message } = formData;

  const [infoMail, setInfoMail] = useState({})
  const [respuesta, setRespuesta] = useState();
  const captcha = useRef(null)
  const [captchaValido, setCaptchaValido] = useState(false)

  const inputChangeHandler = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onChange = () => {
    if (captcha.current.getValue()) {
      setCaptchaValido(true)
    } else {
      setCaptchaValido(false)
    }
  }

  useEffect(() => {
    setInfoMail({
      emailUsuario: email,
      mensaje: message,
      nombre: name,
      apellido: lastname,
      asunto: subject
    })
  // eslint-disable-next-line
  }, [formData])

  const submitHandler = (ev) => {
    ev.preventDefault()
    console.log(infoMail)
    if (captchaValido) {
      fetch("https://server.jisdevelopment.com/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infoMail),
      })
        .then((res) => setRespuesta(res.status))
        .catch((error) => { throw error })
    } else {
      Swal.fire("Falta verifiacion!", "Debe completar la verificacion de google!", "error")
    }
  }

  useEffect(() => {
    if (respuesta !== undefined) {
      respuesta === 200 ? Swal.fire("Mensaje enviado", "Mensaje enviado correctamente", "success") : Swal.fire("Problema con el envio", "No se ha podido enviar tu mail", "error")
    }
  }, [respuesta])

  return (
    <div className="form_container">
      {language === 'en' ?
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={inputChangeHandler} required />
          <label htmlFor="lastname">Lastname</label>
          <input id="lastname" name="lastname" onChange={inputChangeHandler} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={inputChangeHandler} required />
          <label htmlFor="asusubjectnto">Subject</label>
          <input type="text" id="subject" name="subject" onChange={inputChangeHandler} required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" onChange={inputChangeHandler} required></textarea>
          <div className="recaptcha">
            <ReCAPTCHA
              ref={captcha}
              sitekey={process.env.REACT_APP_SITEKEY_RECAPTCHA}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
        :
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={inputChangeHandler}
            required
          />

          <label htmlFor="lastname">Apellido</label>
          <input
            id="lastname"
            name="lastname"
            onChange={inputChangeHandler}
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={inputChangeHandler}
            required
          />

          <label htmlFor="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={inputChangeHandler}
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            id="message"
            onChange={inputChangeHandler}
            required
          ></textarea>

          <div className="recaptcha">
            <ReCAPTCHA
              ref={captcha}
              sitekey={process.env.REACT_APP_SITEKEY_RECAPTCHA}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn">Enviar</button>
        </form>
      }
    </div>
  )
}

export default Formulario