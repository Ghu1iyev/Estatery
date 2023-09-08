import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Logo.svg'
import Dashboard from '../../assets/images/Dashboard.svg'
import Insight from '../../assets/images/Insight.svg'
import Listing from '../../assets/images/My Listings.svg'
import Message from '../../assets/images/Message.svg'
import RentPayment from '../../assets/images/Rent Payment.svg'
import Tenants from '../../assets/images/Tenants.svg'
import Help from '../../assets/images/Help.svg'
import Settings from '../../assets/images/Settings.svg'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react'

type ImageType = {
  src: string,
  link: string
}

const images: ImageType[] = [
  { src: Dashboard, link: '/' },
  { src: Insight, link: '/my-properties' },
  { src: Listing, link: '/rental-list' },
  { src: Tenants, link: '/tenants' },
  { src: RentPayment, link: '/rent-payment' },
  { src: Message, link: '/message' },
];

const Sidebar = () => {
  const [loading, setisLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    },1000)
  },[])

  
  return (
    <div className="w-[90px] h-[1229px] bg-white 2xl:hidden">
      <div className='flex flex-col justify-between items-center h-full'>
      <div>
        <div className='mt-[24px] mb-[48px]'>
        {
          loading ? (<Skeleton width={48} height={48}/>) : (<Link to="/"><img src={Logo} alt="" /></Link>)
        }
        </div>
        <ul className='flex flex-col gap-[16px]'>
         {images.map((image, index) => (
              loading ? (<Skeleton width={40} height={40} />) : (<li key={index}><Link to={image.link}><img src={image.src} alt="" /></Link></li>)
            ))}
        </ul>
      </div>    
      <div className='flex flex-col gap-[16px] mb-[32px]'>
          <Link to=""><img src={Help} alt="" /></Link>
          <Link to=""><img src={Settings} alt="" /></Link>
      </div>
      </div>
    </div>
  )
}

export default Sidebar