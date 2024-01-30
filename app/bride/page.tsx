import ConfirmForm from "@/components/ConfirmForm";
import Credit from "@/components/Credit";
import InvitationMedia from "@/components/InvitationMedia";
import ToolsButtons from "@/components/ToolsButtons";

const page = () => {
  return (
    <div className="flex min-h-screen bg-gold flex-col items-center">
      <div className="p-8">
        <InvitationMedia />
      </div>
      <ConfirmForm />
      <ToolsButtons />
      <Credit />
    </div>
  );
};

export default page;
