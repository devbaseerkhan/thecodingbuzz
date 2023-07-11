import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiArrowDownRight } from "react-icons/fi";
import { BiLogoReact, BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import product from "../../../public/assets/images/product.png";
import styles from "./cards.module.scss"

export function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <Row>
        <Col xs={12} md={4}>
          <Image src={product} alt="project-img" className={styles.banner} />
        </Col>
        <Col xs={12} md={8}>
          <div className={styles.head}>
            <h1 className="title50">Project Title</h1>
            <FiArrowDownRight className={styles.arrowDown} />
          </div>
          <p className="desc16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
            tellus at eros tempus aliquam. Nullam nisl erat, lacinia ut justo
            et, pharetra convallis erat. In sit amet enim risus. Suspendisse ac
            nunc facilisis magna eleifend dapibus. Praesent a tincidunt urna,
            nec venenatis lacus. Vivamus ut est elit. Curabitur quis enim nec
            tellus scelerisque viverra. Sed tristique, tellus vitae molestie
            tristique, justo risus aliquam nulla, at malesuada ipsum massa a
            sem. Sed imperdiet sit amet lacus vitae efficitur. Vestibulum a
            risus sed sem sodales facilisis in ac ante. Curabitur sed lacus
            aliquam, posuere elit sit amet, scelerisque sapien.
          </p>
          <div className={styles.fabIcons}>
            <div className={styles.fab}>
              <BiLogoReact className={styles.react} />
            </div>
            <div className={styles.fab}>
              <BiLogoJavascript className={styles.js} />
            </div>
            <div className={styles.fab}>
              <SiTailwindcss className={styles.tailwind} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
