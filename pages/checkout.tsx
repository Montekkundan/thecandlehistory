import Head from "next/head";
import Header from "../components/Header";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
// import Stripe from "stripe";
import Button from "../components/Button";
// import CheckoutProduct from "../components/CheckoutProduct";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Footer from "../components/Footer";
// import CheckoutProduct from "../components/CheckoutProduct";
// import { fetchPostJSON } from "../utils/api-helpers";
// import getStripe from "../utils/get-stripejs";

function checkout() {
  const items = useSelector(selectBasketItems);
  const router = useRouter()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() =>  {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results
    }, {} as { [key: string]: Product[] })
    setGroupedItemsInBasket(groupedItems)
  }, [items])
  return (
    <>
      <Head>
        <title>Bag | The Candle History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="relative  bg-gradient-to-b from-[#E7ECEE] to-white">
        <div>
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
        </div>
        {items.length > 0 && (
          <div>
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key}/>
            ))}
          </div>
        )}
      </main>
      <Footer/>
    </>
  )
}

export default checkout 