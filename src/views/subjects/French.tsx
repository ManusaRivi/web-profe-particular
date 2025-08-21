import "../Styles.css";
import { FrenchContent } from "../../constants/course-text";

export default function French() {
    return (
        <div className="container">
            <h1 className="header">
                Francés
            </h1>
            <ul style={{ alignItems: "flex-start", display: 'flex', flexDirection: "column" }}>
                {FrenchContent.map((item, index) => (
                    <li key={index} style={{ textAlign: 'left' }}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}