import {MdOutlineMail} from 'react-icons/md'
import {IoIosArrowForward} from 'react-icons/io'
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const RightContent = ({property}: {property: string}) => {
    const [loading, setisLoading] = useState<boolean>(true);
    useEffect(() => {
      setTimeout(() => {
        setisLoading(false)
      },1000)
    },[])

  return (
    <div className='w-[330px] md:w-full'>
        {
            loading ? (<Skeleton width={330} height={300} borderRadius={8}/>) : (
                <div className="h-[300px] w-full bg-[#100A55] rounded-lg text-white">
            <h2 className="text-[16px] font-bold text-center pt-[24px]">Manuel Villa</h2>
            <p className="opacity-70 text-[14px] text-center mt-1">Tenants</p>
            <div className="border-t-2 border-[#E8E6F9] border-opacity-20 mt-[24px]">
                <div className="px-[24px] pt-[16px] pb-[24px]">
                <p className="flex justify-between mb-[16px]"><span className="opacity-70 text-[14px] font-medium">Move-in Date</span><span className="font-bold">Dec 1, 2021</span></p>
                <p className="flex justify-between mb-[16px]"><span className="opacity-70 text-[14px] font-medium">Contact</span><span className="font-bold">(+1) 324-5329</span></p>
                <p className="flex justify-between mb-[16px]"><span className="opacity-70 text-[14px] font-medium">Price per month</span><span className="font-bold">{property}</span></p>
                <button className='text-white bg-medium-slate-blue flex h-[48px] w-full items-center justify-center rounded-lg gap-2'><MdOutlineMail fontSize={20} /><span className='text-[16px] font-bold'>Send message</span></button>
                </div>
            </div>
            <button>sdsdw</button>
        </div>
            )
        }
        <div className='w-full h-[152px] bg-[#F7F7FD] mt-[24px] border-2 rounded-lg px-[32px]'>
            <h2 className='text-[18px] font-medium w-[155px] mt-[24px]'>Rents collected this month:</h2>
            <div className='flex justify-between items-center mt-[16px]'>
                <p><span className='text-[24px] text-[#100A55] font-bold'>83%</span><span className='text-[16px] text-[#7065F0] font-medium ml-2'>60 tenants</span></p>
                <p><IoIosArrowForward fontSize={20}/></p>
            </div>
        </div>
    </div>
  )
}

export default RightContent