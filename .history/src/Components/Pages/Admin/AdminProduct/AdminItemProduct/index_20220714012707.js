import axios from 'axios';
import React from 'react';
import { productApi } from '../../../../../Api';
import Button from '../../../../Common/Button';
import FormatMoney from '../../../Common/FormatMoney';
import { AdminProductItemWrapper } from './styled'
function AdminItemProduct({item}){
    const handleRemoveItem = (id) => {
        axios.delete(productApi+"/"+`${id}`)
            .then(res => {
                alert("Xóa sản phẩm thành công");
                const newList = [...listCart].filter( item => item.id !== id );
                setListCart(newList);
            })
            .catch( err => {
                alert(err)
            } )
    }

    return (
        <AdminProductItemWrapper>
            <li className='admin-product-item' key={`admin-product-${item.id}`}>
                <div className='admin-product-item__id'>{item.id}</div>
                <div className='admin-product-item__type'>{item.typeProduct}</div>
                <div className='admin-product-item__nameProduct'>{item.nameProduct}</div>
                <div className='admin-product-item__image'><img src={item.colorProduct[0].image} alt="" /></div>
                <div className='admin-product-item__price'><FormatMoney price={item.priceProduct} suffixes="đ" /></div>
                <div className='admin-product-item__price'>{item.saleProduct ? item.saleProduct + "%" : 0+"%"}</div>
                <div className='admin-product-item__nav'>
                    <Button className='btn btn-edit'>Sửa</Button>
                    <Button className='btn btn-remove' onClick={()=> handleRemoveItem(item.id)}>Xóa</Button>
                </div>
            </li>
        </AdminProductItemWrapper>
    )
}

export default AdminItemProduct;
