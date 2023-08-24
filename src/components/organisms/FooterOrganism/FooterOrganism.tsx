import { FC } from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
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

export const FooterOrganism: FC = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black-300">
        <div>
          <p className="py-4">Контакты</p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">О нас</h6>
            <ul>
              {footer.map((item) => (
                <li key={item.id} className="py-2 text-sm">
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="py-4 text-center">Безопасные покупки</p>
            <div className="flex justify-between md:w-[75%] my-6 m-10">
              <FaCcMastercard size={30} />
              <FaCcVisa size={30} />
              <FaCcPaypal size={30} />
              <FaCcApplePay size={30} />
              <FaCcAmazonPay size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-4 flex justify-between items-center">
        <p>&copy; 2023. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 my-2">
          <li>
            <Link to="/terms-of-use">Условия использования</Link>
          </li>
          <li>
            <Link to="/withdrawal-rights">Право на отзыв</Link>
          </li>
          <li>
            <Link to="/imprint">Выходные данные</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Условия и положения</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Политика конфиденциальности</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
