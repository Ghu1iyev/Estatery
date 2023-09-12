import Rental from '../../assets/images/Rental.svg'
import Bed from '../../assets/images/bed 2.svg'
import Bath from '../../assets/images/bath.svg'
import LivingSize from '../../assets/images/living size 2.svg'

const Application = () => {
  return (
    <div className="p-[24px] border-2 rounded-lg w-[388px] h-[194px] mt-[24px] lg:hidden">
        <h2 className="text-[18px]">Rental Application</h2>
        <div className='flex gap-2 mt-[26px]'>
            <div>
                <img src={Rental} alt="" />
            </div>
            <div>
                <div className='mb-[14px]'>
                <h2 className=' font-medium'>Beverly Springfield</h2>
                <p className='text-[#9EA3AE]'>$4,500 monthly income</p>
                </div>
                <div className='border-t-2 flex justify-between'>
                     <div className='flex gap-2'>
                        <img src={Bed} alt="" />
                        <p>4</p>
                     </div>
                     <div className='flex gap-2'>
                        <img src={Bath} alt="" />
                        <p>2</p>
                     </div>
                     <div className='flex gap-2'>
                        <img src={LivingSize} alt="" />
                        <p>6x7.5 m²</p>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Application