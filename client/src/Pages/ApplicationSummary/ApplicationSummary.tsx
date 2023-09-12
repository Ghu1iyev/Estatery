import { Link } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import Summary from "./Summary"
import SummaryCard from "./SummaryCard"
import Header from "./Header"
const ApplicationSummary = () => {
  return (
    <>
        <Header />
    <div className="bg-ghost-white h-full w-full px-[48px] sm:px-[15px]">
        <div>
            <Link to="/tenancy-application" className="back-applications-btn"><IoIosArrowBack/> Back to all applications</Link>
        </div>
        <div className="flex xl:flex-col-reverse">
            <Summary />
            <SummaryCard />
        </div>
    </div>
    </>
  )
}

export default ApplicationSummary