import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
interface Props {
  style?: string
}

function Header({style} : Props) {
  const items = useSelector(selectBasketItems);
  const session =false;
  return (
    <header className={`fixed top-0 z-40 flex w-full items-center justify-between ${style ? style : 'bg-[#E7ECEE]'} p-4`}>
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
          <Image src="/img.jpeg" alt="profile logo" layout="fill" objectFit="contain" />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a href="/history" className="headerLink">History</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {
                session? (
                    <Image src="/img.jpeg" alt="profile logo" className="cursor-pointer rounded-full" width={34} height={34}/>
                ) : <UserIcon className="headerIcon"/>
            }
      </div>
    </header>
  );
}

export default Header;