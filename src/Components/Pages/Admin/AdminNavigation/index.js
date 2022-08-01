import React from 'react';
import { AdminNavWrapper } from './styled'
import { Link } from 'react-router-dom'
import Logo from './../../../assets/Images/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png'
function AdminNav(){
    return (
        <AdminNavWrapper>
            <div className="content">
                <div className='content-logo'>
                    <Link to="/" className='logo'>
                        <img src={Logo} alt="" />
                    </Link>
                </div>

                <div className='content-nav-list'>
                    <p>Mua Hàng</p> 
                    <p>Sản Phẩm</p>
                    <p>Bài Viết</p>
                    <p>Update Ảnh</p>
                </div>
            </div>
        </AdminNavWrapper>
    )
}

export default AdminNav;
