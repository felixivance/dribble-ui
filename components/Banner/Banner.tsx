import Image from "next/image";
import { ImPower } from "react-icons/im";
import { ImStatsDots } from "react-icons/im";
import { CgLoadbarSound } from "react-icons/cg";
import { IoPlayCircle } from "react-icons/io5";

export default function Banner() {
  return (
    <div className="flex flex-col justify-between  bg-white shadow-md p-20">
      <div className="flex w-full items-center justify-center">
        <div className="w-[40%]">
          <div className="flex justify-center">
            <div className="flex items-center relative">
              <div className="p-8 rounded-full bg-gray-200">
                <ImPower className="text-[#fe4a22] text-4xl" />
              </div>
              <div className="bg-[#fe4a22] rounded-full p-8 absolute left-16">
                <ImStatsDots className="text-white  text-4xl" />
              </div>
            </div>
            <div className="pl-16">
              <p className="text-8xl text-black">Analytics</p>
            </div>
          </div>
          <div className="flex items-center justify-center text-8xl space-x-3">
            <p>that</p>
            <p className="text-[#cccccc]">helps</p>
            <p>you</p>
          </div>
        </div>
        <div className="flex -pl-10 relative">
          <div>
            <IoPlayCircle className="absolute text-3xl -top-3 -left-3 text-[#fe4a22]" />
          </div>
          <div>
            <Image
              src="https://source.unsplash.com/800x600/?analytics"
              alt="analytics"
              className="rounded-md"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <div>
          <p className="text-8xl">shape</p>
        </div>
        <div className="p-4 bg-[#ffd025] rounded-full mt-[10px]">
          <CgLoadbarSound className="text-black text-4xl" />
        </div>
        <div>
          <p className="text-8xl"> the future</p>
        </div>
      </div>
    </div>
  );
}
