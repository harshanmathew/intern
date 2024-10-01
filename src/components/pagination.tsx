import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

export function PaginationComp({ className }: { className?: string }) {
  return (
    <Pagination className={cn('justify-end', className)}>
      <PaginationContent>
        <PaginationItem className='mr-2'>
          <PaginationPrevious className='w-auto h-auto' href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className='ml-2'>
          <PaginationNext className='w-auto h-auto' href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
