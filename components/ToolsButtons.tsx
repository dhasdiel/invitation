"use client"; // This is a client component 👈🏽
import { Button } from "./ui/button";
import { FaWaze } from "react-icons/fa";
import "add-to-calendar-button";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const ToolsButtons = () => {
  return (
    <div className="flex justify-center items-center gap-2 mb-2">
      <AddToCalendarButton
        name="חתונה ברגר חסדיאל 🎉"
        startDate="2024-04-02"
        startTime="18:30"
        endDate="2024-04-02"
        endTime="23:30"
        timeZone="Asia/Jerusalem"
        location="גן ואולם אירועים כשר ברמת גן - דימול פלטינום, דימול, רחוב זאב ז'בוטינסקי 1, רמת גן, ישראל"
        recurrence="daily"
        recurrence_interval="1"
        options={["Apple", "Google"]}
        listStyle="modal"
        trigger="click"
        label="שמור ליומן"
        lightMode="dark"
        size="4"
        hideCheckmark
        styleDark="--btn-background: #0f172a;"
      />
      <Button className=" shadow-xl">
        <a target="_blank" href="https://waze.com/ul/hsv8wxbs6w">
          <FaWaze />
        </a>
      </Button>
    </div>
  );
};

export default ToolsButtons;
