import Form from "@/components/contact/Form";
import bgImage from "@/assert/bgImage.svg";

const ContactPage = () => {
  return (
    <>
      <div className="text-center my-4">
        <h1 className="lg:text-[48px] text-[32px] font-bold text-[#dbc027]">
          Get in touch
        </h1>
      </div>
      <Form />
    </>
  );
};

export default ContactPage;
