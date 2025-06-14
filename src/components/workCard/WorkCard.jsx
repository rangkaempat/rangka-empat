import { Link } from "react-router-dom";
import "./WorkCard.scss";

export default function WorkCard({ id, link, logo, image, title, category }) {
  return (
    <div className="workCardContent">
      <h3>{id}</h3>
      <Link to={link}>
        <img src={logo} alt={`${title} Logo`} className="clientLogo" />
        <img src={image} alt={title} className="clientWorkImage" />
      </Link>
      <h4 className="textXXS textRegular">{title}</h4>
      <h5 className="textXXS textLight">{category}</h5>
    </div>
  );
}
