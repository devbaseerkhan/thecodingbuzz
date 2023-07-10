"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles/page.module.scss";
import AppNavBar from "@/components/navBar";
import AppHeader from "@/components/header";
import { Col, Container, Row } from "react-bootstrap";
import AppButton from "@/components/buttons";
import { ProjectCard } from "@/components/cards";
import Projects from "@/components/projects";
import Services from "@/components/services";
import vector from "../../public/assets/images/vector.svg";
import ContactUs from "@/components/contactUs";
import AppFooter from "@/components/footer";
// import add from "."

export default function Home() {
  const [userIndex, setUserIndex] = useState(0);
  const [testimonailIndex, setTestimonialIndex] = useState(0);

  const data = [
    {
      ind: 0,
      btnTitle: "Ideation",
      title: "The Ideation Phase",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      ind: 1,
      btnTitle: "Design",
      title: "Design",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      ind: 2,
      btnTitle: "Develpoment",
      title: "Develpoment",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];

  const testimonialData = [
    {
      ind: 0,
      btnTitle: "Eugene, CEO",
      title: "Eugene Zinchco,",
      project: "Osceola Truck wash",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ",
    },
    {
      ind: 1,
      btnTitle: "John",
      title: "Eugene Zinchco,",
      project: "Osceola Truck wash",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      ind: 2,
      btnTitle: "David Arkham",
      title: "Eugene Zinchco,",
      project: "Osceola Truck wash",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];
  return (
    <main className={styles.main}>
      <AppNavBar />
      <AppHeader />
      <div className={styles.content}>
        <Container>
          <Row className={styles.tabsContainer}>
            <Col xs={3}>
              <h5 className="title24">Theory</h5>
              <div className={styles.btnGrid}>
                {data.map((item, ind) => (
                  <AppButton
                    title={item.btnTitle}
                    onClick={() => onClick?.(ind)}
                    className="btn-light mt-2"
                  />
                ))}
              </div>
            </Col>
            <Col>
              <div>
                <h3 className="title50">{data[userIndex].title}</h3>
                <p className="desc16">{data[userIndex].desc}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={styles.aboutUs}>
          <Container>
            <Row>
              <Col xs={3}>
                <h5 className="title24">About US</h5>
              </Col>
              <Col>
                <p className={styles.dtl}>
                  At <span>TheCodingBuzz,</span> we specialize in turning your{" "}
                  <span>digital dreams</span>
                  into <span>reality</span>. Our team of experts works
                  tirelessly to bring your ideas to life, from{" "}
                  <span>ideation</span> to <span>implementation</span>, creating
                  powerful web and mobile experiences that drive{" "}
                  <span>results</span>.
                </p>
              </Col>
            </Row>
            <h5 className="title24 my-2">In Numbers</h5>
            <Row className={styles.NumbersSection}>
              <Col xs={2}>
                <div className={styles.numbers}>
                  <h1>200</h1>
                  <p>Projects</p>
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/add.png"
                    alt="plus-icon"
                    className={styles.addIcon}
                  />
                </div>
              </Col>
              <Col xs={2}>
                <div className={styles.numbers}>
                  <h1>150</h1>
                  <p>Clients</p>
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/add.png"
                    alt="plus-icon"
                    className={styles.addIcon}
                  />
                </div>
              </Col>

              <Col xs={2}>
                <div className={styles.numbers}>
                  <h1>05</h1>
                  <p>Experience</p>
                  <Image
                    width={30}
                    height={30}
                    src="/assets/images/add.png"
                    alt="plus-icon"
                    className={styles.addIcon}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Projects />
      </div>
      <Services />
      <div className={styles.testimonialsSection}>
        <Container>
          <Row className={styles.tabsContainer}>
            <Col xs={3}>
              <h5 className="title24">Testimonials</h5>
              <div className={styles.btnGrid}>
                {testimonialData.map((item, ind) => (
                  <AppButton
                    title={item.btnTitle}
                    onClick={() => onClick?.(ind)}
                    className="btn-light mt-2"
                  />
                ))}
              </div>
            </Col>
            <Col>
              <div className={styles.testimonialContent}>
                <h3 className="title50">{testimonialData[testimonailIndex].title}</h3>
                <p className={styles.projectName}>{testimonialData[testimonailIndex].project}</p>
                <p className={styles.desc}><Image src={vector} alt="vector-icon" className={styles.descIcon} />{testimonialData[testimonailIndex].desc}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ContactUs/>
      <AppFooter/>
    </main>
  );
}
