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
    const [payItem , setPayItem] = useState([])
    const [products , setProducts] = useState([])
    useEffect( () => {
        try {
            const fetchPayItem = async() => {
                const resCart = await axios.get(cartApi)
                if(resCart.status == 200 || resCart.status == 201 ){
                    setTimeout( () => {
                        setPayItem(resCart.data)
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
            fetchPayItem()
            fetchProduct()
        } catch (error) {
            console.log("error" ,error);
        }

        return () => {
            
        }
    } , [])

    console.log("payItem",payItem);
    console.log("products",products);

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
                        <Validate payItem={payItem}  />
                    </div>

                    <div className="col-lg-6">

                    </div>
                </div>
            </div>
        </PayWrapper>
    )
}

export default Pay;
