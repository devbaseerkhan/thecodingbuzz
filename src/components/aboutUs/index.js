import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import styles from "./about.module.scss";

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h1 className="title24">About US</h1>
          </Col>
          <Col xs={12} md={9}>
            <p className={styles.dtl}>
              At <span>TheCodingBuzz,</span> we specialize in turning your{" "}
              <span>digital dreams</span>
              into <span>reality</span>. Our team of experts works tirelessly to
              bring your ideas to life, from <span>ideation</span> to{" "}
              <span>implementation</span>, creating powerful web and mobile
              experiences that drive <span>results</span>.
            </p>
          </Col>
        </Row>
        <h1 className="title24 my-2">In Numbers</h1>
        <Row className={styles.NumbersSection}>
          <Col xs={3} md={2}>
            <div className={styles.numbers}>
              <h1>200</h1>
              <p>Projects</p>
              <Image
                width={24}
                height={24}
                src="/assets/images/add.png"
                alt="plus-icon"
                className={styles.addIcon}
              />
            </div>
          </Col>
          <Col xs={3} md={2}>
            <div className={styles.numbers}>
              <h1>150</h1>
              <p>Clients</p>
              <Image
                width={24}
                height={24}
                src="/assets/images/add.png"
                alt="plus-icon"
                className={styles.addIcon}
              />
            </div>
          </Col>

          <Col xs={3} md={2}>
            <div className={styles.numbers}>
              <h1>05</h1>
              <p>Experience</p>
              <Image
                width={24}
                height={24}
                src="/assets/images/add.png"
                alt="plus-icon"
                className={styles.addIcon}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;