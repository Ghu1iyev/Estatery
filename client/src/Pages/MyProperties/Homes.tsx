import PropertyCard from "../../components/PropertyCard/index.js"
import {useContext, useState, useEffect} from 'react'
import { urlFor } from '../../service/sanity.js';
import { PropertyContext } from "../../context/contextProperties.js";
import {Link} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Homes = () => {
 const property = useContext(PropertyContext)
  const [loading,setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },1000)
  },[])

  return (
    <div className='flex xl:justify-center flex-wrap gap-12 mt-[24px]'>
       {loading ? (
        property && property.slice(0,6).map((_, index) => (
          <Skeleton width={420} height={424} key={index}/>
        ))
       ) : (
        property && property.slice(0,6).map((item, index) => (
         <Link key={index} to={`/rental-list/${item.slug.current}`}>
             <PropertyCard 
          key={index}
          image={urlFor(item.image).toString()} 
          name={item.name} 
          status={item.categories}
          price={item.price} 
          address={item.address}
          bed={item.bed}
          bathroom={item.bathroom}
          dimenson={item.dimenson}
            />
         </Link>
       )
        ))
       } 
    </div>
  )
}

export default Homes

