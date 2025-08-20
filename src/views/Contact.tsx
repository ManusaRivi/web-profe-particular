import "./About.css";
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
            <div style={{ marginTop: '2rem', fontSize: '1.5rem', color: 'var(--text-dark)', alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <img src={email} style={{ width: '2rem' }} />
                    mriveravillatte@gmail.com
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <img src={phone} style={{ width: '1.7rem' }} /> 11 3669 2140
                </div>
            </div>
        </div>
    )
}
