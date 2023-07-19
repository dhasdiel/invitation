"use client"; // This is a client component 👈🏽
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex min-h-screen bg-gold flex-col items-center">
      <div className="px-12 py-2">
        <video
          className="xl:h-[30rem] rounded-xl shadow-2xl"
          src="/invitation_video.mp4"
          typeof="mp4"
          controls
          playsInline
        ></video>
      </div>
      <div>
        {open ? (
          <iframe
            className="bg-white rounded-xl mb-2 shadow-2xl"
            src="https://docs.google.com/forms/d/e/1FAIpQLSddgpAgyeRSpsgkV66BjdO8WPVqioB1-0A4U83zfKuIez5mNg/viewform?embedded=true"
            width="350"
            height="1700"
          >
            בטעינה…
          </iframe>
        ) : (
          <Button
            className="text-gold bg-white shadow text-lg mb-2 hover:scale-110"
            size={"lg"}
            onClick={() => setOpen(true)}
          >
            לאישור הגעה לחץ כאן
          </Button>
        )}
      </div>
      <footer className="mt-auto mb-1 w-full text-center">
        <Separator />
        <strong className="text-white">
          פותח על ידי{" "}
          <a href="https://www.linkedin.com/in/daniel-hasdiel-3933b21a4/">
            דניאל חסדיאל
          </a>
        </strong>
      </footer>
    </main>
  );
}
