import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectstab1 = [
    {
      title: "Assistant",
      description: "Registration Page",
      imgUrl: projImg1,
    },
    {
      title: "Sign Page",
      description: "Sign up",
      imgUrl: projImg2,
    },
   
    {
      title: "Home Page",
      description: "Recognition of Words",
      imgUrl: projImg3,
    },
     {
      title: "Assistant",
      description: "Registration Page",
      imgUrl: projImg1,
    },
  ];
  const projectsTab2 = [
  {
    title: "News4u Website",
    description: "Explore categories like Tech, Sports, Politics",
    imgUrl: projImg4,
  },
  {
    title: "Exploring",
    description: "Real-time News updates",
    imgUrl: projImg5,
  },
   {
    title: "About Website",
    description: " Tech, Sports, Politics",
    imgUrl: projImg4,
  },
];

const projectsTab3 = [
  {
    title: "Stop-Watch",
    description: "Shopping platform withA simple stopwatch app with start, pause, reset, and lap features for accurate time tracking cart system",
    imgUrl: projImg6,
  },
  {
    title: "Home",
    description: " Many Uses",
    imgUrl: projImg7,
  },
 { title: "Working",
  description:" Set or Go",
   imgUrl: projImg7,
}
]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of My Projects Which I have developed during my Learning.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Developed AI Virtual Assistant using Mern Stack(MongoDB, Express.js, React.js, Node.js),Designed a responsive and user-friendly interface with React for enhance user interaction.</p>
                      <Row>
                        {
                          projectstab1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Developed News4U Website,Explore news by categories such as Politics, Technology, Health, Entertainment, Sports, and Lifestyle.</p>
                       <Row>
                           {projectsTab2.map((project, index) => (
                          <ProjectCard key={index}
                           {...project} />
                        )
                        )}

                     </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>A responsive stopwatch application built with modern web technologies. It allows users to start, pause, reset, and track laps with precision — ideal for workouts, productivity, or time management.</p>
                       <Row>
                           {projectsTab3.map((project, index) => (
                          <ProjectCard key={index}
                           {...project} />
                        )
                        )}

                     </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
