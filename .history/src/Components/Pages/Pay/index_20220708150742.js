import React, { useEffect, useRef, useState } from 'react';
import Button from '../../Common/Button';
import Breadcrumb from '../Common/Breadcrumb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBac } from '@fortawesome/free-solid-svg-icons'
import { PayWrapper } from './styled';
import Validate from './Validate';
import axios from 'axios';
import { cartApi, productApi } from '../../../Api';


function Pay(){
    const [payList , setPayList] = useState([])
    const [products , setProducts] = useState([])
    useEffect( () => {
        try {
            const fetchPayList = async() => {
                const resCart = await axios.get(cartApi)
                if(resCart.status == 200 || resCart.status == 201 ){
                    setTimeout( () => {
                        setPayList(resCart.data)
                    } , 1500)
                }
                else{
                    console.log("sai dữ liệu");
                }
            }
            
            const fetchProduct = async() => {
                const resProduct = await axios.get(productApi)
                if(resProduct.status == 200 || resProduct.status == 201){
                    setTimeout( () => {
                        setProducts(resProduct.data)
                    } ,1500)
                }
                else{
                    console.log("dữ liệu lỗi");
                }
            }
            fetchPayList()
            fetchProduct()
        } catch (error) {
            console.log("error" ,error);
        }

        return () => {
            
        }
    } , [])

    console.log("payList" , payList.length);

    // console.log("payList",payList);
    // console.log("products",products);

    return (
        <PayWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className='pay-heading'>Tiến Anh Shop</h3>
                    </div> 
                    <Breadcrumb link="Thanh Toán" />
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <Validate payList={payList} products = {products} />
                    </div>

                    <div className="col-lg-6">
                        <div className="list-pay">
                            {payList.length ? payList.map( item => (
                                <div className='pay-item'>
                                    <div className='pay-item__image'>
                                        <img src={item.imageProduct} alt="" />
                                    </div>
                                    <div className='pay-item__content'>
                                        <h3 className='pay-item__content-name'>{item.nameProduct}</h3>
                                        <div className='pay-item__content-data'>
                                            <span>Size: {item.size}</span> - 
                                            <span>color: {item.colorProduct}</span> - 
                                            <span>quantity: {item.quantity}</span>
                                        </div>

                                        <p className='pay-item__content-name'>Giá: <span><Fort</span></p>
                                    </div>
                                </div>
                            ) ) : <h3 className=''>Hiện tại chưa có sản phẩm nào trong giỏ hàng vui lòng quay lại mua hàng</h3>}
                        </div>
                    </div>
                </div>
            </div>
        </PayWrapper>
    )
}

export default Pay;
