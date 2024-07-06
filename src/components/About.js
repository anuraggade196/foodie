import bg from '../items/Aboutbg.jpg'
import bgC from '../items/AboutCompany.jpg'
import U from '../items/Ux.jpg'
import Cult from '../items/Cultinary.jpg'
import Deal from '../items/Deal.jpg'
import Qual from '../items/Quality.jpg'
import Cust from '../items/CustSupp.jpg'


const About = () => {
  return (
    <div className="bg-white h-full">
      <div className=' h-[610]'>
      <div className="flex flex-col items-center pb-72 pt-20 px-[120] ">
        <div className="flex">
        <h1 className="text-8xl mb-8 text-orange-500 pr-12">
          Welcome to <h1 className="text-orange-950 pt-3">Bhookh Lagi Hai?</h1>
        </h1>
        <img src={bg} alt="" className='w-[500]'/>
        </div>
        <p className="text-slate-800 text-xl mt-14 font-semibold shadow-lg shadow-gray-300 px-2 py-4 bg-gray-100">
          At Bhookh Lagi Hai?, we are driven by a relentless passion for
          delivering delightful dining experiences right to your fingertips. Our
          journey began with a simple yet profound vision - to revolutionize the
          way you indulge in your favorite meals. Whether you're yearning for
          comfort food, exploring exotic global cuisines, or seeking wholesome
          alternatives, we've got you covered!
        </p>
      </div>
      </div>
      <div className='h-[550]'>
        <div className='text-center font-bold shadow-xl text-8xl text-orange-950 mt-[80]   pt-2 pb-6'>Our Story</div>
        <div class="p-6 mt-10 mx-16 rounded-md shadow-[0px_18px_40px_4px_rgba(0,0,0,0.56)] flex">
          <img src={bgC} className='h-[300]' alt="" />  
          <p className='text-2xl mt-11 text-slate-800 mx-14 pl-4'>Founded in 2022, "Bhookh Lagi Hai?" started as a small team of food enthusiasts who set out to bridge the gap between discerning food lovers and the culinary wonders of our vibrant city. With time, our ranks swelled, and we transformed into a devoted tribe of foodies, tech wizards, and customer service aficionados, all united by a singular purpose - to create a seamless and unparalleled food ordering platform.</p>
           </div>

      </div>
      <div className='h-full pb-16'>
        <div className='text-center font-bold shadow-xl sha text-8xl text-orange-500 mt-[80]  pt-2 pb-8'>What sets us apart</div>
        <div class="p-6 mt-10 mx-16 rounded-md shadow-[0px_18px_40px_4px_rgba(0,0,0,0.56)] flex">
          <img src={Cult} className='h-[300] rounded-md ml-8' alt="" />
          <div>  
          <h1 className='font-semibold text-slate-800 mx-14 text-3xl mt-14'>Flavorful Culinary Odyssey</h1>
          <p className='text-2xl mt-9 text-slate-800 mx-14 '>Our platform boasts an impressive network of restaurants and eateries, serving up an eclectic array of cuisines to satisfy every craving and palate.</p>
          </div>
           </div>
        <div class="p-6 mt-10 mx-16 rounded-md shadow-[0px_18px_40px_4px_rgba(0,0,0,0.56)] flex">
         
          <div className='ml-8 pr-14'>  
          <h1 className='font-semibold text-slate-800  text-3xl  mt-14'>Seamless User Experience</h1>
          <p className='text-2xl mt-9 text-slate-800'>We've meticulously designed our website with your convenience in mind. Navigating through our menu, placing an order, and tracking its status is not just efficient but also a delightfully user-friendly experience.</p>
          </div>
          <img src={U} className='h-[300] rounded-md mr-10' alt="" />
           </div>
        <div class="p-6 mt-10 mx-16 rounded-md shadow-[0px_18px_40px_4px_rgba(0,0,0,0.56)] flex">
          <img src={Deal} className='h-[300] ml-[29]  rounded-md' alt="" />
          <div>  
          <h1 className='font-semibold text-slate-800 mx-14 text-3xl mt-14'>Exclusive Deals and Delights</h1>
          <p className='text-2xl mt-9 text-slate-800 mx-14 '>At "Bhookh Lagi Hai?," we take pleasure in spoiling our users with exclusive deals, discounts, and loyalty rewards, making your dining experiences even more indulgent.</p>
          </div>
          
           </div>
        <div class="p-6 mt-10 mx-16 rounded-md shadow-[0px_18px_40px_4px_rgba(0,0,0,0.56)] flex">
          
        <div className='ml-8 pr-14'>  
          <h1 className='font-semibold text-slate-800  text-3xl mt-14'>Quality Assurance</h1>
          <p className='text-2xl mt-9 text-slate-800 '> We hold ourselves to the most rigorous standards, ensuring that the food you order is crafted with the freshest ingredients and promptly delivered to your doorstep.</p>
          </div>
          <img src={Qual} className='h-[300] rounded-md mr-10' alt="" />
           </div>
        <div class="p-6 mt-10 mx-16 rounded-md shadow-[0px_18px_40px_4px_rgba(0,0,0,0.56)] flex">
        <img src={Cust} className='h-[300] ml-[29]  rounded-md' alt="" />
          <div>  
          <h1 className='font-semibold text-slate-800 mx-14 text-3xl mt-14'>Customer-Centric Support</h1>
          <p className='text-2xl mt-9 text-slate-800 mx-14 '>Our dedicated customer support team is at your service round the clock. Whether you have a query or need assistance, we're just a call or email away, committed to enhancing your culinary journey.</p>
          </div>
           </div>

      </div>
    </div>
  );
};

export default About;
