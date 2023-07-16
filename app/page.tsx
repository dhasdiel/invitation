"use client"; // This is a client component 👈🏽
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex min-h-screen bg-gold flex-col items-center  xl:p-24 sm:p-0">
      <div className="p-4">
        <video
          className="xl:h-[30rem] rounded-xl"
          src="/invitation_video.mp4"
          typeof="mp4"
          controls
          // autoPlay
          // muted
        ></video>
      </div>
      <div >
        {open ? (
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSddgpAgyeRSpsgkV66BjdO8WPVqioB1-0A4U83zfKuIez5mNg/viewform?embedded=true"
            width="350"
            height="1700"
          >
            בטעינה…
          </iframe>
        ) : (
          <Button className="text-gold bg-white shadow text-lg"  size={"lg"} onClick={() => setOpen(true)}>
            לאישור הגעה לחץ כאן
          </Button>
        )}
      </div>
      <footer className="mt-auto mb-1">
        <strong className="text-white">פותח ע"י דניאל חסדיאל</strong>
      </footer>
    </main>
  );
}
