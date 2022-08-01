import React, { useState } from 'react';
import { AdminWrapper } from './styled'
import Axios from 'axios'
import AdminImagePage from './AdminImage';
import AdminNav from './AdminNavigation';
import AdminProduct from './AdminProduct';
function Admin(){
    return (
        <AdminWrapper>
            <div className="container-fluid admin">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <AdminNav />
                    </div>

                    <div className='col-9'>
                        <AdminImagePage />
                        <AdminProduct />
                    </div>
                </div>
            </div>
        </AdminWrapper>
    )
}

export default Admin;
