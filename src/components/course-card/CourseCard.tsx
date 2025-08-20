import type { CourseData } from "../../constants/courses";
import styles from './CourseCard.module.css';

export default function CourseCard({
    course
} : {
    course: CourseData
}) {
    return (
        <div className={styles.cardContainer}>
            <img src={course.iconUrl} alt={`${course.title} icon`} className={styles.courseIcon} />
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <a className={styles.detailsButton} href={course.path}>Ver detalles</a>
        </div>
    );
}