import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDisconnect } from 'wagmi';

export function ProfileDropdown({ children }: { children: React.ReactNode }) {
  const { disconnect } = useDisconnect();
  const router = useRouter();
  function handleLogout() {
    disconnect();
    localStorage.removeItem('token');
    router.push('/');
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className='bg-primary/50'>
        {/* <DropdownMenuLabel>Account</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={'/my-profile'}>My Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Buy $Bone</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
