import { RightOutlined } from "@ant-design/icons";
import React from "react";

const Navigation = () => {
  return (
    <div className="p-10">
      <ul className="flex flex-col gap-5 text-gray-400">
        {[
          { img: "img/key1.png", label: "Dashboard" },
          { img: "img/square2.png", label: "Product" },
          { img: "img/userSquare3.png", label: "Customers" },
          { img: "img/walletMoney4.png", label: "Income" },
          { img: "img/discount5.png", label: "Promote" },
          { img: "img/message6.png", label: "Help" },
        ].map((item, index) => (
          <button
            key={index}
            className="hover:bg-blue-500 p-3 rounded-xl hover:text-white w-64 group"
          >
            <li className="flex gap-3 items-center">
              <img className="" src={item.img} alt={item.label} />
              {item.label}
              <span className="ml-auto transition-transform group-hover:translate-x-2">
                <RightOutlined />
              </span>
            </li>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
