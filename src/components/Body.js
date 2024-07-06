import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantCard, WithPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { QualityContainer } from "./QualityContainer";
import { scroller } from "react-scroll";
import { GoSearch } from "react-icons/go";


function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

export default function Body() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard);
  const handleScroll = () => {
    scroller.scrollTo("res-list", {
      smooth: true,
      duration: 560,
      offset: -170,
    });
  };
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      
        "https://carefood-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //  import.meta.env.VITE_BASE_URL + `api/proxy/swiggy/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <QualityContainer onClicker={handleScroll} />
      <div className="bg-white text-black ">
        <div className=" pt-[60] xl:mr-[98] border-b-2 border-b-slate-300 xl:pt-0  xl:ml-28 xl:pb-6">
          <input
            type="text"
            data-testid="search-btn"
            className="border border-solid ml-6 border-gray-400 py-2 pl-3 pr-16 rounded-2xl rounded-r-none bg-white sm:ml-[170] md:ml-[90]  lg:ml-[40] xl:ml-0"
            value={searchInput}
            placeholder="Search Restaurants"
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button
            className="px-3 -ml-1 py-3  rounded-full rounded-l-none my-4 text-white bg-orange-950 border border-l-gray-200"
            onClick={() => {
              const data = filterData(searchInput, restaurants);
              setFilteredRestaurants(data);
            }}
          >
            <GoSearch />
          </button>
          <button
            className="  px-4 py-2 mb-2  mr-2 ml-[78px]  bg-orange-500 text-white xl:bg-white rounded-full xl:hover:bg-orange-500 xl:hover:text-white xl:text-black  md:mb-0 sm:ml-[222] md:ml-[60] lg:ml-[390] xl:ml-[2] "
            onClick={() => {
              const filtered = restaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Top rated restaurants
          </button>
          <button
            className="hidden xl:block  px-4 py-2 mx-2 xl:ml-[480] xl:-mt-[55] bg-white rounded-full hover:bg-orange-500 hover:text-white"
            onClick={() => {
              let sortedList = [...restaurants];
              sortedList.sort(
                (a, b) => a.info.sla.lastMileTravel - b.info.sla.lastMileTravel
              );
              setFilteredRestaurants(sortedList);
            }}
          >
            Nearest Restaurants
          </button>
          <button
            className="hidden xl:block px-4 py-2 mx-2 xl:ml-[650] xl:-mt-[41] bg-white rounded-full hover:bg-orange-500 hover:text-white"
            onClick={() => {
              let sortedList = [...restaurants];
              sortedList.sort(
                (a, b) =>
                  Number(a.info.costForTwo.substr(1, 3)) -
                  Number(b.info.costForTwo.substr(1, 3))
              );
              setFilteredRestaurants(sortedList);
            }}
          >
            Cost : Low To High
          </button>
          <button
            className="hidden xl:block px-4 py-2 mx-2 xl:ml-[820] xl:-mt-[41] bg-white rounded-full hover:bg-orange-500 hover:text-white"
            onClick={() => {
              let sortedList = [...restaurants];
              sortedList.sort(
                (a, b) =>
                  Number(b.info.costForTwo.substr(1, 3)) -
                  Number(a.info.costForTwo.substr(1, 3))
              );
              setFilteredRestaurants(sortedList);
            }}
          >
            Cost : High to Low
          </button>

          <button
            className="hidden xl:block px-4 py-2 mx-2 xl:ml-[1000] xl:-mt-[41] bg-white rounded-full hover:bg-orange-500 hover:text-white "
            onClick={() => {
              let sortedList = [...restaurants];
              sortedList.sort(
                (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
              );
              setFilteredRestaurants(sortedList);
            }}
          >
            Delivery Time
          </button>
        </div>
        <div
          id="res-list"
          className="flex flex-wrap mx-2 sm:mx-36 md:mx-10 lg:mx-2 xl:mx-20 pb-3"
          data-testid="shimmer"
        >
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                {restaurant.info.promoted ? (
                  <PromotedRestaurantCard {...restaurant.info} />
                ) : (
                  <RestaurantCard {...restaurant.info} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
