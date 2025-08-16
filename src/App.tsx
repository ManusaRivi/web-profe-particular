import './App.css';
import profilePicture from './assets/profile-picture.png';

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
                <p>
                    Bienvenido a mi página web!
                </p>
            </div>
        </div>
    )
}

export default App
