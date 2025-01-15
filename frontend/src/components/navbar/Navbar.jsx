import { Link } from 'react-router-dom';
import AnimatedLineTitle from './AnimatedLineTItle';

const Navbar = () => {
  return (
    <div className="w-full h-[90px] flex items-center mx-auto px-[25px] max-w-[1400px] bg-white">
      <p className="text-[25px] font-jakarta font-bold text-gray-900">BAKAR</p>

      <div className="ml-auto gap-16 flex">
        <Link to="/cards">
          <AnimatedLineTitle title={"Issued cards"} />
        </Link>
        <Link to="/transactions">
          <AnimatedLineTitle title={"Transactions"} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;