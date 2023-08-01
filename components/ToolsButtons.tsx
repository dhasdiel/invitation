import { Button } from "./ui/button";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaWaze } from "react-icons/fa";

const ToolsButtons = () => {
  return (
    <div className="flex gap-2 mb-2">
      <Button>
        <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N2wzOTJrcGNtOG51amUycXM1bXByZW1ldG0gYzQ2MGE2OWRlMjI2MmFiNGRiOWE4N2E3ZDQyNTkxZjdhMTcxOWUyMGIwNjE0YzY3ZTRlODkwZGViY2NjNjQ3OUBn&tmsrc=c460a69de2262ab4db9a87a7d42591f7a1719e20b0614c67e4e890debccc6479%40group.calendar.google.com"
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
