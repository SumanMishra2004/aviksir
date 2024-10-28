import { MailIcon, PhoneCall } from "lucide-react";
import React from "react";

function ProfileSidebar() {
  return (
    <div className="w-[16rem]  h-full flex items-center justify-center gap-5 flex-col border-r border-black">
      <div className="w-full  h-fit flex gap-9 items-center justify-center flex-col">
        <div className="w-[8.32rem] aspect-square rounded-2xl shadow-black shadow-xl bg-green-500"></div>
        <div className="flex flex-row gap-2 items-end">
          <div className="text-2xl font-extrabold text-black">John Due</div>
          
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center pl-4 w-full border-y border-black">
        <div className="text-xl font-bold text-black w-full text-start">Ratting</div>
        <div className="text-5xl font-thin">4.5</div>
      </div>
      <div className="flex flex-col gap-2 items-start pl-4 w-full border-y border-black">
      <div className="text-lg font-bold text-black">Count</div>
        <div className="text-base font-medium text-black">Blogs- 6</div>
        <div className="inline-block text-base font-medium">Articles- 10</div>
      </div>
      <div className="flex flex-col gap-2 items-start pl-4 w-full border-y border-black">
        <div className="text-lg font-bold text-black">Contact Information</div>
        <div className="text-base flex gap-2">
          <PhoneCall size={18} />
          Not given
        </div>
        <div className="text-base flex gap-2">
          <MailIcon size={18}/>
          suman132j@gmail.com
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
