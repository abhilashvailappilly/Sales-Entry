import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const Detail = () => {
    return (

        <div className="w-full h-2/3 bg-gray-500/10 rounded-lg p-2 ">
            <div className="h-4/5 overflow-auto scrollbar-none">
            <Table className="text-white font-medium  ">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader className="h-14 text-lg text-bold ">
                    <TableRow className="hover:bg-gray-500/10">
                        <TableHead className="w-[10px] sm:text-xl text-sm">Sr NO</TableHead>
                        <TableHead className="sm:text-xl text-sm">Item Code</TableHead>
                        <TableHead className="sm:text-xl text-sm">Item Name</TableHead>
                        <TableHead  className="text-right sm:text-xl text-sm">Qty</TableHead>
                        <TableHead className="text-right sm:text-xl text-sm">Rate</TableHead>
                        <TableHead className="text-right sm:text-xl text-sm">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="">
                <TableRow className="hover:bg-gray-500/10">
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-500/10">
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Item 1</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell className="text-right">2.00</TableCell>
                        <TableCell className="text-right">20.00</TableCell>
                        <TableCell className="text-right">40.00</TableCell>
                    </TableRow>
                    
                    
                </TableBody>
           
            </Table>
            </div>
            <TableFooter className="bg-zinc-950/10 text-white font-bold w-full flex items-center  justify-end text-right border-none">
        <TableRow className="text-right flex gap-20">
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>

        </div>

    );
};

export default Detail;
