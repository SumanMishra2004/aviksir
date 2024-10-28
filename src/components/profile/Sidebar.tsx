import {
  LaptopIcon,
  LogOutIcon,
  LucideMessageSquareText,
  Settings,
  UploadIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import { it } from "node:test";

import React from "react";
import { Button } from "../ui/button";

function Sidebar() {
  const profileSidebar = [
    {
      title: "Profile",
      link: "/profile",
      icon: <User2Icon />,
      type: "profile",
    },
    {
      title: "Be an Admin",
      link: "/profile/admin",
      icon: <LucideMessageSquareText />,
      type: "profile",
    },
    {
      title: "Settings",
      link: "/profile/edit",
      icon: <Settings />,
      type: "profile",
    },
    {
      title: "Your Blogs",
      link: "/profile/blogs",
      icon: <LaptopIcon />,
      type: "blog",
    },
    {
      title: "Upload Blog",
      link: "/profile/upload",
      icon: <UploadIcon />,
      type: "blog",
    },
    {
      title: "Log out",
      icon: <LogOutIcon />,
      link: "",
      type: "auth",
    },
  ];
  return (
    <div className="md:h-full h-fit md:w-[20%] flex-col lg:w-[15%] md:min-h-24 flex justify-around items-start border-r border-black">
      <TopProfileCard />
      <div className="h-fit flex flex-col items-center   w-full  profileSection">
        <div className="w-max flex flex-col items-start gap-5">
          {profileSidebar.map(
            (item, index) =>
              item.type === "profile" && (
                <Link key={index} href={item.link}>
                  <div
                    key={index}
                    className="flex flex-row justify-center items-center gap-1"
                  >
                    {item.icon}
                    {item.title}
                  </div>
                </Link>
              )
          )}
        </div>
      </div>

      <div className="h-fit flex flex-col items-center   w-full  profileSection">
        <div className="w-max flex flex-col items-start gap-5">
          {profileSidebar.map(
            (item, index) =>
              item.type === "blog" && (
                <Link key={index} href={item.link}>
                  <div
                    key={index}
                    className="flex flex-row justify-center items-center gap-1"
                  >
                    {item.icon}
                    {item.title}
                  </div>
                </Link>
              )
          )}
        </div>
      </div>

      <div className="h-fit flex flex-col items-center   w-full  profileSection">
        <div className="w-max flex flex-col items-start gap-5">
          {profileSidebar.map(
            (item, index) =>
              item.type === "auth" && (
                <Button variant={"outline"} size={"lg"} className="text-xl" key={index}>
                  {item.icon}
                  {item.title}
                </Button>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

function TopProfileCard() {
  return (
    <div className="w-full h-fit flex gap-4 items-center justify-center">
      <div className="profilePicture rounded-full bg-green-400 aspect-square h-full"></div>
      <div className="flex flex-col items-start">
        <div className="font-normal text-lg">John Doe</div>

        <div className="text-sm flex flex-row gap-4">
          <span className="text-sm">Admin</span>
          <div className="inline-block">4.8🌟</div>
        </div>
      </div>
    </div>
  );
}
