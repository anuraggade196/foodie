import { Link } from 'react-router-dom';
import Gen from '../items/Gen.png'

const Title = () => (
    <div className="">
      <Link to="/">
      <img 
      data-testid="logo"
      className=" px-5 mt-2 w-20 sm:w-28 sm:mt-0 sm:px-4 pt-2 sm:ml-4 md:ml-6"
      alt="logo"
    src={Gen}
   
    
      />
       </Link>
    </div>

    
)



export default Title;