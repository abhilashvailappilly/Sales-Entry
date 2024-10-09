import { useQuery } from '@tanstack/react-query';
import {  useSelector } from 'react-redux';
import { RootInterface ,HeaderInterface } from "@/types/types";
import { fetchHeaderData } from "@/lib/fetchData"; 

const Header = () => {
  const sr_no = useSelector((state: RootInterface) => state.root.sr_no); 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['headerData', sr_no], 
    queryFn: fetchHeaderData, 
    enabled: !!sr_no, 
  });

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error handling
  if (isError) {
    return <div>Error fetching header data: {error.message}</div>;
  }

  const filteredHeaderData = data.filter((item : HeaderInterface) => item.sr_no === sr_no);

  return (
    <div className="w-full h-1/3 mb-2 bg-gray-500/10 rounded-lg">
      <h1 className="w-full h-1/6 text-center bg-yellow-950">Header</h1>
      <div className="h-5/6 py-2">
        <div className="h-1/2 w-full flex justify-center items-center gap-4 ">
          <div className="flex h-full w-1/3 gap-2 justify-center items-center ">
            <span className="text-white font-bold text-center text-sm md:text-md">Vr NO:-</span>
            <input type="text" className="h-1/2 w-1/2 md:w-4/5 rounded-md" value={filteredHeaderData[0]?.vr_no || ''} readOnly />
          </div>
          <div className="flex h-full w-1/3 gap-2 justify-center items-center antialiased ">
            <span className="text-white font-bold text-center text-xs md:text-md">Vr Date :-</span>
            <input type="text" className="h-1/2 w-1/2 md:w-4/5 rounded-md" value={filteredHeaderData[0]?.vr_date || ''} readOnly />
          </div>
          <div className="flex h-full w-1/3 gap-2 justify-center items-center ">
            <span className="text-white font-bold text-center text-sm md:text-md">Status :-</span>
            <span className="h-1/2 w-1/2 text-gray-400 font-bold text-2xl">{filteredHeaderData[0]?.status || 'N/A'}</span>
          </div>
        </div>
        <div className="h-1/2 w-full flex justify-center items-center ">
          <div className="flex w-2/3 h-full gap-1 justify-center items-center">
            <span className="text-white font-bold text-center text-sm md:text-md">Ac Name :- </span>
            <input type="text" className="h-1/2 w-2/3 md:w-4/5 rounded-md" value={filteredHeaderData[0]?.ac_name || ''} readOnly />
          </div>
          <div className="flex w-1/3 h-full gap-1 justify-center items-center ">
            <span className="text-white font-bold text-center text-xs md:text-md">Acc Amt :-</span>
            <input type="text" className="h-1/2 w-1/2 md:w-4/5 rounded-md" value={filteredHeaderData[0]?.acc_amt || ''} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
