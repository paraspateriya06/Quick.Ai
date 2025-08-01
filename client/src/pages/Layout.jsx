import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar/>
        <Outlet/>
      
    </div>
  )
}

export default Layout


// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'

// const Layout = () => {
//   return (
//     <div className='flex'>
//       <Sidebar />
//       <div className='ml-[150px] w-full'>
//         <Navbar />
//         <Outlet /> {/* <-- this is crucial */}
//       </div>
//     </div>
//   )
// }

// export default Layout
