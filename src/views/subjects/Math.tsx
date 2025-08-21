import { MathContent } from "../../constants/course-text";
import "../Styles.css";

export default function Math() {
    return (
        <div className="container">
            <h1 className="header">
                Matemáticas
            </h1>
            <ul>
                {MathContent.map((item, index) => (
                    <li key={index} style={{ textAlign: 'left' }}>
                        <h2>{item.title}</h2>
                        <ul>
                            {item.content.map((contentItem, contentIndex) => (
                                <li key={contentIndex}>{contentItem}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}