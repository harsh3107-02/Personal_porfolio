import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={link}>
          <img src={imgUrl} className="img-proj" />
        </a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a href={link}>
              <button className="button_round">View Project</button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
