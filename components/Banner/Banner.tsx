import Image from "next/image";
import { ImPower } from "react-icons/im";
import { ImStatsDots } from "react-icons/im";
import { CgLoadbarSound } from "react-icons/cg";

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-between p-6 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <div className="p-4 rounded-full bg-gray-200">
          <ImPower className="text-red-500 text-xl" />
        </div>
        <div className="bg-red-500 rounded-full p-4">
          <ImStatsDots className="text-white  text-xl" />
        </div>
        <span className="text-8xl text-black">Analytics</span>
        <div>
          <Image
            src="https://source.unsplash.com/800x600/?analytics"
            alt="Laptop with bar graphs"
            width={300}
            height={200}
          />
        </div>
      </div>
      <div className="flex text-8xl space-x-3">
        <p>that</p>
        <p className="text-gray-400">helps</p>
        <p>you</p>
      </div>
      <div className="flex items-center space-x-3">
        <p className="text-8xl">shape</p>
        <div className="p-4 bg-yellow-400 rounded-full">
          <CgLoadbarSound className="text-black" />
        </div>
        <p className="text-8xl"> the future</p>
      </div>
    </div>
  );
}
