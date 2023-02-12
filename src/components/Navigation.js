import { AiOutlineHome, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex relative left-[20px] top-[20px]">
      <Link to={"/"}>
        <div className="flex items-center cursor-pointer group mr-[40px]">
          <AiOutlineHome
            className=" mr-1 group-hover:fill-primary group-hover:-translate-y-1 transition-all fill-customLight"
            size={25}
          />

          <p className="text-[17px] text-customLight font-medium text-[16px]  group-hover:text-primary group-hover:-translate-y-1 transition-all">
            Home
          </p>
        </div>
      </Link>

      <Link to={"/about"}>
        <div className="flex items-center cursor-pointer group mr-[40px]">
          <AiOutlineUser
            className=" mr-1 group-hover:fill-primary group-hover:-translate-y-1 transition-all fill-customLight"
            size={25}
          />

          <p className="text-[17px] text-customLight font-medium text-[16px]  group-hover:text-primary group-hover:-translate-y-1 transition-all">
            About
          </p>
        </div>
      </Link>

      <Link to={"/contact"}>
        <div className="flex items-center cursor-pointer group mr-[40px]">
          <AiOutlineMail
            className=" mr-1 group-hover:fill-primary group-hover:-translate-y-1 transition-all fill-customLight"
            size={25}
          />

          <p className="text-[17px] text-customLight font-medium text-[16px]  group-hover:text-primary group-hover:-translate-y-1 transition-all">
            Contact
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
