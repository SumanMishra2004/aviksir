"use client";
import React, { useState } from "react";
import CardProject from "../ui/CardProject"; // Ensure this is a valid component
import { DataTableDemo } from "./Datatable/ProcessTable";

// // Define the individual components
const Blogs: React.FC = () => {
  return (
    <div>
      <CardProject />
    </div>
  );
};
const Article: React.FC = () => {
  return (
    <div>
      <CardProject />
    </div>
  );
};
const Analytics: React.FC = () => {
  return <div>Analytics Component</div>;
};
const Status: React.FC = () => {
  return <div className="h-fit w-full"><DataTableDemo/></div>;
};

// Define the profile navbar data
const ProfileNavbarData = [
  {
    title: "Blog",
  },
  {
    title: "Article",
  },
  {
    title: "Analytics",
  },
  {
    title: "Status",
  },
];

const ProfileNavbar: React.FC = () => {
  // Initialize the state with Blogs as the default component
  const [ActiveComponent, setActiveComponent] = useState<string>("Blog");

  const handleClick = (component: string) => {
    console.log(component);

    setActiveComponent(component);
  };

  return (
    <div className="flex flex-col h-full w-full ">
      <div className="w-full h-[4rem] flex items-center justify-evenly border-b border-black">
        {ProfileNavbarData.map((item, index) => (
          <span
            key={index}
            className="text-lg cursor-pointer"
            onClick={() => handleClick(item.title)}
          >
            {item.title}
          </span>
        ))}
      </div>
      <div className="flex-grow">
        {ActiveComponent === "Blog" && <Blogs />}
        {ActiveComponent === "Article" && <Article />}
        {ActiveComponent === "Analytics" && <Analytics />}
        {ActiveComponent === "Status" && <Status />}
      </div>
    </div>
  );
};

export default ProfileNavbar;
