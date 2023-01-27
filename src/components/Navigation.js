import { man, girl, home } from "../assets/images/index.js";

const Navigation = () => {
  return (
    <div className="w-full bg-primary h-96 relative">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-white text-7xl">Semir Selman</h1>
      </div>

      <div className="flex absolute top-[80%] left-[50%] translate-x-[-50%] w-fit">
        <div className="bg-white w-[150px] h-[150px] rounded mx-5 drop-shadow flex flex-col items-center justify-between p-1 hover:translate-y-[-20px] cursor-pointer duration-200 ">
          <div className="w-full flex justify-center">
            <img className="object-cover " src={home} alt="" />
          </div>
          <p className="w-fit">Home</p>
        </div>
        <div className="bg-white w-[150px] h-[150px] rounded mx-5 drop-shadow flex flex-col items-center justify-between p-1 hover:translate-y-[-20px] cursor-pointer duration-200 ">
          <div className="w-full flex justify-center">
            <img className="object-cover " src={man} alt="" />
          </div>
          <p className="w-fit">About Me</p>
        </div>
        <div className="bg-white w-[150px] h-[150px] rounded mx-5 drop-shadow flex flex-col items-center justify-between p-1 hover:translate-y-[-20px] cursor-pointer duration-200 ">
          <div className="w-full flex justify-center">
            <img className="object-cover " src={girl} alt="" />
          </div>
          <p>Contacts</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
