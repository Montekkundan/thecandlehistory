import Image from 'next/image'
import Link from 'next/link'
import {
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';
import { useState } from "react";

function Header() {
    const session =false;
    const items = useSelector(selectBasketItems)
    const [effect, setEffect] = useState(false);
  return (
    <header className="text-sm fixed top-0 z-40 flex w-full my-0 mx-auto items-center justify-between md:justify-center space-x-10 bg-[#E7ECEE] px-4 py-1 md:p-0.5 ">
      <div className="flex md:hidden">
        X
      </div>
        <div className="flex items-center justify-center ">
            <Link href="/">
            <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
                <Image src="/img.jpeg" layout="fill" objectFit="contain" alt='logo'/>
            </div>
            </Link>
        </div>
        <div className="hidden  items-center  space-x-7 md:flex">
            <a href="" className="headerLink">Products</a>
            <a href="" className="headerLink">History</a>
            <a href="" className="headerLink">Support</a>
            <a href="" className="headerLink">Our Journey</a>
        </div>
        <div className="flex items-center justify-center space-x-7 ">
            <MagnifyingGlassIcon className="headerIcon hidden md:inline w-5 h-5" onClick={() => setEffect(true)} />
            <Link href="/checkout">
            <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
                <ShoppingBagIcon className="headerIcon w-5 h-5 "/>
              {/*{`${effect && "hidden transition-all ease-out "} headerIcon w-5 h-5  `}*/}
            </div>
            </Link>
            {
                session? (
                    <Image src="/img.jpeg" alt="profile logo" className="cursor-pointer rounded-full" width={34} height={34}/>
                ) : <UserIcon className="headerIcon w-5 h-5"/>
            }
        </div>
      {/*<div>*/}
      {/*  <div></div>*/}
      {/*  <div>*/}
      {/*    <form action="">*/}
      {/*      <input type="text" placeholder="Search"/>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*  <div></div>*/}
      {/*  <div>*/}
      {/*    <h2>Quick Links</h2>*/}
      {/*    <ul>*/}
      {/*      <li>*/}
      {/*        <a href="https://www.google.com">Hello</a>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </header>
  )
}

export default Header