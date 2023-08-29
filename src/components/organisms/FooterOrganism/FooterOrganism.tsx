import { FC } from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaCcApplePay,
  FaCcAmazonPay,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { footer } from "../../../assets/data";

interface ContactItem {
  id: number;
  label: string;
  icon: JSX.Element;
}

const contactItems: ContactItem[] = [
  { id: 1, label: "@ordomarket", icon: <FaInstagram size={30} /> },
  { id: 2, label: "Ordo Market", icon: <FaFacebookSquare size={30} /> },
  { id: 3, label: "OrdoMarket", icon: <FaTwitterSquare size={30} /> },
  { id: 4, label: "Ordo Market", icon: <FaDribbbleSquare size={30} /> },
];

export const FooterOrganism: FC = () => {
  return (
    <>
      <div className="mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black-300 bg-[#47535F] rounded-t-[50px]">
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-white">Меню</h6>
            <ul>
              {footer.map((item) => (
                <li key={item.id} className="py-2 text-sm">
                  <Link to={item.to} className="text-[#A7B2BD]" >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="py-4 text-center text-white">Безопасные покупки</p>
            <div className="flex justify-between md:w-[75%] my-6 m-10">
              <FaCcMastercard size={30} />
              <FaCcVisa size={30} />
              <FaCcPaypal size={30} />
              <FaCcApplePay size={30} />
              <FaCcAmazonPay size={30} />
            </div>
          </div>
        </div>
        <div>
          <p className="py-4 text-white">Социальная сеть</p>
          <div className="md:w-[75%] my-6 flex-col space-y-4">
            {contactItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                {item.icon}
                <span className="text-[#A7B2BD]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
