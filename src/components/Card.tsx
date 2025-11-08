import { Link } from "react-router-dom";
type CardProps = {
  to: string;
  img: string;
  description: string;
};
export default function Card({ to, img, description }: CardProps) {
  return (
    <div className="food">
      <Link to={to}>
        <img loading="lazy" src={img} alt="" />
      </Link>
      <Link to={to}>
        <p>{description}</p>
      </Link>
    </div>
  );
}
