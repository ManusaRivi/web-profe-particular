import englishIcon from '../assets/icons/english.svg';
import frenchIcon from '../assets/icons/french.svg';
import mathIcon from '../assets/icons/math.svg';
import physicsIcon from '../assets/icons/physics.svg';
import codingIcon from '../assets/icons/coding.svg';

export interface CourseData {
    title: string;
    description: string;
    iconUrl: string;
    path: string;
}

const Courses: CourseData[] = [
    {
        title: "Inglés",
        description: "Clases de inglés para todos los niveles.",
        iconUrl: englishIcon,
        path: "/web-profe-particular/subjects/english"
    },
    {
        title: "Francés",
        description: "Aprendé francés desde cero o mejorá tu nivel.",
        iconUrl: frenchIcon,
        path: "/web-profe-particular/subjects/french"
    },
    {
        title: "Matemáticas",
        description: "Clases de matemáticas para primaria, secundaria y CBC.",
        iconUrl: mathIcon,
        path: "/web-profe-particular/subjects/math"
    },
    {
        title: "Física",
        description: "Clases de física para estudiantes de secundaria y CBC.",
        iconUrl: physicsIcon,
        path: "/web-profe-particular/subjects/physics"
    },
    {
        title: "Programación",
        description: "Aprendé a programar desde cero o mejorá tus habilidades.",
        iconUrl: codingIcon,
        path: "/web-profe-particular/subjects/coding"
    }
]

export default Courses;
