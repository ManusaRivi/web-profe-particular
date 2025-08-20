import "./Styles.css";
import email from "../assets/icons/email.svg"
import phone from "../assets/icons/phone.svg";

export default function Contact() {
    return (
        <div className="container">
            <h1 className="header">
                Contacto
            </h1>
            <p className="text">
                Si tenés alguna duda o consulta, no dudes en contactarme a través de los siguientes medios:
            </p>
            <div className="contact-info">
                <div>
                    <img src={email} />
                    mriveravillatte@gmail.com
                </div>
                <div>
                    <img src={phone} /> 11 3669 2140
                </div>
            </div>
        </div>
    )
}
