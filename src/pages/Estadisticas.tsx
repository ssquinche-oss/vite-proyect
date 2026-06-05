import "./styles/home.css";
import { useEffect, useState } from 'react';
import { type Task } from '../types/Task';
import { Card, Statistic, Row, Col } from 'antd';
import { fetchData, project } from '../services/api';

function Estadisticas() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchData(project).then(data => setTasks(data));
  }, []);

  const total = tasks.length;
  const completadas = tasks.filter(t => t.Completar).length;
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