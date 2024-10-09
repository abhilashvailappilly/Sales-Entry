import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from "react";
import { fetchDetailData } from "@/lib/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { RootInterface } from "@/types/types";
import { setStoreTotalAmount } from "@/store/Slice/DataSlice";
interface ItemInterface {
    sr_no:number,
    vr_no:number,
 item_code: number,
 item_name: string,
 qty :number
 rate :number
 amount :number
}


const Detail = () => {
    // Use react-query to fetch data
    const [sr_no , _setSr_no] = useState(useSelector((state : RootInterface)=>state?.root.sr_no))
    const [fetchedData, setFetchedData] = useState<ItemInterface[]>([]);
    const [totalAmount , setTotalAmount] = useState<string>("")
    const dispatch = useDispatch()
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['detailData'],
        queryFn: fetchDetailData,
    });

    useEffect(() => {
        if (data && data.length > 0) {
            const filteredData = data.filter((item: ItemInterface) => item.sr_no === sr_no);
            setFetchedData(filteredData);
        }
 const totalAmount = fetchedData.reduce((total, item) => total + item.qty * item.rate, 0).toFixed(2);
        setTotalAmount(totalAmount)
       dispatch( setStoreTotalAmount(totalAmount))
    }, [data, sr_no]);

    // Loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Error handling
    if (isError) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <div className="w-full h-2/3 bg-gray-500/10 rounded-lg p-2 ">
            <div className="h-4/5 overflow-auto scrollbar-none">
                <Table className="text-white font-medium">
                    <TableHeader className="h-14 text-lg font-bold">
                        <TableRow className="hover:bg-gray-500/10">
                            <TableHead className="w-[10px] sm:text-xl text-sm">Sr NO</TableHead>
                            <TableHead className="sm:text-xl text-sm">Item Code</TableHead>
                            <TableHead className="sm:text-xl text-sm">Item Name</TableHead>
                            <TableHead className="text-right sm:text-xl text-sm">Qty</TableHead>
                            <TableHead className="text-right sm:text-xl text-sm">Rate</TableHead>
                            <TableHead className="text-right sm:text-xl text-sm">Amount</TableHead>
                            <TableHead className="text-center sm:text-xl text-sm">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* Map through the fetched data to dynamically create rows */}
                        {fetchedData.map((item : ItemInterface, index : number) => (
                            <TableRow key={index} className="hover:bg-gray-500/10">
                                <TableCell className="font-medium">{item.sr_no}</TableCell>
                                <TableCell>{item.item_code}</TableCell>
                                <TableCell>{item.item_name}</TableCell>
                                <TableCell className="text-right">{item.qty}</TableCell>
                                <TableCell className="text-right">{item.rate.toFixed(2)}</TableCell>
                                <TableCell className="text-right">{(item.qty * item.rate).toFixed(2)}</TableCell>
                                <TableCell className="flex justify-center items-center">
                                    <Button variant="destructive" className="hover:scale-105 transition-transform">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="bg-zinc-950/10 text-white font-bold w-full flex items-center justify-end text-right border-none hover:bg-transparent">
                <div className="text-right flex gap-20 hover:bg-transparent">
                    <div >Total</div>
                    <div className="text-right">${totalAmount}</div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
