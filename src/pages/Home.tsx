import { lazy } from "react";
const Banner = lazy(() => import("../components/Banner"));
import { SendMessage } from "../components/SendMessage";
const Card = lazy(() => import("../components/Card"));

const BookingForm = lazy(() => import("../components/BookingForm"));
const Button = lazy(() => import("../components/Button"));
const LargeCard = lazy(() => import("../components/LargeCard"));

export default function Home() {
  return (
    <>
      <main className="container">
        <Banner
          t1={`Here you can find delecious foods`}
          btn={`ORDER RIGHT NOW
`}
          title1={`Asian`}
          title2={` Restaurant
`}
          text={`Quisque nec nibh id lacus fringilla eleifend sed sit amet sem. Donec lectus odio, mollis a nisl non, tempor interdum nisl.

    `}
        />
      </main>
      {/*  */}
      <section className="menuSection">
        <div className="cards">
          <div className="img">
            <img loading="lazy" src="/img/cook_01.jpg" alt="cooked meal" />
          </div>
          <div className="contentCard">
            <h2>We cook DElecious</h2>
            <div className="minContact">
              <p>You can cll us on</p>
              <p>+1234567890</p>
            </div>
            <p>OR</p>
            <Button text="Order Now" />
          </div>
          <div className="img">
            <img
              loading="lazy"
              src="/img/cook_02.jpg"
              alt="second cooked meal"
            />
          </div>
        </div>

        <div className="icons">
          <div className="iconRow">
            <Card
              img="/img/breakfast_menu.jpg"
              description="Breakfast"
              to="menu"
            />
            <Card img="/img/lunch_menu.jpg" description="Lunch" to="menu" />
          </div>
          <div className="iconRow">
            <Card img="/img/dinner_menu.jpg" description="Dinner" to="menu" />
            <Card img="/img/cook_dessert.png" description="Dessert" to="menu" />
          </div>
        </div>
      </section>
      {/*  */}
      <section id="reservation">
        <BookingForm />
        <div className="phoneApp">
          <h4>Get Application for your phone</h4>
          <Button text="Download now" />
        </div>
      </section>

      <section className="features">
        <h2>Weekly featured food</h2>
        <div className="cards">
          <LargeCard
            img="/img/breakfast_item.jpg"
            title="Breakfast"
            price="$4.50"
            name="Kale Chips Art Party"
            description="Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf..."
          />

          <LargeCard
            img="/img/lunch_item.jpg"
            title="Lunch"
            price="$7.50"
            name="Taiyaki Gastro Tousled
"
            description="Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf..."
          />

          <LargeCard
            img="/img/dinner_item.jpg"
            title="Dinner"
            price="$12.50"
            name="Taiyaki Gastro Tousled
"
            description="Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf..."
          />
        </div>
      </section>

      <section className="blogs">
        <div className="container">
          <h2>Our blog post</h2>
          <div className="cards">
            <div className="cardsRow">
              <LargeCard
                img="/img/blog_post_01.jpg"
                description="Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon..."
                section="Branding / Admin"
                date="26 Oct 2020"
                name="Stumptown Tofu Schlitz"
                link="Countinue Reading"
              />
              <LargeCard
                img="/img/blog_post_02.jpg"
                date="21 Oct 2020"
                name="Succulents Hashtag Folk"
                section="Branding / Admin"
                description="Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon..."
                link="Countinue Reading"
              />
            </div>
            <div className="cardsRow">
              <LargeCard
                img="/img/blog_post_03.jpg"
                date="11 Oct 2020"
                name="Knaus Sriracha Pinterest"
                section="Dessert / Chef"
                description="Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon..."
                link="Countinue Reading"
              />

              <LargeCard
                img="/img/blog_post_04.jpg"
                date="03 Oct 2020"
                name="Crucifix Selvage Coat"
                section="Plate / Chef"
                description="Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon..."
                link="Countinue Reading"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="emailSection">
        <SendMessage />
      </section>
    </>
  );
}
