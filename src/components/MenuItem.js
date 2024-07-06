import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
import { BsFillCartPlusFill } from "react-icons/bs";
import veg from '../items/veg.png'
import nonveg from '../items/non-veg.png'

export const MenuItem = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  return (
   
    <div className="grid grid-flow-row xl:grid-cols-3 gap-10 mt-7">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" m-2 border-b-2 rounded-3xl w-[380] min-h-[460] bg-gray-100 text-left flex-col justify-between hover:scale-105 duration-200 hover:shadow-[0px_1px_20px_4px_rgba(0,0,0,0.56)]"
        >
          <div className=""> 
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                item.card.info.imageId
              }
              alt=""
              className="h-60 rounded-3xl w-full object-cover"
            />
          </div>
          <div className="px-4 pt-4 ">
            <span className="font-bold text-xl line-clamp-1 flex"> <span className="">{item?.card?.info.isVeg ? <img className="h-8 mr-2"src={veg}></img> : <img className="h-8 mr-2" src={nonveg}></img>}</span> <span className="line-clamp-1">{item?.card?.info.name}</span> </span>
           
            <p className="text-base my-3 line-clamp-3 min-h-[72]">{item.card.info.description}</p>
          
          </div>
          <div className="pt-8 flex justify-between ">
          <span className="ml-4 font-semibold text-2xl">
              ₹ - {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
              <button
                className="py-3 px-6 -mt-2 bg-red-600 text-white mr-6 rounded-xl"
                onClick={() => handleAddItem(item.card.info)}
              >
                <BsFillCartPlusFill  className=""/>
              </button>
            </div>
        </div>
      ))}
    </div>
  );
};
