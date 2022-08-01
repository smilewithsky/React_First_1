import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { pageApi } from '../../../../Api';
import AdminPageItem from './AdminPageItem';
import { AdminPageWrapper } from './styled'
function AdminPage(){
    const [listPage , setListPage] = useState([])
    useEffect( () => {
        try {
            const fetchData = async() => {
                const res = await axios.get(pageApi);
                if(res.status === 200 || res.status === 201){
                    setTimeout( () => {
                        setListPage(res.data)
                    } , 1000 )
                }
            }

            fetchData()
        } catch (error) {
            
        }
    } , [] )

    console.log("listPage ",listPage);

    return (
        <AdminPageWrapper>
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Loại Trang</label>
                    <select name="" id="">
                        <option value="Footer page">Footer</option>
                        <option value="news">News</option>
                        <option value="recruit">Recruit</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Tên Trang</label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Nội Dung</label>
                    <input type="text" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="">Miêu Tả</label>
                    <input type="text" />
                </div>
            </form>

            <ul className='admin-list'>
                <li className='admin-item'>
                    <div className='admin-item__id'>id</div>
                    <div className='admin-item__type'>Loại Trang</div>
                    <div className='admin-item__namePage'>Tên Trạng</div>
                    <div className='admin-item__image'>Ảnh Hiển Thị</div>
                    <div className='admin-item__content'>Nội dung</div>
                    <div className='admin-item__desc'>Miêu Tả</div>
                    <div className='admin-item__date'>Ngày Đăng</div>
                    <div className='admin-item__nav'>Điều Hướng</div>
                </li>

                {listPage.map( (item,index) => (
                    <AdminPageItem item={item} index={index} />
                ) )}
            </ul>
        </AdminPageWrapper>
    )
}

export default AdminPage;
