"use client";
import { useState } from "react";
import { Button, Drawer, DrawerProps } from "antd";
import { MenuUnfoldOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import UserData from "./userData";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className=" p-5  md:p-10">
      <Button type="primary" onClick={showDrawer} className="md:hidden">
        <MenuUnfoldOutlined />
      </Button>
      <Drawer
        className=""
        title="Dashboard"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="flex gap-3 mb-10">
          <img className="w-10 h-10" src="/img/userAva.png" alt="Avatar" />
          <div>
            <p className=" font-bold">Evano</p>
            <p className=" text-gray-400">Project Manager</p>
          </div>
        </div>
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
              onClick={onClose}
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
      </Drawer>

      <ul className=" flex-col gap-5 text-gray-400 hidden md:flex">
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
