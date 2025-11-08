import { lazy } from "react";

const Button = lazy(() => import("../components/Button"));
const Map = lazy(() => import("../components/Map"));
const Banner = lazy(() => import("../components/Banner"));

export default function Contact() {
  return (
    <div className="contactPage">
      <main>
        <Banner
          title1="Contact us"
          text="Whatever drinking vinegar hella fingerstache shoreditch kickstarter kitsch. La croix hella iceland flexitarian letterpress.

"
        />
      </main>
      <section className="contactForm">
        <div className="colS">
          <h2 className="title">Message</h2>
          <form action="post">
            <div className="col">
              <fieldset>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name..."
                />
              </fieldset>
              <fieldset>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email..."
                />
              </fieldset>
              <fieldset>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Your number..."
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message"
                />
              </fieldset>
              <Button text="Send message" />
            </div>
          </form>
        </div>
        <div className="colS">
          <h2 className="title">Contact info</h2>
          <div className="text">
            <p>
              Pellentesque nec orci in erat venenatis viverra. Vivamus in lorem
              et leo feugiat ullamcorper. Donec volutpat fermentum erat non
              aliquet. Cras fermentum, risus a blandit sodales, erat turpis
              eleifend lacus, venenatis mollis leo lorem vel eros. Quisque et
              sem tempus, feugiat urna iaculis, tempor metus.
            </p>
            <p>
              30 Raffles Ave,
              <br />
              Singapore 039803
            </p>
          </div>
        </div>
      </section>
      <section>
        <Map />
      </section>
    </div>
  );
}
