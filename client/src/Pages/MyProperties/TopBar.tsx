import {IoIosArrowDown} from 'react-icons/io'
import {styled} from 'styled-components';
import {Link} from 'react-router-dom'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import Frame from '../../assets/images/Frame.svg'
import Grid from '../../assets/images/Grid.svg'
import List from '../../assets/images/List.svg'
import Btn from '../../components/Atoms/Button'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react';

const TopBar = () => {
  const [loading, setisLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    },1000)
  },[])

  return (
    <>
      {
        loading ? (<Skeleton width={205} height={27} />) : (<Link className='flex items-center font-bold text-medium-slate-blue text-[18px]' to="rental-portfolio"><MdKeyboardArrowLeft fontSize={22}/> Back to rental portfolio</Link>)
      }
      <h2 className='hidden sm:block text-[24px] font-bold my-[24px]'>My Properties</h2>
    <Section>
    <div className='h-full py-1'>
        {
          loading ? (<Skeleton width={114} height={42}/>) : (<Button>Showing all <IoIosArrowDown className="ml-2 text-[#6C727F]" fontSize={18} /></Button>)
        }
    </div>
    <div className='flex gap-4 sm:gap-1'>
      {
        loading ? (<Skeleton width={157} height={42}/>) : (<DateAdded >By date added <IoIosArrowDown className="ml-2 text-[#6C727F]" fontSize={18} /></DateAdded>)
      }
      {
        loading ? (<Skeleton width={53} height={42}/>) : (<Btn className='px-4 sm:p-[10px]'><img src={Frame} alt="" /></Btn>)
      }
      {
        loading ? (<Skeleton width={53} height={42}/>) : (<div><img src={Grid} alt="" /></div>)
      }
      {
        loading ? (<Skeleton width={53} height={42}/>) : (<Btn className='p-[8px]'><img src={List} alt="" /></Btn>)
      }
    </div>
  </Section>
    </>
  )
}

export default TopBar

const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  border-right: 1px solid #b5b5b5;
  height: 100%;
  padding-right: 10px;
`

const DateAdded = styled.button`
    font-size: 14px;
    font-weight: 500;
    padding: 10px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.5px solid var(--shades-of-purple-purple-94, #E8E6F9);
    background: var(--main-color-white, #FFF);
    border-radius: 8px;

    @media(max-width: 550px){
        display: none;
    }
`

const Section = styled.div`
  height: 56px;
  width: 100%;
  margin-top: 15px;
  background-color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    @media(max-width: 1300px){
      width: 100%;
    }

    @media(max-width: 550px){
      border: 1.5px solid var(--shades-of-purple-purple-92, #E0DEF7);

    }
`;