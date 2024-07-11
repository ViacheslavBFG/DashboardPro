"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Pagination, PaginationProps } from "antd";
import React, { useState } from "react";
const data = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];

const TableCustom = () => {
  const [current, setCurrent] = useState(3);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="overflow-x-auto rounded-3xl bg-white p-8  shadow-2xl h-fit mb-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className=" text-2xl font-bold">All Customers</p>
          <p className=" text-green-500">Active Members</p>
        </div>
        <div className="flex gap-1">
          <SearchOutlined style={{ fontSize: "20px", color: "#3f3f3f" }} />
          <input
            type="text"
            className=" bg-blue-100 rounded-md p-1 indent-1  shadow-xl"
            placeholder="Search"
          />
        </div>
      </div>
      <table className="min-w-full  border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 text-gray-400 tracking-wider">
              Customer Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 text-gray-400 tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 text-gray-400 tracking-wider">
              Phone Number
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 text-gray-400 tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 text-gray-400 tracking-wider">
              Country
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm leading-4 text-gray-400 tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5">
                {person.name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5">
                {person.company}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5">
                {person.phone}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5">
                {person.email}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5">
                {person.country}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5">
                <span
                  className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                    person.status === "Active"
                      ? "text-green-900"
                      : "text-red-900"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-0 ${
                      person.status === "Active" ? "bg-green-200" : "bg-red-200"
                    } opacity-50 rounded-md`}
                  ></span>
                  <span className="relative">{person.status}</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-end justify-between">
        <p className=" text-gray-400 text-sm">
          Showing data 1 to 8 of 256K entries
        </p>
        <Pagination
          className="mt-7"
          current={current}
          onChange={onChange}
          total={50}
          align="end"
        />
      </div>
    </div>
  );
};

export default TableCustom;
