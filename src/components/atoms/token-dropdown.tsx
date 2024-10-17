import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BoneIcon } from '@/lib/index-icons';

export function TokeDropdown({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className='bg-input min-w-40'>
        <DropdownMenuLabel>Tokens</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BoneIcon className='w-[20px] h-auto mr-auto' />
            Bone
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BoneIcon className='w-[20px] h-auto mr-auto' />
            Bone 2.0
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
