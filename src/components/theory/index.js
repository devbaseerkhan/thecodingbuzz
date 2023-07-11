import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppButton from "../buttons";
import styles from "./theory.module.scss";

function Theory() {
  const [userIndex, setUserIndex] = useState(0);

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
  return (
    <div className={styles.content}>
      <Container>
        <Row className={styles.tabsContainer}>
          <Col xs={12} md={3}>
            <h1 className="title24">Theory</h1>
            <div className={styles.btnGrid}>
              {data.map((item, ind) => (
                <AppButton
                  title={item.btnTitle}
                  key={ind}
                  onClick={() => onClick?.(ind)}
                  className="btn-light my-2 me-2"
                />
              ))}
            </div>
          </Col>
          <Col xs={12} md={9}>
            <div>
              <h1 className="title50">{data[userIndex].title}</h1>
              <p className="desc16">{data[userIndex].desc}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Theory;
