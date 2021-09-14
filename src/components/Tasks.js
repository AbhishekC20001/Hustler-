import Task from "./Task";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Tasks({ tasks, onTglStatus }) {
  return (
        <Container>
        {tasks.map((task) => (
          <React.Fragment>

          <Row>

            <Col>
              {task.col==1 && <Task task={task} onTglStatus={onTglStatus} />}
            </Col>
            <Col>
              {task.col==2 && <Task task={task} onTglStatus={onTglStatus} />}
            </Col>
            <Col>
              {task.col==3 && <Task task={task} onTglStatus={onTglStatus} />}
            </Col>

            </Row>

          </React.Fragment>
        ))}
        </Container>

  );
}

export default Tasks;
