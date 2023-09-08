import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RxCalendar } from 'react-icons/rx';
import { client, urlFor } from '../../service/sanity';
import Room from '../../assets/images/Room.svg';
import PropertyImg from '../../assets/images/My Listings.svg';
import LivingSize from '../../assets/images/Living size.svg';
import Calendar from '../../assets/images/Calendar.svg';
import Request from '../../assets/images/request.svg';
import Tenants from '../../assets/images/Tenants.svg';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import PropertyDetail from '../../components/PropertyDetail';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HomeDetail = () => {
  const { rentSlug } = useParams<{ rentSlug: string }>();
  const [property, setProperty] = useState<propsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  interface propsData {
    name: string;
    slug: string;
    address: string;
    image: string;
    bed: number;
    dimension: string;
    price: string;
  }

  useEffect(() => {
    client
      .fetch<propsData[]>(
        '*[_type=="home"]{..., "categories":categories[0]->status}'
      )
      .then((res: propsData[]) => {
        const thisHome = res.find(
          (rent: propsData) => rent.slug.current === rentSlug
        );
        setProperty(thisHome);
        setTimeout(() => {
          setLoading(false);
        },1000)
      });
  }, [rentSlug]);


  // if (loading || !property) {
  //   return <div>Loading...</div>;
  // }


  return (
    <>
      {
        property && <div className="w-[950px] md:w-full">
        <div className="h-[267px] w-full">
        {
          loading ? (<Skeleton width={950} height={267}/>) : (<img className="w-full h-full object-cover"  src={`${urlFor(property.image)}`} alt="" />)
        }
        </div>
        <div className="mx-[48px] mt-[48px]">
          <div className="flex justify-between items-center sm:flex-col sm:w-full">
            <div>
              {
                loading ? (<Skeleton width={294} height={48}/>) : (<h2 className="text-[32px] font-bold sm:text-center">{property.name}</h2>)
              }
             {
              loading ? (<Skeleton width={294} height={24} />) : (
                <p className="text-[16px] font-medium text-[#000929] opacity-50 mt-[8px]">
                {property.address}
              </p>
              )
             }
            </div>
            <div className='sm:mt-5'>
              {
                loading ? (<Skeleton width={216} height={44}/>) : (
                <button className="property-calendar-btn">
                <RxCalendar color={'#9EA3AE'} /> Show Property Calendar
              </button>)
              }
            </div>
          </div>
          {
            loading ? (<Skeleton width={854} height={115} borderRadius={8}/>) : (
              <div className="detail">
            <PropertyDetail
              label="Properties"
              value={46}
              icon={PropertyImg}
            />
            <PropertyDetail label="Rooms" value={property.bed} icon={Room} />
            <PropertyDetail
              label="Living Space"
              value={`${property.dimenson} m²`}
              icon={LivingSize}
            />
            <PropertyDetail label="Year Built" value={2018} icon={Calendar} />
            <PropertyDetail label="Tenants" value={12} icon={Tenants} />
            <PropertyDetail label="Request" value={12} icon={Request} />
          </div>
            )
          }
        </div>
        <div className="flex mx-[48px] mt-[32px] gap-12 md:flex-col">
          <LeftContent address={property.address} bed={property.bed} />
          <RightContent property={property.price}/>
        </div>
      </div>
      }
    </>
  );
};

export default HomeDetail;
