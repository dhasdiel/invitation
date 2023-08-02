import { Button } from "./ui/button";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaWaze } from "react-icons/fa";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const ToolsButtons = () => {
  return (
    <div className="flex gap-2 mb-2">
      {/* <Button>
        <a
          target="_blank"
          href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20230822T153000Z%2F20230822T213000Z&text=%D7%97%D7%AA%D7%95%D7%A0%D7%94%20%D7%9B%D7%94%D7%9F%20%D7%97%D7%A1%D7%93%D7%99%D7%90%D7%9C%20%F0%9F%8E%89&location=%D7%92%D7%9F%20%D7%95%D7%90%D7%95%D7%9C%D7%9D%20%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D%20%D7%9B%D7%A9%D7%A8%20%D7%91%D7%A8%D7%9E%D7%AA%20%D7%92%D7%9F%20-%20%D7%93%D7%99%D7%9E%D7%95%D7%9C%20%D7%A4%D7%9C%D7%98%D7%99%D7%A0%D7%95%D7%9D%2C%20%D7%93%D7%99%D7%9E%D7%95%D7%9C%2C%20%D7%A8%D7%97%D7%95%D7%91%20%D7%96%D7%90%D7%91%20%D7%96'%D7%91%D7%95%D7%98%D7%99%D7%A0%D7%A1%D7%A7%D7%99%201%2C%20%D7%A8%D7%9E%D7%AA%20%D7%92%D7%9F%2C%20%D7%99%D7%A9%D7%A8%D7%90%D7%9C&details="
        >
          <BsFillCalendarCheckFill />
        </a>
      </Button> */}
      <AddToCalendarButton
        name="חתונה כהן חסדיאל 🎉"
        startDate="2023-08-22"
        startTime="17:30"
        endDate="2023-08-22"
        endTime="23:30"
        timeZone="Asia/Jerusalem"
        location="דימול פלטינום רמת גן"
        recurrence="daily"
        recurrence_interval="1"
        options="'Apple','Google'"
        listStyle="modal"
        trigger="click"
        // hideTextLabelButton
        label="שמור ליומן"
        lightMode="dark"
      />
      <Button>
        <a target="_blank" href="https://waze.com/ul/hsv8wxbs6w">
          <FaWaze />
        </a>
      </Button>
    </div>
  );
};

export default ToolsButtons;
