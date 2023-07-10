import Container from "react-bootstrap/Container";
import { ProjectCard } from "../cards";
import styles from "./projects.module.scss";
import product from "../../../public/assets/images/product.png";
import AppButton from "../buttons";
import {ImArrowRight2} from "react-icons/im"

const data = [
  {
    img: product,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus at eros tempus aliquam. Nullam nisl erat, lacinia ut justo et, pharetra convallis erat. In sit amet enim risus. Suspendisse ac nunc facilisis magna eleifend dapibus. Praesent a tincidunt urna, nec venenatis lacus. Vivamus ut est elit. Curabitur quis enim nec tellus scelerisque viverra. Sed tristique, tellus vitae molestie tristique, justo risus aliquam nulla, at malesuada ipsum massa a sem. Sed imperdiet sit amet lacus vitae efficitur. Vestibulum a risus sed sem sodales facilisis in ac ante. Curabitur sed lacus aliquam, posuere elit sit amet, scelerisque sapien.",
  },
  {
    img: product,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus at eros tempus aliquam. Nullam nisl erat, lacinia ut justo et, pharetra convallis erat. In sit amet enim risus. Suspendisse ac nunc facilisis magna eleifend dapibus. Praesent a tincidunt urna, nec venenatis lacus. Vivamus ut est elit. Curabitur quis enim nec tellus scelerisque viverra. Sed tristique, tellus vitae molestie tristique, justo risus aliquam nulla, at malesuada ipsum massa a sem. Sed imperdiet sit amet lacus vitae efficitur. Vestibulum a risus sed sem sodales facilisis in ac ante. Curabitur sed lacus aliquam, posuere elit sit amet, scelerisque sapien.",
  },
];

function Projects() {
  return (
    <div className={styles.workSection}>
      <Container>
        <h1 className={styles.title}>WORK</h1>
        {data.map((item, ind) => (
          <ProjectCard {...item} key={ind} />
        ))}
          <AppButton title="Load More" className="btn-link mt-2" variant="link" />
        <div className={styles.loadMore}>
          <hr/>
          <ImArrowRight2 className={styles.arrowRight} />
        </div>
      </Container>
    </div>
  );
}
export default Projects;
