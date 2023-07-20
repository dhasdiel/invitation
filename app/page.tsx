import Confirm from "@/components/Confirm";
import InvitationMedia from "@/components/InvitationMedia";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gold flex-col items-center">
      {/* <div className="bg-white rounded-full mt-4">
        <Image src="/logo.png" alt={""} width="50" height="50" />
      </div> */}
      <div className="px-12 py-8">
        <InvitationMedia />
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
