import {RiTimerLine} from 'react-icons/ri'
const CreditReport = () => {
  return (
    <div className="credit-report">
        <h2>Credit Report</h2>
        <div>
            <ul className="flex justify-between mt-[24px]">
                <li className="w-[117px] h-[24px] bg-[#F06565] rounded-[4px]"></li>
                <li className="w-[72px] h-[24px] bg-[#FFB154] rounded-[4px]"></li>
                <li className="w-[72px] h-[24px] bg-[#61D3AF] rounded-[4px]"></li>
                <li className="w-[72px] h-[24px] bg-[#459D81] rounded-[4px]"></li>
                <li className="w-[100px] h-[24px] bg-[#327461] rounded-[4px]"></li>
            </ul>
        </div>
        <div>
            <h2 className="mt-[28px]">Report</h2>
            <div className='flex flex-wrap gap-3 mt-[30px]'>
              <div className='w-[216px] h-[84px] rounded-lg bg-ghost-white p-[16px]'>
                <p className='text-[14px] font-medium opacity-70'>On-Time Payment</p>
                <p className='flex items-center gap-2 font-bold mt-[8px]'><RiTimerLine color={'#6C727F'} fontSize={20}/> 100%</p>
              </div>
              <div className='w-[216px] h-[84px] rounded-lg bg-ghost-white p-[16px]'>
                <p className='text-[14px] font-medium opacity-70'>On-Time Payment</p>
                <p className='flex items-center gap-2 font-bold mt-[8px]'><RiTimerLine color={'#6C727F'} fontSize={20}/> 100%</p>
              </div>
              <div className='w-[216px] h-[84px] rounded-lg bg-ghost-white p-[16px]'>
                <p className='text-[14px] font-medium opacity-70'>On-Time Payment</p>
                <p className='flex items-center gap-2 font-bold mt-[8px]'><RiTimerLine color={'#6C727F'} fontSize={20}/> 100%</p>
              </div>
              <div className='w-[216px] h-[84px] rounded-lg bg-ghost-white p-[16px]'>
                <p className='text-[14px] font-medium opacity-70'>On-Time Payment</p>
                <p className='flex items-center gap-2 font-bold mt-[8px]'><RiTimerLine color={'#6C727F'} fontSize={20}/> 100%</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CreditReport