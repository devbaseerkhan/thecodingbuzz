import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./footer.module.scss";

function AppFooter() {
  return (
    <div className={styles.appFooter}>
      <Container>
        <Row className={styles.hStack}>
          <h1>thecodingbuzz.com</h1>
          <p>2023 ALL RIGHT RESERVED</p>
          <ul>
            <li>
              <a href="#">Privacy & policy</a>
            </li>
            <li>
              <a href="#">Term & condition</a>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
}
export default AppFooter;
