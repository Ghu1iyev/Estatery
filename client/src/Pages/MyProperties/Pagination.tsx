import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {styled} from 'styled-components'
import {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Pagination = () => {
  const [loading, setisLoading] = useState<boolean>(true)
  
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    },1000)
  },[])

  return (
    <div className="mt-[40px] pb-[38px] flex justify-center items-center gap-5">
        {
          loading ? (<Skeleton width={40} height={40} borderRadius={100} />) : (<p><IoIosArrowBack /></p>)
        }
        {
          loading ? (<Skeleton width={40} height={40} borderRadius={100} />) : (<P>1</P>)
        }
        {
          loading ? (<Skeleton width={40} height={40} borderRadius={100} />) : (<P2>2</P2>)
        }
        {
          loading ? (<Skeleton width={40} height={40} borderRadius={100} />) : (<p><IoIosArrowForward /></p>)
        }
    </div>
  )
}

export default Pagination

const P = styled.p`
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #100A55;
    color: #fff;
`

const P2 = styled(P)`
    background-color: #fff;
    color: #9EA3AE;
`