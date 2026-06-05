import "./styles/home.css";
import { Button } from 'antd';

interface HomeProps {
  onNavigate: (page: 'Inicio' | 'Tareas' | 'Estadisticas') => void;
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="div-pagina">
      <div className="div-contenedor">
        <h1 className="Titulo">Sistema de tareas</h1>
        <p className="mensaje">Bienvenido a tu sistema de tareas. Aquí podrás gestionar todas tus actividades.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px' }}>
          <Button type="primary" onClick={() => onNavigate('Tareas')}>
            Ir a tareas
          </Button>
          <Button onClick={() => onNavigate('Estadisticas')}>
            Ir a estadísticas
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;