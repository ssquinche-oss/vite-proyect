import './styles/menu.css';

function Menu ({ OnNavigate }: { OnNavigate: (page: 'Inicio' | 'Tareas' | 'Estadisticas') => void }) {
    return (
        <nav className="Menu">
            <ul>
                <li><a href="#" onClick={() => OnNavigate('Inicio')}>Inicio</a></li>
                <li><a href="#" onClick={() => OnNavigate('Tareas')}>Tareas</a></li>
                <li><a href="#" onClick={() => OnNavigate('Estadisticas')}>Estadísticas</a></li>
            </ul>
        </nav>
    ) 
}

export default Menu;
    