import { Button } from "./ui/button";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaWaze } from "react-icons/fa";
import "add-to-calendar-button";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const ToolsButtons = () => {
  return (
    <div className="flex gap-2 mb-2">
      <AddToCalendarButton
        debug="true"
        name="חתונה כהן חסדיאל 🎉"
        startDate="2023-08-22"
        startTime="17:30"
        endDate="2023-08-22"
        endTime="23:30"
        timeZone="Asia/Jerusalem"
        location="דימול פלטינום רמת גן"
        recurrence="daily"
        recurrence_interval="1"
        options={["Apple", "Google"]}
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
