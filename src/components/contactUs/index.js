import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./contact.module.scss";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import AppButton from "../buttons";

function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className={styles.contactUs}>
      <Container>
        <h1 className="title24">Contact Us</h1>
        <h2>Lets Start the project Together</h2>
        <Row className={styles.hStack}>
          <Col xs={12} md={5} className="mt-4">
            <div className={styles.formContent}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom01"
                  >
                    <Form.Control
                      size="lg"
                      required
                      type="text"
                      placeholder="Enter your name"
                      //   defaultValue="Mark"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom02"
                  >
                    <Form.Control
                      size="lg"
                      required
                      type="text"
                      placeholder="Enter your email"
                      //   defaultValue="Otto"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom03"
                  >
                    <Form.Select size="lg" aria-label="Default select example">
                      <option>Select the Service</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select service.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom04"
                  >
                    <Form.Select size="lg" aria-label="Default select example">
                      <option>Select the budget range</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please select your budget range.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom05"
                  >
                    <Form.Control
                      size="lg"
                      required
                      as="textarea"
                      rows={6}
                      placeholder="A brief about your project"
                      //   defaultValue="Otto"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please brief about your project.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <AppButton
                  type="submit"
                  title="Submit your Query"
                  className="block-btn"
                />
              </Form>
            </div>
          </Col>
          <Col xs={12} md={7} lg={6} className="mt-4">
            <div className={styles.contactDetails}>
              <h3>Contact Details</h3>
              <ul>
                <li>
                  <a href="www.team@thecodingbuzz.com">
                    <MdOutlineAlternateEmail className={styles.icon} />
                    team@thecodingbuzz.com
                  </a>
                </li>
                <li>
                  <a href="+92 344 1926270">
                    <BsTelephone className={styles.icon} />
                    +92 344 1926270
                  </a>
                </li>
                <li>
                  <a href="www.linkedin.com/thecodingbuzz">
                    <AiFillLinkedin className={styles.icon} />
                    www.linkedin.com/thecodingbuzz
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ContactUs;
