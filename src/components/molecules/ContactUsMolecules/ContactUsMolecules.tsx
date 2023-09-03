import { useState } from "react";
import { TitleText } from "../../atoms/";
import nav from "../../../assets/images/contactIcons/.png";
import phone from "../../../assets/images/contactIcons/phone.png";
import mail from "../../../assets/images/contactIcons/mail.png";

export const ContactUsMolecules = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Отправка данных:", { name, email, message });
  };

  return (
    <div className="contactUs-block">
      <TitleText>Свяжитесь с нами</TitleText>
      <div
        className="contactUs-form-block w-11/12 px-28 py-28 container mx-auto flex justify-between"
        style={{ background: "#F5F5F5" }}
      >
        <div className="contactUs-block-left w-1/2 pr-7" style={{ color: "#0F001A" }}>
          <h2>Оставьте нам сообщение</h2>
          <form onSubmit={handleSubmit} className="space-y-7 mt-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Введите ваше имя"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Ваш Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex space-x-4">
              <textarea
                placeholder="Ваше сообщение"
                className="w-full h-56 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
        <div className="contactUs-block-right w-2/5  items-center justify-center px-10 pt-10 space-y-7">
          <ul className="space-y-3 flex-column justify-center">
            <li className="flex  space-x-3" style={{ margin: "10px 0" }}>
              <img src={nav} alt="" style={{ width: "20px", height: "20px" }} />
              <span>Infomation technologies building, Victoria Island, Lagos, Nigeria.</span>
            </li>
            <li className="flex  space-x-3" style={{ margin: "30px 0" }}>
              <img src={phone} alt="" style={{ width: "20px", height: "20px" }} />
              <span>+234 081-1236-4568</span>
            </li>
            <li className="flex  space-x-3" style={{ margin: "30px 0 10px" }}>
              <img src={mail} alt="" style={{ width: "20px", height: "20px" }} />
              <span>hello@info.com.ng</span>
            </li>
          </ul>
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
