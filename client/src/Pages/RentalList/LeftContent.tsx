
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LeftContent= ({bed, address}: {bed:number; address: string}) => {
  const [loading, setisLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    },1000)
  },[])

const equipment:string[] = ["Fitted Kitchen", "Garden", "Stepless Access", "Suitable for flat sharing", "Guest Toilet"]
let widthPercentage = 0;

switch (bed) {
  case 1:
    widthPercentage = 20;
    break;
  case 2:
    widthPercentage = 40;
    break;
  case 3:
    widthPercentage = 60;
    break;
  case 4:
    widthPercentage = 80;
    break;
  case 5:
    widthPercentage = 100;
    break;
  default:
    widthPercentage = 0;
}

  return (
    <div className='w-[475px] md:w-full'>
        {
          loading ? (<Skeleton width={157} height={24}/>) : (<h2 className="text-[20px] font-bold">Available rooms</h2>)
        }
        {
          loading ? (<Skeleton width={157} height={24} />) : (<p className="mt-[16px] opacity-70 text-[16px] text-[#000929]">Total rooms available</p>)
        }
         <div className="w-full h-[24px] border-2 mt-[16px]" >
          <div style={{width: `${widthPercentage}%`}} className={`h-full w-0 bg-medium-slate-blue`}></div>
        </div>
        <div className="flex justify-between mt-[16px]">
            <p className="text-[16px] font-medium">1 rooms available of 5 rooms</p>
            <p className="text-[16px] font-medium">{widthPercentage}%</p>
        </div>
        <h2 className="text-[20px] font-bold text-[#000929] mt-[32px]">Description</h2>
        <p className="opacity-70 text-[16px] text-[#000929] my-[16px]">{address} </p>
        <button className="text-[#7065F0] text-[14px] font-bold">Show more</button>
        <h2 className="text-[#000929] text-[20px] font-bold mt-[32px]">Equipment</h2>
        <div>
            <ul className="flex flex-wrap gap-3 mt-[16px]">
              {
                equipment.map((item, index) => (
                  <li key={index} className="bg-[#F7F7FD] text-[#7065F0] py-[8px] px-[16px] rounded-lg">{item}</li>
                ))
              }
            </ul>
        </div>
    </div>
  )
}

export default LeftContent