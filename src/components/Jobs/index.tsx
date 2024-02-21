import React from 'react';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import { MDBContainer } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Jobs: React.FC = () => {
  const jobsList = [
    {
      title: "Intercorp Retail",
      date: "Jun 2022 - Actualidad",
      description: "Especialización en páginas de micro front end"
    },
    {
      title: "Stefanini",
      date: "Ene 2022 - Jun 2022",
      description: "Desarrolladora de front end, realizando paginas en ReactJS"
    },
    {
      title: "Entelgy",
      date: "Mar 2021 - Dic 2021",
      description: "Programadora front end realizando unit test en mocha"
    },
    {
      title: "PlayTec",
      date: "Feb 2019 - Ene 2021",
      description: "Head de proyectos realizados en reactJS con apis realizado con js y mongoDB"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <MDBContainer className="py-5">
                    <ul className="timeline">
                      {jobsList.map((item) => (
                        <li className="timeline-item mb-5">
                          <h5 className="fw-bold">{item.title}</h5>
                          <p className="text-muted mb-2 fw-bold">{item.date}</p>
                          <p className="text-muted">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </MDBContainer>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}

export default Jobs;