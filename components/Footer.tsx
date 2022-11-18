import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-2">
              <a className="inline-block font-bold text-xl" href="#">The Candle History</a>
            </div>
            <ul className="flex mb-4 md:order-1 -ml-2  md:mb-0">
              <li>
                <a
                  className="text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label="Twitter"
                  href="#"
                >
                  <SlSocialTwitter className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label="Instagram"
                  href="#"
                >
                  <AiOutlineInstagram className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label="Facebook"
                  href="#"
                >
                  <AiOutlineFacebook className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <div className="text-gray-700 font-medium mb-2">Product</div>
            <ul className="text-sm">
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Features</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Security</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Team</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Enterprise</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Customer stories</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Pricing</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Resources</a
                >
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <div className="text-gray-700 font-medium mb-2">Platform</div>
            <ul className="text-sm">
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Developer API</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Partners</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Atom</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Electron</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >GitHub Desktop</a
                >
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <div className="text-gray-700 font-medium mb-2">Support</div>
            <ul className="text-sm">
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Docs</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Community Forum</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Professional Services</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Skills</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Status</a
                >
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <div className="text-gray-700 font-medium mb-2">Company</div>
            <ul className="text-sm">
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >About</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Blog</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Careers</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Press</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Inclusion</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Social Impact</a
                >
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-gray-700  transition duration-150 ease-in-out"
                   href="#"
                >Shop</a
                >
              </li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="md:flex md:items-center md:justify-center py-6 md:py-8">
          <div className="text-sm text-gray-400 mr-4 pt-1">
				{/*<span*/}
        {/*  className="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"*/}
        {/*>*/}
				{/*</span>*/}
            Copyright © 2022 TheCandleHistory. All rights reserved.
          </div>
          <div className="text-sm text-gray-400 pt-1">
            <a
              className="text-gray-400 hover:text-gray-700  hover:underline transition duration-150 ease-in-out"
              href="#">Terms</a
            >
            <span className="text-gray-400"> | </span>
            <a
              className="text-gray-400 hover:text-gray-700  hover:underline transition duration-150 ease-in-out"
              href="#">Privacy Policy</a
            >
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer