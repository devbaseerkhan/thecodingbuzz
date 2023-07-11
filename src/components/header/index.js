import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppButton from "../buttons";
import styles from "./header.module.scss";
import poke from "../../../public/assets/images/poke.png";
import star from "../../../public/assets/images/star.png";

const Slide = ({ title }) => {
  return (
    <div className={styles.slide}>
      <Image src={star} width={34} alt="star-icon" className={styles.icon} />
      <p>{title}</p>
    </div>
  );
};

const labels = [
  {
    title: "UI UX",
  },
  {
    title: "Website Development",
  },
  {
    title: "Mobile Development",
  },
  {
    title: "Front End Development",
  },
];

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <Container className={styles.container}>
        <span>
          <hr /> A Topnotch Software House
        </span>
        <div className={styles.title}>
          <h1>Web and mobile Development. <AppButton className={styles.headerBtn} title="Let’s Talk" /></h1>
          
        </div>
        <p className={styles.desc}>
          From ideation to implementation, we&apos;ve got you covered.
        </p>
        <Image src={poke} alt="down-img" width={48} />
      </Container>
      <div className={styles.horizontalSlider}>
        <div className={styles.inner}>
          <div
          className={styles.animate}
          >
            {labels.map((item, ind) => {
              return <Slide title={item.title} key={ind} />;
            })}
            {labels.map((item, ind) => {
              return <Slide title={item.title} key={ind} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppHeader;
