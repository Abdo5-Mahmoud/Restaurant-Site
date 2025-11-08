import { lazy } from "react";
const Banner = lazy(() => import("../components/Banner"));
const LargeCard = lazy(() => import("../components/LargeCard"));
const BookingForm = lazy(() => import("../components/BookingForm"));
export default function Blog() {
  return (
    <>
      <main>
        <Banner
          title1="Our Blog"
          text="You can feel free to use our template for any purpose of your websites. Thank you. Template re-distribution is not allowed in any download site."
        />
      </main>
      <section className="blogPage">
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
          <div className="pagination">
            <span>1</span>
            <span className="active">2</span>
            <span>3</span>
            <span>4</span>
            <span>{`>>`}</span>
          </div>
        </div>{" "}
      </section>

      <BookingForm />
    </>
  );
}
