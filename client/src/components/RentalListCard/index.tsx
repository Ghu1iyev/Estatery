import {CSSProperties} from 'react'
import {styled} from 'styled-components'
import { HomeProps } from '../../types/type'

const RentalListCard = ({name, image, address, status} : HomeProps) => {
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
    <div>
        <div className='flex border-t border-b p-[24px] gap-3 items-center'>
                <div className='w-[90px] h-[59px]'>
                    <img className="w-full h-full object-cover rounded-lg" src={image} alt="" />
                </div>
                <div className='w-[200px]'>
                    <h2 className='text-[18px] font-medium'>{name}</h2>
                    <p className='whitespace-nowrap text-ellipsis overflow-hidden text-[16px] text-[#000929] mt-2'>{address}</p>
                </div>
                <div className='w-[89px]'>
                    <Status style={statusStyle}>{status}</Status>
                    <p className='mt-2'>128 sq m</p>
                </div>
            </div>
    </div>
  )
}

export default RentalListCard

const Status = styled.span`
    font-weight: 700;
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 16px;
    background-color: #E6F9EE;
    color: #27AE60;
    @media(max-width: 550px){
        font-size: 12px;
    }
`