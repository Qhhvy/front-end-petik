import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
    <div>
      <React.Fragment>
        <Navbar/>
        <div class="columns mt-6">
            <div class="column is-2">
                <Sidebar/>
            </div>
            <div class="column has-background-light">
                <div class="mt-5">{children}</div>
            </div>
        </div>
      </React.Fragment>
    </div>
  )
};

export default Layout;
