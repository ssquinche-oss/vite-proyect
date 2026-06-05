import "./styles/home.css";
import { type Task } from '../types/Task';
import { Card, Statistic, Row, Col } from 'antd';

interface StatsProps {
  tasks: Task[];
}

function Estadisticas({ tasks }: StatsProps) {
  const total = tasks.length;
  const completadas = tasks.filter(t => t.completed).length;
  const pendientes = total - completadas;

  return (
    <div className="div-pagina">
      <div className="div-contenedor">
        <h1 className="Titulo">Estadísticas</h1>
        <p className="mensaje">Resumen de tus tareas.</p>

        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card>
              <Statistic title="Total" value={total} />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic title="Completadas" value={completadas}
                valueStyle={{ color: '#52c41a' }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic title="Pendientes" value={pendientes}
                valueStyle={{ color: '#ff4d4f' }} />
            </Card>
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default Estadisticas;
