import {ChangeEvent, FC, useState} from "react";
import {Button, TitleText} from "../../atoms/";
import nav from "../../../assets/images/contactIcons/point.svg";
import phone from "../../../assets/images/contactIcons/phone.svg";
import mail from "../../../assets/images/contactIcons/mail.svg";

export const ContactUsMolecules: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Отправка данных:", formData);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contactUs-block mb-40 rounded w-11/12 max-w-screen-2xl m-auto">
      <TitleText color="text-[#47535F]">Свяжитесь с нами</TitleText>
      <div
        className="contactUs-form-block gap-16 md:gap-28 py-16 md:py-28 flex flex-wrap md:flex-nowrap justify-evenly"
        style={{ background: "#F5F5F5"}}
      >
        <div className="contactUs-block-left w-11/12 md:w-2/5" style={{ color: "#ECEBE9"}}>
          <form onSubmit={handleSubmit} className="space-y-7 mt-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Ваш Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex space-x-4">
              <textarea
                name="message"
                placeholder="Ваше сообщение"
                className="w-full h-56 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">
                Отправить
              </Button>
            </div>
          </form>
        </div>
        <div className="contactUs-block-right w-11/12 md:w-2/6  items-center justify-center pt-10 space-y-7">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <img src={nav} alt="" className="shrink-0"/>
              <h5>Information technologies building, Victoria Island, Lagos, Nigeria.</h5>
            </div>
            <div className="flex align-center gap-4">
              <img src={phone} alt="" className="h-full"/>
              <span>+234 081-1236-4568</span>
            </div>
            <div className="flex text-center gap-4">
              <img src={mail} alt="" className="w-fit"/>
              <span>hello@info.com.ng</span>
            </div>
          </div>
          <div className="w-auto" style={{ height: "200px" }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25494.338365698876!2d74.58742015330075!3d42.87462162426562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3878fabf88e2b5d3%3A0x7041b01777c2e55e!2sBishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2sus!4v1566916780143!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
