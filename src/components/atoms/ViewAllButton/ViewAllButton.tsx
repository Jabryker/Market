import {Link} from "react-router-dom";
import {FC} from "react";

interface IViewAllButtonProps {
    to: string;
    color: string;
}

export const ViewAllButton: FC<IViewAllButtonProps> = ({ to, color }) => {
  return (
    <div className="mt-4 flex justify-end mr-5">
      <Link to={to} className={`text-${color} hover:underline font-bold`}>
              Смотреть все &gt;
      </Link>
    </div>
  )
}