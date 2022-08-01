import React, { useEffect, useState } from 'react';
import { AdminUserWrapper } from './styled'
import axios from 'axios'
import { userApi } from '../../../../Api';
import { v4 as uuidv4 } from 'uuid';
import AdminUserItem from './AdminUserItem';
function AdminUser(){
    const [listUser , setListUser] = useState([])

    useEffect( () => {
        try {
            const fetchData = async() => {
                const res = await axios.get(userApi)
                if(res.status === 201 || res.status === 200){
                    setTimeout( () => {
                        setListUser(res.data)
                    } )
                }
            }

            fetchData()
        } catch (error) {
            
        }
    } , [] )

    const handleDelete = (id) => {
        axios.delete(userApi+"/"+`${id}`)
            .then(res => {
                alert("xóa thành công");
                const newList = [...listUser].filter( item => item.id !== id );
                setListUser(newList);
            })
            .catch( err => {
                alert("xóa user thất bại")
            } )
    }


    return (
        <AdminUserWrapper>
            <ul className='admin-list'>
                <li className='admin-item'>
                    <div className='admin-item__id'>id</div>
                    <div className='admin-item__name'>Tên Khác Hàng</div>
                    <div className='admin-item__email'>Email</div>
                    <div className='admin-item__phone'>Số Điện Thoại</div>
                    <div className='admin-item__address'>Địa Chỉ</div>
                    <div className='admin-item__list'>Sản Phẩm</div>
                    <div className='admin-item__time'>Thời Gian Đặt Hàng</div>
                    <div className='admin-item__state'>Trạng Thái</div>
                    <div className='admin-item__nav'>Điều Hướng</div>
                </li>
                {listUser.length ? listUser.map( item => {
                    return (
                        <AdminUserItem key={uuidv4} handleDelete={handleDelete} item={item} />
                    )
                } ) : "Hiện Tại Chưa Có Khách Hàng Nào Cả"}
            </ul>
        </AdminUserWrapper>
    )
}

export default AdminUser;
