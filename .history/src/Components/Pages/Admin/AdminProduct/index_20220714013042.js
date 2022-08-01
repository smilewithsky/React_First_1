import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { productApi } from '../../../../Api';
import AdminItemProduct from './AdminItemProduct';
import { AdminProductWrapper } from './styled'
function AdminProduct(){
    const [listProduct , setListProduct] = useState([])
    const handleDelete = (id) => {
        axios.delete(productApi+"/"+`${id}`)
            .then(res => {
                
            })
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
            <ul className='admin-product-list'>
                <li className='admin-product-item'>
                    <div className='admin-product-item__id'>id</div>
                    <div className='admin-product-item__type'>kiểu sản phẩm</div>
                    <div className='admin-product-item__nameProduct'>Tên Sản Phẩm</div>
                    <div className='admin-product-item__image'>Ảnh</div>
                    <div className='admin-product-item__price'>Giá</div>
                    <div className='admin-product-item__sale'>Giảm Giá</div>
                    <div className='admin-product-item__nav'>Điều Hướng</div>
                </li>
                {listProduct.length ? listProduct.map( item => {
                    {/* console.log(" item  ",item.colorProduct[1] ) */}
                    return (
                        <AdminItemProduct  key={`admin-product-${item.id}`} handleDelete={handleDelete} item={item} />
                    )
                } ) : "Loading"}
            </ul>
        </AdminProductWrapper>
    )
}

export default AdminProduct;