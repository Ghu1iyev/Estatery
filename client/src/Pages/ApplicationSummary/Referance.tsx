import User from '../../assets/images/userrr.png'
import {AiFillCheckCircle} from 'react-icons/ai'
const Referance = () => {
  return (
    <div className="p-[24px] border-2 rounded-lg w-[452px] h-[194px] mt-[24px] lg:w-full">
        <h2 className="text-[18px]">Personal Reference</h2>
        <p className="text-[16px] font-medium mt-[24px] sm:mt-1">“He always pay rent on time”</p>
        <div className='flex items-center gap-2 mt-[24px]'>
            <div>
                <img className='w-[40px] h-[40px] sm:w-[35px] sm:h-[35px]' src={User} alt="" />
            </div>
            <div>
                <p className='flex gap-2 font-bold sm:text-[13px]'><span>Mario</span><span className='flex items-center gap-1 text-[#27AE60]'><AiFillCheckCircle color={''}/>IDENTITY VERIFIED</span></p>
                <p>mariogarcia@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Referance