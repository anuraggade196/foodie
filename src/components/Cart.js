import { useSelector } from "react-redux";
import { CartFoodItem} from "./CartFoodItem";
import { useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const delivery = 15
  const [input,setInput] = useState("")
  const [subtotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };


  useEffect(()=>{
    setSubTotal(calculateSubTotal())
   
  }, [cartItems])
  useEffect(()=>{
    setTotal(calculateTotal())
    console.log(cartItems)
  }, [subtotal])

  const calculateSubTotal = () => {
    let sub = 0;
    cartItems.map((item) => {
      if(item?.price){
        sub += (item?.price ) / 100
      } else {
        sub += (item?.defaultPrice) /100
      }
    })
    return sub;
  }

  const calculateTotal = () => {
  let  Totals = subtotal + delivery;
   return Totals  
  }


  return (
    <div className="bg-white  min-h-[690] ">
      <div className="hidden xl:flex flex-col items-center bg-red-950 text-white min-h-[370] text-center py-28 px-60">
        <div className="text-5xl">Shopping Cart </div>
        <p className="mt-4">
          Here, you'll find all the delicious goodies you've handpicked for your
          order. Each item is listed with its name, quantity, and price, so you
          can easily double-check that everything's just the way you want it.
          Your culinary adventure is in your hands!
        </p>
      </div>
      <div className="flex min-h-[670]">
        <div className="hidden xl:flex -ml-40 flex-col min-w-[850] bg-slate-100">
          <div className="flex justify-between mt-20 mx-52 font-mono text-black text-lg font-bold">
            <h1 className="xl:ml-48">Products</h1>
          
            <h1 className=" xl:-mr-24 ">Total</h1>
          </div>
          {" "}
          <div className="xl:pl-40">
          {cartItems.map((item) => (
            <div className="flex ">
            <CartFoodItem key={item.id} {...item} />  
           
            </div>
          ))}
          </div>
        </div>
        <div className="w-[450] ml-4 xl:ml-28 xl:pr-12  text-slate-900">
          <h1 className="font-bold font-mono  mb-4 text-xl mt-24">
            Cart Totals - {cartItems.length}
          </h1>
          <h1 className="font-semibold tracking-widest text-base">
            {" "}
            Do you have a coupon code?
          </h1>
          <div className="flex mt-3  border-b-2 border-b-amber-400 pb-2" >
            <input
              type="text"
              name=""
              onChange={(e) => {setInput(e.target.value)}}
              placeholder="Enter coupon code here"
              value={input}
              size={45}
              className="bg-white  outline-none"
              id=""
            />
            <button>
            <GoArrowRight className="mt-[6] ml-[20]" onClick={() => setInput("")} />
            </button>
          </div>
          <div className="border-b-2 pb-7">
            <div className="flex justify-between mt-3 font-semibold mr-2">
            <h1>Subtotal</h1>
            <h1>₹ {subtotal}</h1>
            </div>
            <div className="flex justify-between font-semibold mr-2">
            <h1>Delivery Charges</h1>
            <h1>₹ {delivery}</h1>
            </div>
          </div>
          <div className="flex justify-between font-bold mr-2 mt-4 text-large">
            <div>Total</div>
            <div>₹ {total}</div>
          </div>
          <div className="flex justify-end">
          <button
            className="bg-red-950 py-2 px-3 mt-5 text-white rounded-2xl hover:bg-orange-500"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
          </div>
          <div className="flex flex-col">
            <button className="py-3 px-1 w-[350] xl:ml-2 mt-10  bg-red-950 text-white rounded-3xl font-bold hover:bg-orange-500">
              Proceed to Checkout
            </button>
            <button className="rounded-3xl border  border-gray-400 w-[350] xl:ml-2 mt-2 py-2 px-1 font-bold hover:bg-red-950 hover:text-white">
              <Link to='/'>
              Continue Ordering 
              </Link>
            </button>
          </div>
          <div className="mt-14 font-mono font-semibold text-base text-red-950">
            Need Help? Contact devanshjain2904@gmail.com
          </div>
         
        </div>
      </div>
    </div>
  );
};
