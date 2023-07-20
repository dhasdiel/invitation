import ConfirmForm from "@/components/ConfirmForm";
import Credit from "@/components/Credit";
import InvitationMedia from "@/components/InvitationMedia";

const page = () => {
  return (
    <div className="flex min-h-screen bg-gold flex-col items-center">
      <div className="px-12 py-8">
        <InvitationMedia />
      </div>
      <ConfirmForm />
      <Credit />
    </div>
  );
};

export default page;
