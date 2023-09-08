import { routers } from "./routes/router"
import {RouterProvider} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <RouterProvider router={routers}/>
    </div>
  )
}

export default App