import { lazy } from "react";

const Banner = lazy(() => import("../components/Banner"));
const BookingForm = lazy(() => import("../components/BookingForm"));
const CarouselS = lazy(() => import("../components/Carousel"));
const LargeCard = lazy(() => import("../components/LargeCard"));

export default function Menus() {
  return (
    <div className="menuPage">
      <main>
        <Banner
          title1="Our Menus
"
          text="Curabitur at dolor sed felis lacinia ultricies sit amet vel sem. Vestibulum diam leo, sodales tempor lectus sed, varius gravida mi.
"
        />
      </main>
      <section>
        <CarouselS title="Breakfast Menu" src="/img/breakfast_menu.jpg">
          <LargeCard
            name="Kale Chips Art Party"
            price="$3.5"
            img="/img/breakfast_item.jpg"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          />
          <LargeCard
            name="Kale Chips Art Party"
            price="$7.25"
            img="/img/lunch_item.jpg"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          />
          <LargeCard
            name="Kale Chips Art Party"
            price="$11.5"
            img="/img/dinner_item.jpg"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          />
        </CarouselS>
        <CarouselS title="Lunch Menu" src="/img/lunch_menu.jpg">
          <LargeCard
            name="Kale Chips Art Party"
            price="$6.5"
            img="/img/breakfast_item.jpg"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          />
          <LargeCard
            name="Kale Chips Art Party"
            price="$11.25"
            img="/img/lunch_item.jpg"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          />
          <LargeCard
            name="Kale Chips Art Party"
            price="$7.25"
            img="/img/dinner_item.jpg"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          />
        </CarouselS>
        <CarouselS title="Dinner Menu" src="/img/dinner_menu.jpg">
          <LargeCard
            name="Kale Chips Art Party"
            price="$12.25"
            img="/img/breakfast_item.jpg"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          />
          <LargeCard
            name="Kale Chips Art Party"
            price="$7.25"
            img="/img/lunch_item.jpg"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          />
          <LargeCard
            name="Kale Chips Art Party"
            price="$17.25"
            img="/img/dinner_item.jpg"
            description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit.."
          />
        </CarouselS>
      </section>
      <section>
        <BookingForm />
      </section>
    </div>
  );
}
