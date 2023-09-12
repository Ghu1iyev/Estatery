import { styled } from "styled-components"

const BackgroundReport = () => {
  return (
    <div className="w-[343px] h-[396px] border-2 rounded-lg lg:w-full">
      <h2 className="p-[24px]">Background Report</h2>
      <div className="mt-[28px]">
          <div className="flex justify-between p-[20px]">
            <p className="font-medium">SSN Trace</p>
            <ClearBtn>Clear</ClearBtn>
          </div>
          <div className="flex justify-between border-t-2 p-[20px]">
            <p className="font-medium">SSN Trace</p>
            <ClearBtn>Clear</ClearBtn>
          </div>
          <div className="flex justify-between border-t-2 p-[20px]">
            <p className="font-medium">SSN Trace</p>
            <ClearBtn>Clear</ClearBtn>
          </div>
          <div className="flex justify-between border-t-2 p-[20px]">
            <p className="font-medium">SSN Trace</p>
            <ClearBtn>Clear</ClearBtn>
          </div>
      </div>
    </div>
  )
}

export default BackgroundReport

const ClearBtn = styled.button`
    border-radius: 8px;
    background: rgba(111, 207, 151, 0.10);
    padding: 4px 16px;
    color: #27AE60;
    font-weight: 700;
`