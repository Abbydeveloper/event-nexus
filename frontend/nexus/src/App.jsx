import { Outlet } from "react-router-dom";
import SideBar from '../components/common/SideBar';


function App() {

  return (
    <div className='app-dashboard flex h-screen bg-gray-100 overflow-hidden rounded-lg'>
      <SideBar />
      <div className='dashboard--content flex-1 bg-gray-200 text-fuchsia-800 max-w-7xl overflow-auto text-left'>
        <Outlet />
      </div>
    </div>
  )
}
export default App
