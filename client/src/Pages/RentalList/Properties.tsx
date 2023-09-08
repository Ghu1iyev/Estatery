import { useContext, useState,ChangeEvent, useEffect } from 'react';
import { CgSortAz } from 'react-icons/cg';
import { RiSearchLine } from 'react-icons/ri';
import { styled } from 'styled-components';
import { urlFor } from '../../service/sanity.js';
import RentalListCard from '../../components/RentalListCard';
import { PropertyContext } from '../../context/contextProperties.js';
import { HomeProps } from '../../types/type.js';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Properties = () => {
  const properties = useContext(PropertyContext);
  const [selectedHome, setSelectedHome] = useState('');
  const [filteredProperties, setFilteredProperties] = useState<HomeProps[]>([]);
  const [loading, setisLoading] = useState<boolean>(true)
  
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    },1000)
  },[])

  const handleHomeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSelectedHome(inputValue);

    const filtered = properties.filter((property) =>
      property.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const propertiesToDisplay = selectedHome ? filteredProperties : properties;

  return (
    <div className="w-[460px] h-[1140px] border md:hidden ">
      <div className="flex justify-between mt-[24px] mx-[24px] mb-[32px]">
        {
          loading ? (<Skeleton width={122} height={30}/>) : (
          <h2 className="text-[20px] font-bold">
          Properties{' '}
          <span className="text-[14px] bg-medium-slate-blue text-white p-1 rounded-lg">
            {propertiesToDisplay.length}
          </span>
        </h2>)
        }
        {
          loading ? (<Skeleton width={30} height={30} />) : (
          <button>
            <CgSortAz fontSize={30} />
          </button>)
        }
      </div>
        {
          loading ? (<Skeleton width={410} height={56} />) : (
            <div className="mx-[24px] mb-[24px] relative">
            <Search onChange={handleHomeInputChange} placeholder="Search..." />
           <RiSearchLine className="absolute top-[15px] left-[16px]" fontSize={28} color={'#7065F0'} />
           </div>)
        }
      
      <div>
        {propertiesToDisplay.map((item, index) => (
            loading ? (<Skeleton width={458} height={105} />) : (
              <RentalListCard
              key={index}
              image={urlFor(item.image)}
              name={item.name}
              status={item.categories}
              address={item.address}
            />
            )
        ))}
      </div>
    </div>
  );
};

export default Properties;

const Search = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 2px solid var(--shades-of-purple-purple-92, #e0def7);
  background: var(--shades-of-purple-purple-98, #f7f7fd);
  padding-left: 56px;

  &::placeholder {
    opacity: 0.6;
    font-weight: 500;
    font-size: 16px;
  }
`;
