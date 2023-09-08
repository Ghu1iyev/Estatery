import PropertyImg from '../../assets/images/My Listings.svg'
import LivingSize from '../../assets/images/Living size.svg'
import Calendar from '../../assets/images/Calendar.svg'
import Request from '../../assets/images/request.svg'
import Tenants from '../../assets/images/Tenants.svg'
import {LuBedSingle} from 'react-icons/lu'

const HomeDetailItem = () => {
  return (
    <div>
        <div>
                <p className='text-[16px] text-[#6C727F]'>Properties</p>
                    <div className='flex items-center gap-1'>
                        <img src={PropertyImg} alt="" />
                        <span className='text-[18px] font-bold'>46</span>
                    </div>
                </div>
                <div>
                     <p className='text-[16px] text-[#6C727F]'>Rooms</p>
                    <div className='flex items-center gap-1 mt-[16px]'>
                        <LuBedSingle fontSize={22} color={'#000929'} opacity={'0.5'} />
                        <span className='text-[18px] font-bold'>46</span>
                    </div>
                </div>
                <div>
                     <p className='text-[16px] text-[#6C727F]'>Living Space</p>
                    <div className='flex items-center gap-1 mt-[16px]'>
                        <img src={LivingSize} alt="" />
                        <span className='text-[18px] font-bold'>6x7.5 m²</span>
                    </div>
                </div>
                <div>
                     <p className='text-[16px] text-[#6C727F]'>Year Built</p>
                    <div className='flex items-center gap-1 mt-[16px]'>
                        <img src={Calendar} alt="" />
                        <span className='text-[18px] font-bold'>2018</span>
                    </div>
                </div>
                <div>
                     <p className='text-[16px] text-[#6C727F]'>Tenants</p>
                    <div className='flex items-center gap-1 mt-[16px]'>
                        <img src={Tenants} alt="" />
                        <span className='text-[18px] font-bold'>12</span>
                    </div>
                </div>
                <div>
                     <p className='text-[16px] text-[#6C727F]'>Request</p>
                    <div className='flex items-center gap-1 mt-[16px]'>
                        <img src={Request} alt="" />
                        <span className='text-[18px] font-bold'>12</span>
                    </div>
                </div>
    </div>
  )
}

export default HomeDetailItem