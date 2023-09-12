import {useEffect, useState} from 'react'
import { styled } from "styled-components"
import Notification from '../../assets/images/Notification.svg'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {HiBars2} from 'react-icons/hi2'
import {AiOutlinePlus} from 'react-icons/ai'
import { useLocation, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Logo from '../../assets/images/Logo.svg'

const Header = () => {
  const location = useLocation();
  const [loading, setisLoading] = useState<boolean>(true)

  const { rentSlug } = useParams<{ rentSlug: string }>();
  const locationPath = location.pathname;
  useEffect(()=>{
      console.log('location: ', location)
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    },1000)
  },[])



  return (
    <div className="header">
      <div>
        {
          loading ? (<Skeleton width={163} height={36}/> ) : (<h2 className=" text-[24px] 2xl:hidden"><img src={Logo} alt="" /></h2>)
        }
        <button className="hidden 2xl:block"><HiBars2 fontSize={25}/></button>
      </div>
      <div className="flex gap-5">
      {locationPath === `/rental-list/${rentSlug}` && (
          loading ? (<Skeleton width={171} height={48} />) : (<AddPropertyBtn><AiOutlinePlus />Add a property</AddPropertyBtn>)
        )}
        {
          loading ? (<Skeleton width={40} height={48}/>) : (<img src={Notification}/>)
        }
        {
          loading ? (<Skeleton width={143} height={48} />) : (<Button><span className="bg-[#7065F0] rounded-full text-white w-[32px] h-[32px] flex justify-center items-center">FR</span><span className="sm:hidden">Francis</span> <MdOutlineKeyboardArrowDown fontSize={25}/></Button>)
        }
      </div>
    </div>
  )
}

export default Header

const Button = styled.button`
  width: 143px;
  height: 48px;
  border: 1.5px solid var(--shades-of-purple-purple-92, #E0DEF7);
  background: var(--main-color-white, #FFF);
  box-shadow: 0px 0px 40px 0px rgba(112, 101, 240, 0.10);
  border-radius: 8px;
  font-weight: 500;
  display: flex; 
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media(max-width: 550px){
    width: 100%;
    padding: 0 8px
  }
`

const AddPropertyBtn = styled.button`
  display: flex;
  border-radius: 8px;
  background: var(--main-color-primary, #7065F0);
  align-items: center;
  color: #fff;
  padding: 0px 16px;
  gap: 10px;
`