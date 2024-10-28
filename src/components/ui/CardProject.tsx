import { Star } from "lucide-react";
import React from "react";

interface CardProjectProps {
  blogImage?: string;
  blogTitle?: string;
  blogDescription?: string;
  blogAuthor?: string;
  blogRating?: number;
}

function CardProject({
  blogImage,
  blogTitle,
  blogDescription,
  blogAuthor,
  blogRating,
}: CardProjectProps) {
  return (
    <div className="max-w-[95vw] mx-auto md:mx-0 w-[20rem]  py-4 h-fit border-2 border-blue-600 rounded-2xl flex flex-col items-center justify-center gap-7 bg-gradient-to-t to-blue-400 via-black from-slate-700">
      <div className="w-[96%] relative aspect-video bg-red-500 rounded-2xl shadow-2xl shadow-black overflow-hidden">
        <img src={blogImage} className="size-full" />
        <div className="absolute top-0 h-fit px-5 py-1 right-4 rounded-b-xl bg-black text-white w-fit text-lg">
          {blogAuthor}
        </div>
        <div className="absolute bottom-0 h-fit px-5 py-1 left-4 rounded-t-xl bg-black text-white w-fit text-lg flex gap-3 items-center justify-center">
          <Star />
          {blogRating}
        </div>
      </div>
      <p className=" font-semibold text-3xl px-2 text-center underline text-slate-200">
        {blogTitle}
      </p>
      <p className="text-white font-medium text-md text-justify px-2">
        {blogDescription}
      </p>
      <button className="bg-white text-blue-600 font-semibold text-lg px-4 py-2 rounded-xl shadow-xl shadow-black border border-blue-800">
        View Project
      </button>
    </div>
  );
}

export default CardProject;
