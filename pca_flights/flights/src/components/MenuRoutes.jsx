import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlightRegistrationForm from './FlightRegistrationForm';
import FlightSearchForm from './FlightSearchForm';

function MenuRoutes() {

    return (
        <Router>
            <div className="card">
                <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/register-flight">Registro de Vuelos</Link>
                    </li>
                    <li>
                        <Link to="/search-flight">Búsqueda de Vuelos</Link>
                    </li>
                    <li>
                        <Link to="/statistics">Estadísticas</Link>
                    </li>
                </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<img width={1000} height={500} src='/src/assets/imgPCA.jpg' />} />
                <Route path="/register-flight" element={<FlightRegistrationForm />} />
                <Route path="/search-flight" element={<FlightSearchForm />} />
                <Route path="/statistics" element={<h1>estadisticas</h1>} />
            </Routes>
        </Router>
    );
}

export default MenuRoutes;