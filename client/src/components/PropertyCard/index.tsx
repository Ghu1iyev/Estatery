import {CSSProperties} from 'react'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {LuBedSingle} from 'react-icons/lu'
import {BiBath} from 'react-icons/bi'
import {RxDimensions} from 'react-icons/rx'
import {styled} from 'styled-components'
import { HomeProps } from '../../types/type'


const PropertyCard = ({name, image, address, bed, bathroom, price, dimenson, status} : HomeProps) => {
   
    const getStatusColor = () => {
        switch (status) {
          case "ACTIVE":
            return {
                backgroundColor: "#E6F9EE",
                color: "#27AE60"
            }; 
          case "ARCHIVE":
            return {
                backgroundColor: "#FFF1E0",
                color: "#FFB154"
            }; 
          case "MAINTENANCE":
            return {
                backgroundColor: "#FCE3E3",
                color: "#F06565"
            }; 
          default:
            return {}; 
        }
      };
      const statusStyle: CSSProperties = getStatusColor();

      
  return (
    
    <div className='bg-white rounded-md overflow-hidden sm:w-full h-[424px] w-[420px] sm:border'>
            <div className='h-[200px]'><img className='h-full w-full object-cover' src={image} alt="" /></div>
            <div className='p-[24px]'>
                <div className='flex justify-between'>
                    <p><Price>${price}</Price><Month>/month</Month></p>
                    <p className='flex items-center gap-2'><Span style={statusStyle}>{status}</Span><HiOutlineDotsVertical className="sm:hidden" color={'#9EA3AE'} fontSize={25}/></p>
                </div>
                <h2 className='text-[24px] font-bold mt-[10px]'>{name}</h2>
                <p className='text-[16px] font-medium opacity-50 mt-2 whitespace-nowrap text-ellipsis overflow-hidden'>{address}</p>
                <div style={{borderTop: "1px solid #F0EFFB"}} className='flex gap-4 pt-4 mt-4'>
                    <div className='flex items-center gap-1'>
                        <LuBedSingle color={'#7065F0'} fontSize={20}/>
                        <Facilities>{bed} <span className='sm:hidden'>Beds</span></Facilities>
                    </div>
                    <div className='flex items-center gap-1'>
                        <BiBath color={'#7065F0'} fontSize={20}/>
                        <Facilities>{bathroom} <span className='sm:hidden'>Bathrooms</span></Facilities>
                    </div>
                    <div className='flex items-center gap-1'>
                        <RxDimensions color={'#7065F0'} fontSize={20}/>
                        <Facilities>{dimenson} m²</Facilities>
                    </div>
                </div>
            </div>
        </div>
       
  )
}

export default PropertyCard

const Price = styled.span`
    font-size: 24px;
    font-weight: 800;
    color: #7065F0;
`

const Month = styled.span`
    color: #000929;
    font-weight: 500;
    font-size: 14px;
`

const Span = styled.span`
    color: #27AE60;
    font-weight: 700;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 16px;
    @media(max-width: 550px){
        font-size: 12px;
    }
`

const Facilities = styled.p`
    color: #6C727F;
    font-size: 14px;
    font-weight: 500;
`