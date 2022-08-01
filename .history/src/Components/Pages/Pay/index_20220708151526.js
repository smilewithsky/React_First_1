import React, { useEffect, useRef, useState } from 'react';
import Button from '../../Common/Button';
import Breadcrumb from '../Common/Breadcrumb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBac } from '@fortawesome/free-solid-svg-icons'
import { PayWrapper } from './styled';
import Validate from './Validate';
import axios from 'axios';
import { cartApi, productApi } from '../../../Api';
import FormatMoney from '../Common/FormatMoney';
import Loading from '../Common/Loading';
import { Link } from 'react-router-dom';


function Pay(){
    const [payList , setPayList] = useState([])
    const [products , setProducts] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    useEffect( () => {
        setIsLoading(true)

        try {
            const fetchPayList = async() => {
                const resCart = await axios.get(cartApi)
                if(resCart.status == 200 || resCart.status == 201 ){
                    setTimeout( () => {
                        setPayList(resCart.data)
                        setIsLoading(false)
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

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <PayWrapper>
            <div className="container">
                <div className="row">
                    <Breadcrumb link="Thanh Toán" />
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <Validate payList={payList} products = {products} />
                    </div>

                    <div className="col-lg-6">
                        <div className="list-pay">
                            {payList.length ? payList.map( item => (
                                <Link to={`detail/${item.}`} className='pay-item'>
                                    <div className='pay-item__image'>
                                        <img src={item.imageProduct} alt="" />
                                    </div>
                                    <div className='pay-item__content'>
                                        <h3 className='pay-item__content-name'>{item.nameProduct}</h3>
                                        <div className='pay-item__content-data'>
                                            <span>- Size: {item.size}</span> <br />
                                            <span>- color: {item.colorProduct}</span> <br />
                                            <span>- quantity: {item.quantity}</span>
                                        </div>

                                        <p className='pay-item__content-price'>Giá: <span><FormatMoney price={item.priceProduct} suffixes="đ" /></span></p>
                                    </div>
                                </Li>
                            ) ) : <h3 className=''>Hiện tại chưa có sản phẩm nào trong giỏ hàng vui lòng quay lại mua hàng</h3>}
                        </div>
                    </div>
                </div>
            </div>
        </PayWrapper>
    )
}

export default Pay;
