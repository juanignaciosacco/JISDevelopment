import { useEffect, useState, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const Formulario = () => {

  const [formData , setFormData] = useState({
    name: "",
    lastname: "",
    mail: "",
    subject: "",
    message: "",
  });
  const { name, lastname, mail, subject, message } = formData;

  const [infoMail, setInfoMail] = useState({})
  const [respuesta, setRespuesta] = useState();
  const captcha  = useRef(null)
  const [captchaValido, setCaptchaValido] = useState(false)

  const inputChangeHandler = ({ target: {name, value}}) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onChange = () => {
    if(captcha.current.getValue()) {
      setCaptchaValido(true)
    } else {
      setCaptchaValido(false)
    }
  }

  useEffect(() => {
    setInfoMail({
      emailUsuario: mail,
      mensaje: message,
      nombre: name,
      apellido: lastname,
      asunto: subject
    })
  },[formData])

  const submitHandler = (ev) => {
    ev.preventDefault()
    if (captchaValido) {
      fetch("https://server.jisdevelopment.com/contacto", {
        method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(infoMail),
      })
      .then((res) => setRespuesta(res.status))
      .catch((error) => {throw error})
    } else {
      Swal.fire("Falta verifiacion!", "Debe completar la verificacion de google!", "error")
    }
  }

  useEffect(() => {
    console.log(respuesta)
    if (respuesta !== undefined) {
      respuesta === 200 ? Swal.fire("Mensaje enviado", "Mensaje enviado correctamente", "success") : Swal.fire("Problema con el envio", "No se ha podido enviar tu mail", "error")
    }
  },[respuesta])

  return (
    <div className="form_container">
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" onChange={inputChangeHandler} required/>
            <label htmlFor="apellido">Apellido</label>
            <input id="apellido" name="apellido" onChange={inputChangeHandler} required/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={inputChangeHandler} required/>
            <label htmlFor="asunto">Asunto</label>
            <input type="text" id="asunto" name="asunto" onChange={inputChangeHandler} required />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" onChange={inputChangeHandler} required></textarea>
            <div className="recaptcha">
              <ReCAPTCHA
                ref={captcha}
                sitekey={process.env.REACT_APP_SITEKEY_RECAPTCHA}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn">Enviar</button>
        </form>
    </div>
  )
}

export default Formulario