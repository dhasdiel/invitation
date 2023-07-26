import Credit from "@/components/Credit";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gold flex-col items-center">
      <div className="bg-white rounded-full mt-4">
        <Image src="/logo.png" alt={"logo"} width="50" height="50" />
      </div>
      <Card dir="rtl" className="w-[350px] mt-4 shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-gold">דניאל & אלה</CardTitle>
          <CardDescription>ברוך הבא לפורטל ההזמנות </CardDescription>
        </CardHeader>
        <CardContent className="text-center">מאיזה צד אתה?</CardContent>
        <CardFooter className="flex justify-evenly">
          <Button className="hover:bg-white hover:text-black hover:scale-110 outline outline-1 outline-white hover:outline-black">
            <Link href="/bride"> צד כלה 👰</Link>
          </Button>
          <Button className="bg-white text-black hover:text-white hover:scale-110 outline outline-1 outline-black hover:outline-white">
            <Link href="/groom"> צד חתן 🤵</Link>
          </Button>
        </CardFooter>
      </Card>
      <Credit />
    </main>
  );
}
