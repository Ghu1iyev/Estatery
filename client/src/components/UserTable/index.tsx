import React, {useState } from 'react';
import { Space, Table } from 'antd';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import Modal from '../Atoms/Modal';
import { TenantProps } from '../../types/type';
import { FetchData } from '../../service/Api';
import {useQuery} from '@tanstack/react-query'

interface DataType {
  key: string;
  applied: string;
  tenant: number;
  totalincome: string;
  tags: string[];
}

const UserTable: React.FC = () => {
  const {data} = useQuery({
    queryKey: ["users"],
    queryFn: () => FetchData("*[_type=='tenancy']").then((res: TenantProps[]) => res)})
  const [showModal, setShowModal] = useState<boolean>(false);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Applied',
      dataIndex: 'applied',
      key: 'applied',
    },
    {
      title: 'Tenant',
      dataIndex: 'tenant',
      key: 'tenant',
      width: 200,
      render: (text: string, record: any) => (
        <div className='flex items-center flex-row-reverse justify-between gap-2'>
          {text}
          <img className='w-[40px] h-[40px] rounded-full' src={record.image} alt="" />
        </div>
      ),
      
    },
    {
      title: 'Total In come',
      dataIndex: 'totalIncome',
      key: 'totalIncome',
    },
    {
      title: 'Income to Rent',
      key: 'incomeToRent',
      dataIndex: 'incomeToRent',
     
    },
    {
      key: 'action',
      render: () => (
        <Space size="middle">
          <div style={{ cursor: 'pointer' }}>
            <button onClick={() => setShowModal(!showModal)}>
              <IoEllipsisHorizontalSharp fontSize={20} />
            </button>
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      {showModal ? <Modal /> : null}
      <Table className='px-[16px] mt-[16px]' columns={columns} dataSource={data} />
    </>
  );
};

export default UserTable;
