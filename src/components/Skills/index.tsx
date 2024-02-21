import React from 'react';
import Carousel from 'react-multi-carousel';
import colorSharp from '../../assets/img/color-sharp.png'

const Skills: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills y tecnologías</h2>
                        <p>Herramientas, lenguages y libreria que manejo.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png" alt="Image" />
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="Image" />
                            </div>
                            <div className="item">
                                <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Image" />
                            </div>
                            <div className="item">
                                <img src="https://logohistory.net/wp-content/uploads/2023/06/AWS-Emblem.png" alt="Image" />
                            </div>
                            <div className="item">
                                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png" alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills