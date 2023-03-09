import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import PostJobModal from "./PostJobModal";



const Hero = async () => {
   const session = await getServerSession(authOptions);
   console.log(session);

  return (
    <div className="relative mx-auto  flex w-full max-w-[1440px]">
      <div className="mx-auto grid h-[600px] w-10/12 grid-cols-1 space-y-4 space-x-4 overflow-hidden md:grid-cols-2">
        <div className="item-center ss:mt-8 flex flex-col justify-center space-y-8 md:mt-0 ">
          <h1 className="text-secondary-color text-5xl font-bold leading-[4rem]">
            Alumni Portal
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nunc gravida adipiscing
            egestas aliquam vestibulum tortor quam quis et.
          </p>
          <div className="items-center space-y-2 md:flex md:space-x-4">
            <form className="flex justify-between space-x-2 rounded-md border-2 border-gray-300 py-1 px-2">
              <input
                className="w-full rounded-md border py-3 pl-2"
                type="text"
                placeholder="Search"
              />

              <button className="z-10 rounded-md bg-[#FA510F] px-8 text-white">
                Search
              </button>
            </form>
            {session?.user && <PostJobModal />}
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Hero;
