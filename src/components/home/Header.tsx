
const Header = () => {
  return (
    <div className="w-full h-1/3 mb-2 bg-gray-500/10 rounded-lg">
      <h1 className="w-full h-1/6 text-center bg-yellow-950">Header </h1>
      <div className="h-5/6 py-2">
        <div className="h-1/2 w-full flex  justify-center items-center gap-4 ">
          <div className="flex h-full w-1/3 gap-2 justify-center items-center ">
            <span className="text-white font-bold text-center text-sm md:text-md">Vr NO:-</span>
            <input type="text" className="h-1/2 w-1/2 md:w-4/5 rounded-md" />
          </div>
          <div className="flex h-full w-1/3 gap-2 justify-center items-center antialiased  ">
            <span className="text-white font-bold text-center text-xs md:text-md">Vr Date :-</span>
            <input type="text"  className="h-1/2 w-1/2 md:w-4/5 rounded-md" />
          </div>
          <div className="flex h-full w-1/3 gap-2 justify-center items-center ">
            <span className="text-white font-bold text-center text-sm md:text-md">Status :-</span>
            <span  className="h-1/2 w-1/2 text-gray-400 font-bold text-2xl">A</span>
          </div>
        </div>
        <div className="h-1/2 w-full flex justify-center items-center ">
          <div className="flex w-2/3 h-full gap-1 justify-center items-center" >
            <span className="text-white font-bold text-center text-sm md:text-md">Ac Name :- </span>
            <input type="text"  className="h-1/2 w-2/3 md:w-4/5 rounded-md" />

          </div>
          <div className="flex w-1/3 h-full gap-1 justify-center items-center ">
            <span className="text-white font-bold text-center text-xs md:text-md">Acc Amt :-</span>
            <input type="text"  className="h-1/2 w-1/2 md:w-4/5 rounded-md" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
