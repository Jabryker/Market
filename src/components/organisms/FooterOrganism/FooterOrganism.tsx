import { FC } from "react";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { contactItems, footer } from "../../../assets/data";


export const FooterOrganism: FC = () => {
  return (
    <div className="bg-[#47535F] text-white py-16 px-4 lg:px-16 rounded-t-[50px]">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col lg:flex-row justify-between mt-6">
          <div className="lg:w-1/2">
            <h6 className="font-medium text-xl mb-4">Меню</h6>
            <ul className="space-y-2">
              {footer.map((item) => (
                <li key={item.id} className="py-1">
                  <Link
                    to={item.to}
                    className="text-[#A7B2BD] hover:text-white transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <p className="py-4 text-center">Безопасные покупки</p>
            <div className="flex justify-center lg:justify-start items-center my-4 lg:my-6 space-x-4">
              <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                <FaCcMastercard size={30} className="text-white hover:text-[#EC9A1E] transition-colors duration-300" />
                <span className="text-[#A7B2BD]">Mastercard</span>
              </div>
              <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                <FaCcVisa size={30} className="text-white hover:text-[#EC9A1E] transition-colors duration-300" />
                <span className="text-[#A7B2BD]">Visa</span>
              </div>
              <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                <FaCcPaypal size={30} className="text-white hover:text-[#EC9A1E] transition-colors duration-300" />
                <span className="text-[#A7B2BD]">Paypal</span>
              </div>
              <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                <FaCcApplePay size={30} className="text-white hover:text-[#EC9A1E] transition-colors duration-300" />
                <span className="text-[#A7B2BD]">ApplePay</span>
              </div>
              <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                <FaCcAmazonPay size={30} className="text-white hover:text-[#EC9A1E] transition-colors duration-300" />
                <span className="text-[#A7B2BD]">AmazonPay</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 mt-6 lg:mt-0">
          <p className="py-4 text-white">Социальная сеть</p>
          <div className="flex flex-col space-y-4">
            {contactItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                {item.icon}
                <span className="text-[#A7B2BD]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
