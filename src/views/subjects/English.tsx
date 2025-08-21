import { EnglishContent } from "../../constants/course-text";
import "../Styles.css";

export default function English() {
    return (
        <div className="container">
            <h1 className="header">
                Inglés
            </h1>
            <ul style={{ alignItems: "flex-start", display: 'flex', flexDirection: "column" }}>
                {EnglishContent.map((item, index) => (
                    <li key={index} style={{ textAlign: 'left' }}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}