import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Col,Row } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
    
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
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>
            Skills
            </h2>
            <p>I am a motivated full-stack developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy collaborating with clients to build efficient, scalable, and user-friendly web applications that solve real-world problems. Let's connect and create something innovative together!" </p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src={meter1} alt="Web Development meter" />
                <h5>Web Development</h5>
              </div>
              <div className="item">
                <img src={meter2} alt="Full-Stack Developer meter" />
                <h5>Full-Stack Developer</h5>
              </div>
              <div className="item">
                <img src={meter3} alt="RestFul-API meter"  />
                <h5>RestFul-API</h5>
              </div>
              <div className="item">
                <img src={meter1} alt="Software Developer meter" />
                <h5>Software Developer</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp}/>  
         
    </section>
  )
}
