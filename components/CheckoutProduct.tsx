import {urlFor} from '../sanity'
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";
interface Props {
    items: Product[];
    id: string;
  }

function CheckoutProduct({items, id}: Props) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));

    toast.error(`${items[0].title} removed from basket`, {
      position: "bottom-center",
    });
  };
  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center pt-5">
      <div className="relative h-44 w-44">
        <Image src={urlFor(items[0].image[0]).url()} layout="fill" objectFit="contain"  alt="image"/>
      </div>
      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">
              {items[0].title}
            </h4>
            <p className="flex item-end gap-x-1">
              {items.length}</p>
          </div>
          <p className="flex items-end text-blue-500 hover:underline ">
            Show Description
            {/*{items[0].description}*/}
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            <Currency  quantity={items.reduce((total,item) => total + item.price, 0 )} currency="USD"/>
          </h4>
          <button onClick={removeItemFromBasket} className="text-blue-500 hover:underline">
            Remove
          </button>
        </div>
      </div>
    </div>

  )
}

export default CheckoutProduct