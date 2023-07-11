import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import AppButton from "../buttons";
import vector from "../../../public/assets/images/vector.svg";
import styles from "./testimonials.module.scss";

function Testimonials() {
  const [testimonailIndex, setTestimonialIndex] = useState(0);

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
    <div className={styles.testimonialsSection}>
      <Container>
        <Row className={styles.tabsContainer}>
          <Col xs={12} md={3}>
            <h1 className="title24">Testimonials</h1>
            <div className={styles.btnGrid}>
              {testimonialData.map((item, ind) => (
                <AppButton
                  title={item.btnTitle}
                  onClick={() => onClick?.(ind)}
                  key={ind}
                  className="btn-light my-2 me-2"
                />
              ))}
            </div>
          </Col>
          <Col xs={12} md={9}>
            <div className={styles.testimonialContent}>
              <h1 className="title50">
                {testimonialData[testimonailIndex].title}
              </h1>
              <p className={styles.projectName}>
                {testimonialData[testimonailIndex].project}
              </p>
              <p className={styles.desc}>
                <Image
                  src={vector}
                  alt="vector-icon"
                  className={styles.descIcon}
                />
                {testimonialData[testimonailIndex].desc}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;