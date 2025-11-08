import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2560, min: 0 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 0 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type CarouselProps = {
  src: string;
  title: string;
  children: React.ReactNode;
};

export default function CarouselS({ children, src, title }: CarouselProps) {
  return (
    <div className="carousel">
      <div className="col">
        <img loading="lazy" className="img" src={src} alt="" />
      </div>

      <div className="col">
        <h2>{title}</h2>
        <Carousel
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
          autoPlay={true}
          autoPlaySpeed={5000}
          showDots={true}
          responsive={responsive}
          infinite={true}
          //   centerMode={true}
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
}
