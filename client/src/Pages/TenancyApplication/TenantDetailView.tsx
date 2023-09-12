import User from '../../assets/images/userrr.png'
import TotalIncome from '../../assets/images/Total income.svg'
import  IconToRent from '../../assets/images/Icon to rent.svg'
import { Link } from 'react-router-dom'
const TenantDetailView = () => {
  return (
    <div className="ml-[24px] h-full mt-[24px] xl:hidden">  
        <h2 className="text-[20px] font-bold">Tenant detail view</h2>
        <div className="w-[408px] h-[496px] rounded-lg bg-white mt-[24px] p-[32px]">
            <div className='flex items-center gap-2'>
                <div>
                    <img src={User} alt="" />
                </div>
                <div>
                    <h2 className='text-[20px] font-medium'>Manuel Villa</h2>
                    <p className='opacity-50 text-[18px]'>Tenants</p>
                </div>
            </div>
            <div className='mt-[33px]'>
                <div className='flex justify-between border-t py-[16px]'>
                    <p className='font-medium opacity-50'>Applied</p>
                    <p>Dec 9, 11.00 AM</p>
                </div>
                <div className='flex justify-between border-t py-[16px]'>
                    <p className='font-medium opacity-50'>Applied</p>
                    <p>Dec 9, 11.00 AM</p>
                </div>
            </div>
            <div className='border-t pt-[16px]'>
                    <p className='font-medium opacity-50'>Income</p>
                    <div className='flex justify-between mt-[24px]'>
                        <p className='flex gap-2'><img src={TotalIncome} alt="" /><span className='opacity-50'>Total Income</span></p>
                        <p className='font-medium'>$4,500/mo</p>
                    </div>
                    <div className='flex justify-between mt-[24px]'>
                        <p className='flex gap-2'><img src={IconToRent} alt="" /><span className='opacity-50'>Total Income</span></p>
                        <p className='font-medium'>$4,500/mo</p>
                    </div>
            </div>
            <Link to="/tenancy-application/tenant-details"><button className='w-full bg-medium-slate-blue text-white rounded-lg py-[12px] font-bold mt-[32px]'>View Application</button></Link>
        </div>
    </div>
  )
}

export default TenantDetailView