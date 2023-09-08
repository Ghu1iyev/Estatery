const PropertyDetail = ({ label, value, icon }: { label: string; value: string | number; icon: string }) => (
    <div>
      <p className="text-[16px] text-[#6C727F]">{label}</p>
      <div className="flex items-center gap-1 mt-[16px]">
        <img src={icon} alt="" />
        <span className="text-[18px] font-bold">{value}</span>
      </div>
    </div>
  );
  
  export default PropertyDetail;

