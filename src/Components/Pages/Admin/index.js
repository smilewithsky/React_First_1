import React, { useState } from 'react';
import { AdminWrapper } from './styled'
import Axios from 'axios'
import AdminImagePage from './AdminImage';
import AdminNav from './AdminNavigation';
import AdminProduct from './AdminProduct';
import AdminPage from './AdminPage';
import AdminUser from './AdminUser';
function Admin(){
    return (
        <AdminWrapper>
            <div className="row">
                <div className="col-12 col-lg-1">
                    <AdminNav />
                </div>

                <div className='col-12 col-lg-11'>
                    {/* <AdminProduct /> */}
                    {/* <AdminUser /> */}
                    <AdminPage />
                </div>
            </div>
        </AdminWrapper>
    )
}

export default Admin;
