import { lazy } from "react";

const Button = lazy(() => import("./Button"));

export default function BookingForm() {
  return (
    <div className="formContainer">
      <h3>Book Your Tabel Now</h3>
      <div className="formSection">
        <img loading="lazy" src="/img/book_left_image.jpg" alt="" />

        <form action="post">
          <h4>Reservation</h4>

          <div className="formRow">
            <fieldset title="Please select a day from the list">
              <select title="select day" name="day" required>
                <option value="">Select day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </fieldset>

            <fieldset title="PLease select the hour from the list">
              <select title="select hour" name="hour" required>
                <option value="">Select hour</option>
                <option value="10-00">10-00</option>
                <option value="12-00">12-00</option>
                <option value="14-00">14-00</option>
                <option value="16-00">16-00</option>
                <option value="18-00">18-00</option>
                <option value="20-00">20-00</option>
                <option value="22-00">22-00</option>
              </select>
            </fieldset>
          </div>

          <div className="formRow">
            <fieldset>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Full name"
              />
            </fieldset>
            <fieldset>
              <input
                required
                type="number"
                name="phone"
                id="number"
                placeholder="Phone number"
              />
            </fieldset>
          </div>

          <div className="formRow">
            <fieldset title="Please select the number of persons for the table">
              <select name="nuPersons" title="Number of persons">
                <option value="">How many persons?</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </fieldset>

            <Button text="Book Table" />
          </div>
        </form>
      </div>
    </div>
  );
}
