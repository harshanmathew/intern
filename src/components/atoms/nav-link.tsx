import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const NavLink: React.FC<NavLinkType> = ({ active, href, label }) => {
  const [width, setWidth] = useState(25);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (labelRef.current) {
      setWidth(labelRef.current.offsetWidth);
    }
  }, [setWidth]);

  return (
    <Link href={`${href}`} title={label}>
      <div className='flex flex-col items-center gap-y-[10px]'>
        <span className='text-2xl leading-none capitalize' ref={labelRef}>
          {label}
        </span>
        {active && (
          <span
            className='inline-block border-2 border-primary rounded-[10px] transition-all'
            style={{ width: `${width - 15}px` }}
          />
        )}
      </div>
    </Link>
  );
};

export default NavLink;
