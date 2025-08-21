import { PhysicsContent } from "../../constants/course-text";
import "../Styles.css";

export default function Physics() {
    return (
        <div className="container">
            <h1 className="header">
                Física
            </h1>
            <ul>
                {PhysicsContent.map((item, index) => (
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