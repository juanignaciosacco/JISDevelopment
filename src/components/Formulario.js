import { useEffect, useState, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha";

const Formulario = () => {

  const [name, setName] = useState()
  const [lastname, setLastname] = useState()
  const [mail, setMail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  const [infoMail, setInfoMail] = useState({})
  const [respuesta, setRespuesta] = useState();
  const captcha  = useRef(null)
  const [captchaValido, setCaptchaValido] = useState(false)

  const nameChangeHandler = (ev) => {
    setName(ev.target.value)
  }
  
  const lastnameChangeHandler = (ev) => {
    setLastname(ev.target.value)
  }
  
  const mailChangeHandler = (ev) => {
    setMail(ev.target.value)
  }
  
  const subjectChangeHandler = (ev) => {
    setSubject(ev.target.value)
  }
  
  const messageChangeHandler = (ev) => {
    setMessage(ev.target.value)
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
  },[name, mail, lastname, subject, message])

  const submitHandler = (ev) => {
    ev.preventDefault()
    if (captchaValido) {
      fetch("http://ec2-18-119-17-145.us-east-2.compute.amazonaws.com:8080/contacto", {
        method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
                body: JSON.stringify(infoMail),
      }).then((res) => console.log(setRespuesta(res.status)))
    } else {
      alert("Debe completar la verificacion de google")
    }
  }

  useEffect(() => {
    if (respuesta !== undefined) {
      respuesta === 200 ? alert("Mensaje enviado correctamente") : alert("Hubo un problema con el envio")
    }
  },[respuesta])

  return (
    <div className="form_container">
        <form>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" onChange={nameChangeHandler} required/>
            <label htmlFor="apellido">Apellido</label>
            <input id="apellido" name="apellido" onChange={lastnameChangeHandler} required/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={mailChangeHandler} required/>
            <label htmlFor="asunto">Asunto</label>
            <input type="text" id="asunto" name="asunto" onChange={subjectChangeHandler} required />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" onChange={messageChangeHandler} required></textarea>
            <div className="recaptcha">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6Let-UknAAAAAFaZCp9ITaAThJB9FvzhIe3tSlbZ"
                onChange={onChange}
              />
            </div>
            <button onClick={submitHandler} className="btn">Enviar</button>
        </form>
    </div>
  )
}

export default Formulario