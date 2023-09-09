import { styled } from "styled-components"
import {RiSearchLine} from 'react-icons/ri'
import {IoIosArrowDown} from 'react-icons/io'
import UserTable from "../../components/UserTable"
import { useState } from "react"
import Modal from "../../components/Atoms/Modal"

const Users = () => {
    const [showModal, setSowModal] = useState<boolean>(false)

    
  return (
    <div className="w-[871px] h-[990px] pt-[24px] bg-white xl:w-full">
        {
            showModal ? (<Modal />) : null
        }
        <div className="flex justify-between px-[16px] md:flex-col">
            <div className="relative">
                <RiSearchLine className="absolute top-[13px] left-[20px]" fontSize={25} color={'#9EA3AE'}/>
                <Search placeholder="Search tenant by name..."/>
            </div>
            <div>
                <TenantsBtn onClick={() => setSowModal(!showModal)}>All tenants<IoIosArrowDown fontSize={20} color={'#9EA3AE'}/></TenantsBtn>
            </div>
        </div>
        <div>
            <UserTable />
        </div>
    </div>
  )
}

export default Users

const Search = styled.input`
    width: 629px;
    height: 48px;
    padding-left: 56px;
    @media(max-width: 768px){
        background-color: #F7F7FD;
        border-radius: 8px;
        width: 100%;
    }
`

const TenantsBtn = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1.5px solid var(--shades-of-purple-purple-92, #E0DEF7);
    font-weight: 500;
    gap: 10px;
    @media(max-width: 768px){
        width: 100%;
        justify-content: space-between;
        margin-top: 16px;
    }
`