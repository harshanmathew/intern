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

const HolderDistribution = () => {
  return (
    <Table className='bg-container rounded-t-[10px] p-5 overflow-hidden'>
      <TableHeader className='h-[60px]'>
        <TableRow className='border-b border-white/25 text-white'>
          <TableHead className='text-left'>Holder</TableHead>
          <TableHead className='text-right'>Percentage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='text-xs'>
        {[...Array(8)].map((_, index) => (
          <TableRow key={index}>
            <TableCell className='text-primary'>TE7j...Ez3U</TableCell>
            <TableCell className='text-right'>7%</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption className='py-2 pr-10 mt-0 bg-container rounded-b-[10px]'>
        <PaginationComp />
      </TableCaption>
    </Table>
  );
};

export default HolderDistribution;
