import React from 'react';
import { AdminProductItemWrapper } from './styled'
function AdminItemProduct({item}){
    return (
        <AdminProductItemWrapper>
            <li className='admin-product-item' key={`admin-product-${item.id}`}>
                <div className='admin-product-item__id'>{item.id}</div>
                <div className='admin-product-item__type'>{item.typeProduct}</div>
                <div className='admin-product-item__nameProduct'>{item.nameProduct}</div>
                <div className='admin-product-item__image'><img src={item.colorProduct[0].image} alt="" /></div>
                <div className='admin-product-item__price'>{item.priceProduct}</div>
                <div className='admin-product-item-nav'>
                    <button className='btn btn-edit'>Sửa</button>
                    <button className='btn btn-remove'>Xóa</button>
                </div>
            </li>
        </AdminProductItemWrapper>
    )
}

export default AdminItemProduct;
