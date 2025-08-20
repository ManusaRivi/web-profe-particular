import './Home.css';
import profilePicture from '../assets/profile-picture.png';
import CourseCard from '../components/CourseCard';
import Courses from '../constants/courses';

function App() {
    return (
        <div className="content">
            <div className="title">
                <img src={profilePicture} className="profile-picture" />
                <div className="name">
                    <h1>Manuel</h1>
                    <h1>Rivera Villatte</h1>
                </div>
            </div>
            <div className="card">
                <p className="text">
                    Bienvenido a mi página web! En este espacio vas a encontrar información sobre mí, las materias que doy, y cómo contactarme.
                </p>
            </div>
            <div className="courses-section">
                {Courses.map((course, index) => (
                    <CourseCard
                        course={course}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
