import { Button } from "./ui/button";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaWaze } from "react-icons/fa";

const ToolsButtons = () => {
  return (
    <div className="flex gap-2 mb-2">
      <Button>
        <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=M2wwamtwNmhkZHR2cjhzMm5iMmh2cTVwcGogeWFlbGgyMDEwQG0&amp;tmsrc=yaelh2010%40gmail.com"
        >
          <BsFillCalendarCheckFill />
        </a>
      </Button>
      <Button>
        <a target="_blank" href="https://waze.com/ul/hsv8wxbs6w">
          <FaWaze />
        </a>
      </Button>
    </div>
  );
};

export default ToolsButtons;
