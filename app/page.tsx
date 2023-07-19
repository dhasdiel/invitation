import Confirm from "@/components/Confirm";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gold flex-col items-center">
      <div className="px-12 py-8">
        <video
          className="xl:h-[30rem] rounded-xl shadow-2xl"
          src="/invitation_video.mp4#t=0.001"
          typeof="mp4"
          controls
          playsInline
        ></video>
      </div>
      <Confirm />
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
