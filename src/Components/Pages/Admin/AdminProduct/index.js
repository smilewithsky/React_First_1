import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { productApi } from '../../../../Api';
import AdminItemProduct from './AdminItemProduct';
import FormAdminProduct from './FormAdminProduct';
import { AdminProductWrapper } from './styled'
function AdminProduct(){
    const [listProduct , setListProduct] = useState([])
    const handleDelete = (id) => {
        axios.delete(productApi+"/"+`${id}`)
            .then(res => {
                alert("xóa thành công");
                const newList = [...listProduct].filter( item => item.id !== id );
                setListProduct(newList);
            })
            .catch( err => {
                alert("xóa sản phẩm thất bại")
            } )
    }

    useEffect( () => {
        try {
            const fetchData = async() => {
                const res = await axios.get(productApi)
                if(res.status === 200 || res.status === 201){
                    setTimeout( () => {
                        setListProduct(res.data)
                    } , 1500)
                }
            }

            fetchData()
        } catch (error) {
            console.log("errror Admin ",error);
        }
    } , [])

    if(listProduct.length){

    }

    return (
        <AdminProductWrapper>
            <FormAdminProduct></FormAdminProduct>
            <ul className='admin-list'>
                <li className='admin-item'>
                    <div className='admin-item__id'>id</div>
                    <div className='admin-item__type'>kiểu sản phẩm</div>
                    <div className='admin-item__nameProduct'>Tên Sản Phẩm</div>
                    <div className='admin-item__image'>Ảnh</div>
                    <div className='admin-item__price'>Giá</div>
                    <div className='admin-item__sale'>Giảm Giá</div>
                    <div className='admin-item__nav'>Điều Hướng</div>
                </li>
                {listProduct.length ? listProduct.map( item => {
                    return (
                        <AdminItemProduct  key={`admin-product-${item.id}`} handleDelete={handleDelete} item={item} />
                    )
                } ) : "Loading"}
            </ul>
        </AdminProductWrapper>
    )
}

export default AdminProduct;