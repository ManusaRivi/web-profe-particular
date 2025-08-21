import { EnglishContent } from "../../constants/course-text";
import "../Styles.css";

export default function English() {
    return (
        <div className="container">
            <h1 className="header">
                Inglés
            </h1>
            <ul>
                {EnglishContent.map((item, index) => (
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