import { styled } from 'styled-components'
import Home from '../../assets/images/Home.svg'
import {AiFillCheckCircle} from 'react-icons/ai'
import Bed from '../../assets/images/bed 2.svg'
import LivingSize from '../../assets/images/living size 2.svg'
import bath from '../../assets/images/bath.svg'
import Referance from './Referance'
import Application from './Application'
import BackgroundReport from './BackgroundReport'
import CreditReport from './CreditReport'
const Summary = () => {
  return (
    <div className="application-summary">
        <h2 className="mt-[32px] text-[24px]">Application Summary</h2>
        <div className="applied">
            <div>
              <img className='w-[256px] h-[154px] object-cover lg:w-full' src={Home} alt="" />
            </div>
            <div className='p-[24px] w-[608px] md:w-full'>
              <div className='flex justify-between mb-[16px] sm:flex-col sm:gap-2'>
                <div>
                  <h2 className='text-[18px] font-bold'>Beverly Springfield</h2>
                  <p className='text-[#6C727F] text-[14px] font-medium'>210 US Highway, Highland Lake, FL</p>
                </div>
                <div>
                  <Applied><AiFillCheckCircle color={'#27AE60'} fontSize={20}/><span className='text-[14px] font-medium'>Applied <span className='md:hidden'>Dec 9 , 11:00 AM</span></span></Applied>
                </div>
              </div>
              <div className='flex gap-4 border-t-2 pt-[16px] sm:hidden'>
                <div className='flex gap-2'>
                  <img src={Bed} alt="" />
                  <span>4 Beds</span>
                </div>
                <div className='flex gap-2'>
                  <img src={bath} alt="" />
                  <span>2 Bathrooms</span>
                </div>
                <div className='flex gap-2'>
                  <img src={LivingSize} alt="" />
                  <span>6x7.5 m²</span>
                </div>
              </div>
            </div>
        </div>
        <div className='w-full h-[208px] bg-white border-2 rounded-lg mt-[24px] p-[24px] lg:hidden'>
          <div className='flex justify-between mb-[25px]'>
            <div>
              <p>Total Income</p>
              <h2 className='text-[18px] font-bold'>$4,500/mo</h2>
            </div>
            <div>
              <p>Income to Rent</p>
              <h2 className='text-[18px] font-bold'>2.3X</h2>
            </div>
            <div>
              <p>Occupants</p>
              <h2 className='text-[18px] font-bold'>1 person</h2>
            </div>
            <div>
              <p>Move-in Date</p>
              <h2 className='text-[18px] font-bold'>Dec 18, 2021</h2>
            </div>
          </div>
          <div className='border-t-2'>
            <p className='mt-[25px] opacity-70'>Vehicles</p>
            <h2 className='text-[18px] font-bold'>Porsche 718 Cayman</h2>
          </div>
        </div>
        <div className='flex justify-between lg:flex-col'>
          <Referance/>
          <Application />
        </div>
        <div className='flex justify-between mt-[24px] lg:flex-col'>
          <BackgroundReport />
          <CreditReport />
        </div>
    </div>
  )
}

export default Summary

const Applied = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #27AE60;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px 16px;
  border: 2px solid #27AE60;
`