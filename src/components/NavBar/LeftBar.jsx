
import { Logo } from "../utils/Icons";
import Nav from "./Nav";


function LeftBar() {
;
  return (
    <>
    <div className="flex items-center">
      <Logo/>
      <p className='font-bold text-[30px] ps-6 text-red-800'>Vercel</p>
     <Nav />
      </div>
    </>
  )
}

export default LeftBar;