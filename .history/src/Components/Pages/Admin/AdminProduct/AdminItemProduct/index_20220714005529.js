import React from 'react';
import Button from '../../../../Common/Button';
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
                <div className='admin-product-item__price'>{item.saleProduct ? item.saleProduct + "%" : 0+"%"}</div>
                <div className='admin-product-item__nav'>
                    <Button className='btn btn-edit'>Sửa</Button>
                    <Button className='btn btn-remove'>Xóa</Button>
                </div>
            </li>
        </AdminProductItemWrapper>
    )
}

export default AdminItemProduct;
