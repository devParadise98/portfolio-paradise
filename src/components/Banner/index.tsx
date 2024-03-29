import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import headerImg from '../../assets/img/header-img.svg';

const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Desarrolladora front end", "Diseñadora UI/UX"];
  const period = 2000;

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenid@ a mi portafolio</span>
                  <h1>{`Hola, soy Miryan`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desarrolladora front end", "Diseñadora UI/UX" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Egresada de la carrera de Ingeniería de Sistemas e informática de la Universidad Tecnológica del Perú, con
                    manejo del MS Office. Cuento con una experiencia de más de 4 años en desarrollo front end, y con interés por
                    desarrollarme profesionalmente en empresas de tecnología
                  </p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;