import { Link } from "react-router-dom";

type CardProps = {
  title?: string;
  img: string;
  price?: string;
  date?: string;
  name: string;
  description: string;
  section?: string;
  link?: string;
};

export default function LargeCard({
  title,
  img,
  price,
  date,
  description,
  name,
  section,
  link,
}: CardProps) {
  return (
    <div className="Lcard">
      {date && <span>{date}</span>}
      {title && <p>{title}</p>}
      <div className="details">
        <img loading="lazy" src={img} alt={title} />
        <div className="text">
          {price && <span>{price}</span>} <p>{name}</p>
          {section && <p className="section">Branding / Admin</p>}
          <p>{description}</p>
          <Link to={"/"}>{link}</Link>
        </div>
      </div>
    </div>
  );
}
