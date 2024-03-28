import Form from "./Form";
import SocialSection from "./SocialSection";
import Title from "./TitleGlobal";

const ContactForm = () => {
  return (
    <section className="  max-lg:w-full lg:w-[50%]">
      <p className="text-secondary text-xl text-center mb-3.5 md:w-full lg:hidden">
        أو
      </p>
      <h1 className="lg:hidden ">
        <Title text="ارسل رسالة" />
      </h1>
      <Form />
      <SocialSection />
    </section>
  );
};
export default ContactForm;
