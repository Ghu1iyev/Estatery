import { styled } from "styled-components"
import {AiOutlineCheck} from 'react-icons/ai'
import {IoCloseSharp} from 'react-icons/io5'
import {MdOutlineMail} from 'react-icons/md'
import User from '../../assets/images/userrr.png'
const SummaryCard = () => {
  return (
    <div className="pl-[24px] sm:pl-0">
        <div className="flex gap-6 sm:hidden">
          <AcceptBtn><AiOutlineCheck />Accept</AcceptBtn>
          <RejectBtn><IoCloseSharp color={'#F06565'} fontSize={20}/>Reject</RejectBtn>
        </div>
        <div className="w-[408px] h-[666px] bg-white mt-[24px] rounded-lg border-2 sm:w-[330px]">
            <div className="flex flex-col items-center justify-center pt-[48px]">
              <div className="w-[110px] h-[110px] bg-[#e0def7] rounded-full text-center">
              <img className="w-full h-full" src={User} alt="" />
              </div>          
              <h2 className="text-[19px] mt-[16px]">Manuel Villa</h2>
              <p className="text-[18px] font-bold opacity-50" >Albany, NY</p>
            </div>
            <div className="px-[24px] mt-[32px]">
                  <div className="rounded-lg bg-[#E8E6F9] px-[16px] flex justify-between items-center h-[48px]">
                    <p>518</p>
                    <p className="text-medium-slate-blue font-bold">Show SSN</p>
                  </div>
                  <div className="flex justify-between border-t-2 mt-[24px] py-[16px]">
                    <p className="opacity-50 font-medium">Date of Birth</p>
                    <p>09-05-1985</p>
                  </div>
                  <div className="flex justify-between border-t-2 py-[16px]">
                    <p className="opacity-50 font-medium">Age</p>
                    <p>36 years old</p>
                  </div>
                  <div className="flex justify-between border-t-2 py-[16px]">
                    <p className="opacity-50 font-medium">Email</p>
                    <p>manuelvilla@gmail.com</p>
                  </div>
                  <div className="flex justify-between border-b-2 border-t-2 py-[16px]">
                    <p className="opacity-50 font-medium">Phone Number</p>
                    <p>202-555-0159</p>
                  </div>
              </div>  
              <div className="bg-ghost-white px-[24px] py-[32px]">
                  <EmailBtn><MdOutlineMail fontSize={22}/>Email Accept</EmailBtn>
              </div>
        </div>
    </div>
  )
}

export default SummaryCard

const AcceptBtn = styled.button`
    background-color: #7065F0;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 192px;
    height: 48px;
    justify-content: center;
`

const RejectBtn = styled(AcceptBtn)`
    background-color: #fff;
    border: 1px solid #F06565;
    color: #F06565;
`

const EmailBtn = styled(AcceptBtn)`
      width: 100%;
`