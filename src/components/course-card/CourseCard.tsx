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
            <a className={styles.detailsButton} href={course.path}>
                <h2>{course.title}</h2>
            </a>
            <p>{course.description}</p>
        </div>
    );
}