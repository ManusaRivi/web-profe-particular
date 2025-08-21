import { PhysicsContent } from "../../constants/course-text";
import "../Styles.css";

export default function Physics() {
    return (
        <div className="container">
            <h1 className="header">
                Física
            </h1>
            <ul style={{ alignItems: "flex-start", display: 'flex', flexDirection: "column" }}>
                {PhysicsContent.map((item, index) => (
                    <li key={index} style={{ textAlign: 'left' }}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}