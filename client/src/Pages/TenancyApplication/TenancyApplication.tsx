import TenantDetailView from "./TenantDetailView"
import Users from "./Users"

const TenancyApplication = () => {
  return (
    <div className="flex bg-ghost-white h-full">
      <Users />
      <TenantDetailView />
    </div>
  )
}

export default TenancyApplication