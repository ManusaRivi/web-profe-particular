import "../Styles.css";
import { FrenchContent } from "../../constants/course-text";

export default function French() {
    return (
        <div className="container">
            <h1 className="header">
                Francés
            </h1>
            <ul>
                {FrenchContent.map((item, index) => (
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