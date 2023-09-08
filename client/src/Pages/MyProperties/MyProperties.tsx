
import Homes from './Homes';
import Pagination from './Pagination';
import TopBar from './TopBar';


const MyProperties = () => {
  return (
    <div className='bg-ghost-white pl-[24px] pt-[24px] pr-[48px] 2xl:pr-[24px] sm:bg-white'>
      <TopBar />
      <Homes />
      <Pagination />
    </div>
  )
}

export default MyProperties

