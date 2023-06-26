import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
const Main = () => {
  return (
    <div>
      <img
        className="w-full object-cover h-screen top-[-25px] relative"
        src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMwNTAwNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] mx-auto h-full w-full flex flex-col justify-center  lg:items-start items-center">
          <h1 className="sm:text-5xl text-sm font-bold text-gray-800">
            I am Kazi Zamil Rahman
          </h1>
          <span className=" sm:text-4xl text-2xl flex pt-5">
            I am a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",

                2000,
                "Programmer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                marginLeft: "10px",
              }}
              repeat={Infinity}
            />
          </span>
          <div className="flex gap-x-6 justify-center items-center w-full pt-5 max-w-[295px]">
            <AiOutlineFacebook className="cursor-pointer" size={40} />
            <AiOutlineLinkedin className="cursor-pointer" size={40} />
            <AiOutlineYoutube className="cursor-pointer" size={40} />
            <AiOutlineTwitter className="cursor-pointer" size={40} />
            <AiOutlineInstagram className="cursor-pointer" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
