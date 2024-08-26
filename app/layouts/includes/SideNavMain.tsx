import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function SideNavMain() {
    const pathname = usePathname();

    return (
        <>
            <div
                id='SidNavMain'
                className='fixed z-20 bg-white pt-[70px] h'
            ></div>
        </>
    );
}
