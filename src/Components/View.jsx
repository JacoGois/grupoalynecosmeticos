import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header'
import { Sidebar } from './Sidebar';

const View = ({children}) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const onOpenSidebar = () => {
        setSidebarIsOpen(true);
    };

    const onCloseSidebar = () => {
        setSidebarIsOpen(false);
    };
  return (
    <div className=''>
        <Sidebar isOpen={sidebarIsOpen} onCloseSidebar={onCloseSidebar}/>
        <Header onOpenSidebar={onOpenSidebar}/>
        <div>
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default View