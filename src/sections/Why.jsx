import { olivetree } from "../assets";

const Why = () => {
  const flyerUrl =
    "https://drive.google.com/file/d/1JSPz_Jyenk2AiiXYJ6XeooQ--weObpls/view";

  return (
    <section className="flex max-md:flex-col max-md:hidden relative max-lg:items-center lg:items-center  h-fit md:flex-row  px-20 sm:pt-16 ">
      <div className="   sm:relative z-10 flex items-center md:items-end flex-col   max-sm:mt-[120px]  md:w-[50%] max-md:px-10 ">
        <h1 className="sm:text-[60px] lg:text-[70px] xl:text-[80px] leading-[100%]  font-normal text-white sm:text-secondary text-center md:text-right   font-Aljazeera">
          لماذا
          <span className="text-primary"> “نصرة” </span>؟
        </h1>
        <p className="max-sm:hidden text-secondary  sm:text-secondary text-center md:text-right font-Aljazeera text-xl lg:text-3xl mt-4 tracking-wide">
          في الوقت الحالي الذي نعيشه و الحرب المستمرة, يزيد الواقع سوءًا يومًا
          بعد يوم، حيث تتزايد أعداد القتلى وتضعف صفوف المدافعين, إضافة إلى قصف
          الطائرات, فإن الجوع و البرد أصبح يخطف أرواح عشرات الأطفال و الأبرياء
          يوميا, الشيء الذي يوجب على كل شخص المساهمة بأي طريقة يجدها في سبيل
          إحداث تغيير.
        </p>

        <div className="grid justify-center group  mt-20">
          <a target="_blank" href={flyerUrl} download="flyer.pdf">
            <button className="lg:px-5 sm:px-3 active:delay-0 hover:delay-200 relative btn2 overflow-hidden sm:text-xl active:scale-95  duration-100  hover:text-white  py-2  flex  items-center justify-center  rounded-lg border-[3px]    border-primary  text-primary  font-Aljazeera lg:text-3xl">
              <svg
                className="mr-2"
                width="25"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 11.25V16.5C18 16.8978 17.842 17.2794 17.5607 17.5607C17.2794 17.842 16.8978 18 16.5 18H1.5C1.10218 18 0.720644 17.842 0.43934 17.5607C0.158035 17.2794 0 16.8978 0 16.5V11.25C0 11.0511 0.0790178 10.8603 0.21967 10.7197C0.360322 10.579 0.551088 10.5 0.75 10.5C0.948912 10.5 1.13968 10.579 1.28033 10.7197C1.42098 10.8603 1.5 11.0511 1.5 11.25V16.5H16.5V11.25C16.5 11.0511 16.579 10.8603 16.7197 10.7197C16.8603 10.579 17.0511 10.5 17.25 10.5C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25ZM8.46937 11.7806C8.53903 11.8504 8.62175 11.9057 8.7128 11.9434C8.80384 11.9812 8.90144 12.0006 9 12.0006C9.09856 12.0006 9.19616 11.9812 9.2872 11.9434C9.37825 11.9057 9.46097 11.8504 9.53063 11.7806L13.2806 8.03063C13.3503 7.96094 13.4056 7.87822 13.4433 7.78717C13.481 7.69613 13.5004 7.59855 13.5004 7.5C13.5004 7.40145 13.481 7.30387 13.4433 7.21283C13.4056 7.12178 13.3503 7.03906 13.2806 6.96937C13.2109 6.89969 13.1282 6.84442 13.0372 6.8067C12.9461 6.76899 12.8485 6.74958 12.75 6.74958C12.6515 6.74958 12.5539 6.76899 12.4628 6.8067C12.3718 6.84442 12.2891 6.89969 12.2194 6.96937L9.75 9.43969V0.75C9.75 0.551088 9.67098 0.360322 9.53033 0.21967C9.38968 0.0790178 9.19891 0 9 0C8.80109 0 8.61032 0.0790178 8.46967 0.21967C8.32902 0.360322 8.25 0.551088 8.25 0.75V9.43969L5.78063 6.96937C5.63989 6.82864 5.44902 6.74958 5.25 6.74958C5.05098 6.74958 4.86011 6.82864 4.71937 6.96937C4.57864 7.11011 4.49958 7.30098 4.49958 7.5C4.49958 7.69902 4.57864 7.88989 4.71937 8.03063L8.46937 11.7806Z"
                  strokeWidth="9"
                  className="group-hover:fill-white fill-[#F79122]"
                />
              </svg>
              حمل الملصق التعريفي
              <span className="sp w-80 h-80 "></span>
            </button>
          </a>
        </div>
      </div>
      <div className="absolute  top-0 left-0 w-full   max-sm:hidden sm:w-[50%] sm:relative sm:mt-5">
        <img
          src={olivetree}
          alt="background2"
          className="max-md:hidden max-lg:-mt-20"
        />
      </div>
    </section>
  );
};

export default Why;
