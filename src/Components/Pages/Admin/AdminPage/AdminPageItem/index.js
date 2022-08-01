import React from 'react';
import { AdminPageItemWrapper } from './styled'
function AdminPageItem({item , index}){
    return (
        <AdminPageItemWrapper>
            <li className='admin-item'>
                <div className='admin-item__id'>{index + 1}</div>
                <div className='admin-item__type'>{item.type}</div>
                <div className='admin-item__namePage'>{item.title}</div>
                <div className='admin-item__content'>Nội dung</div>
                <div className='admin-item__desc'>Miêu Tả</div>
                <div className='admin-item__date'>{item.date}</div>
                <div className='admin-item__nav'>
                    <button className='btn btn-add'>Thêm Sản Phẩm</button>
                    <button className='btn btn-edit'>Sửa Sản Phẩm</button>
                </div>
            </li>
        </AdminPageItemWrapper>
    )
}

export default AdminPageItem;
