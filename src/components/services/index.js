import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

const data = [
  {
    ind: "0",
    no: "01",
    title: "UI UX",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus at eros tempus aliquam. Nullam nisl erat, lacinia ut justo et, pharetra convallis erat. In sit amet enim risus. Suspendisse ac nunc facilisis magna eleifend dapibus. Praesent a tincidunt urna, nec venenatis lacus. Vivamus ut est elit. Curabitur quis enim nec tellus scelerisque viverra. Sed tristique, tellus vitae molestie tristique, justo risus aliquam nulla, at malesuada ipsum massa a sem. Sed imperdiet sit amet lacus vitae efficitur. Vestibulum a risus sed sem sodales facilisis in ac ante. Curabitur sed lacus aliquam, posuere elit sit amet, scelerisque sapien.",
  },
  {
    ind: "1",
    no: "02",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus at eros tempus aliquam. Nullam nisl erat, lacinia ut justo et, pharetra convallis erat. In sit amet enim risus. Suspendisse ac nunc facilisis magna eleifend dapibus. Praesent a tincidunt urna, nec venenatis lacus. Vivamus ut est elit. Curabitur quis enim nec tellus scelerisque viverra. Sed tristique, tellus vitae molestie tristique, justo risus aliquam nulla, at malesuada ipsum massa a sem. Sed imperdiet sit amet lacus vitae efficitur. Vestibulum a risus sed sem sodales facilisis in ac ante. Curabitur sed lacus aliquam, posuere elit sit amet, scelerisque sapien.",
  },
  {
    ind: "2",
    no: "03",
    title: "Mobile Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus at eros tempus aliquam. Nullam nisl erat, lacinia ut justo et, pharetra convallis erat. In sit amet enim risus. Suspendisse ac nunc facilisis magna eleifend dapibus. Praesent a tincidunt urna, nec venenatis lacus. Vivamus ut est elit. Curabitur quis enim nec tellus scelerisque viverra. Sed tristique, tellus vitae molestie tristique, justo risus aliquam nulla, at malesuada ipsum massa a sem. Sed imperdiet sit amet lacus vitae efficitur. Vestibulum a risus sed sem sodales facilisis in ac ante. Curabitur sed lacus aliquam, posuere elit sit amet, scelerisque sapien.",
  },
  {
    ind: "3",
    no: "04",
    title: "MERN Stack Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tellus at eros tempus aliquam. Nullam nisl erat, lacinia ut justo et, pharetra convallis erat. In sit amet enim risus. Suspendisse ac nunc facilisis magna eleifend dapibus. Praesent a tincidunt urna, nec venenatis lacus. Vivamus ut est elit. Curabitur quis enim nec tellus scelerisque viverra. Sed tristique, tellus vitae molestie tristique, justo risus aliquam nulla, at malesuada ipsum massa a sem. Sed imperdiet sit amet lacus vitae efficitur. Vestibulum a risus sed sem sodales facilisis in ac ante. Curabitur sed lacus aliquam, posuere elit sit amet, scelerisque sapien.",
  },
];

function Services() {
  return (
    <div className="services">
      <Container>
        <h4>Services</h4>
        <Accordion defaultActiveKey="0">
          {data.map((item, ind) => (
            <Accordion.Item eventKey={ind}>
              <Accordion.Header>
                <span>{item.no}</span>
                {item.title}
              </Accordion.Header>
              <Accordion.Body>{item.desc}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
export default Services;
