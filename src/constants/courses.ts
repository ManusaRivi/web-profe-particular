import englishIcon from '../assets/icons/english.svg';
import frenchIcon from '../assets/icons/french.svg';
import mathIcon from '../assets/icons/math.svg';
import physicsIcon from '../assets/icons/physics.svg';
import codingIcon from '../assets/icons/coding.svg';

export interface CourseData {
    title: string;
    description: string;
    iconUrl: string;
}

const Courses: CourseData[] = [
    {
        title: "Inglés",
        description: "Clases de inglés para todos los niveles.",
        iconUrl: englishIcon
    },
    {
        title: "Francés",
        description: "Aprendé francés desde cero o mejorá tu nivel.",
        iconUrl: frenchIcon
    },
    {
        title: "Matemáticas",
        description: "Clases de matemáticas para primaria, secundaria y CBC.",
        iconUrl: mathIcon
    },
    {
        title: "Física",
        description: "Clases de física para estudiantes de secundaria y CBC.",
        iconUrl: physicsIcon
    },
    {
        title: "Programación",
        description: "Aprendé a programar desde cero o mejorá tus habilidades.",
        iconUrl: codingIcon
    }
]

export default Courses;
