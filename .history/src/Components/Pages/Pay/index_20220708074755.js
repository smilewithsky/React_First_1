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
            const fetchData = async() => {
                const res = await axios.get(cartApi)
                const resCart = await axios.get(productApi)
                if(res.status == 200 || res.status == 201 ){
                    setTimeout( () => {
                        setPayItem(res.data)
                    } , 1500)
                }
                else{
                    console.log("sai dữ liệu");
                }
            }

            fetchData()
        } catch (error) {
            console.log("error" ,error);
        }

        return () => {
            
        }

    } )

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
                        <Validate />
                    </div>

                    <div className="col-lg-6">

                    </div>
                </div>
            </div>
        </PayWrapper>
    )
}

export default Pay;
