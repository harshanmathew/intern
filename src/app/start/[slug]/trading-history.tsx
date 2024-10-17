import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PaginationComp } from '@/components/pagination';

const TradingHistory = () => {
  return (
    <div className='w-full mt-2'>
      <h2 className='text-xl font-bold'>Trading History</h2>
      <Table className='bg-container rounded-t-[10px] p-5 mt-5 overflow-hidden'>
        <TableHeader className='h-[60px]'>
          <TableRow className='border-b border-white/25 text-white'>
            <TableHead className='text-left'>Account</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Bone</TableHead>
            <TableHead>YACHT</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Transaction</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='text-xs'>
          {[...Array(11)].map((_, index) => (
            <TableRow key={index}>
              <TableCell className='text-primary'>TE7j...Ez3U</TableCell>
              <TableCell
                className={index > 0 ? 'text-destructive' : 'text-secondary'}
              >
                {index > 0 ? 'Buy' : 'Sell'}
              </TableCell>
              <TableCell>250</TableCell>
              <TableCell>2,500</TableCell>
              <TableCell>1 minute ago</TableCell>
              <TableCell className='text-right'>c8ca8c0ab93e...b2</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption className='py-2 pr-10 mt-0 bg-container rounded-b-[10px]'>
          <PaginationComp />
        </TableCaption>
      </Table>
    </div>
  );
};

export default TradingHistory;
