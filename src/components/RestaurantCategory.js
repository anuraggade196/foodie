
import { MenuItem } from "./MenuItem";

export const RestaurantCategory = ({ data }) => {
  const handleClick = (e) =>{
    e.currentTarget.classList.toggle('collapse-open');
  }

  
  return (
    <>
      <div className="collapse collapse-arrow bg-white text-black max-w-9xl collapse-close " onClick={handleClick}>
        <input type="radio" name="my-accordion-2" className="hover:cursor-pointer"/>
        <div className="collapse-title text-xl font-medium shadow-xl mb-[3] " >
          {data.title} ({data.itemCards.length})
        </div>
        <div className="collapse-content">
          <MenuItem items={data.itemCards}/>
        </div>
        
      </div>
    </>
  );
};
