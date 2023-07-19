"use client"; // This is a client component 👈🏽
import { useState } from "react";
import { Button } from "./ui/button";
import { IoMdCloseCircle } from "react-icons/io";

const Confirm = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((currState) => !currState);
  };

  return (
    <div>
      {open ? (
        <div>
          <IoMdCloseCircle
            className="mb-1 text-xl text-white cursor-pointer hover:text-red-500"
            onClick={handleClick}
          />
          <iframe
            className="bg-white rounded-xl mb-4 shadow-2xl"
            src="https://docs.google.com/forms/d/e/1FAIpQLSddgpAgyeRSpsgkV66BjdO8WPVqioB1-0A4U83zfKuIez5mNg/viewform?embedded=true"
            width="350"
            height="1700"
          >
            בטעינה…
          </iframe>
        </div>
      ) : (
        <Button
          className="text-gold bg-white shadow-2xl text-lg mb-2 hover:scale-110"
          size={"lg"}
          onClick={handleClick}
        >
          לאישור הגעה לחץ כאן
        </Button>
      )}
    </div>
  );
};

export default Confirm;
