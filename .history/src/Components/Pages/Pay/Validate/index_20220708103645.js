import React, { memo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Common/Button';
import { ValidateWrapper } from './styled';
function Validate({payList , products}){
    const formInfoRef = useRef()
    const handleSubmit = (e) => {
        
        // payList.forEach( payItem => {
        //     products.forEach(product=> {
        //         if(product.id === payItem.idProduct){
        //             const { colorProduct } = product
        //             // console.log("colorProducts" ,colorProduct);
        //             const [ {size} ] = colorProduct
        //             const updateQuantity = size.map((sizeItem , index) => {
        //                 if (sizeItem.text == payItem.size) {
        //                     // console.log("123");
        //                     return {...sizeItem , quantity: sizeItem.quantity - payItem.quantity}
        //                 }
        //                 else{
        //                     return {...sizeItem};
        //                 }
        //             })

        //             console.log("size",size);
        
        //             console.log("updateQuantity ",updateQuantity);
                
        //             console.log("colorProduct ",colorProduct);
        //         }


        //         else{
        //             console.log("không có gì xẩy ra cả");
        //         }
        //     })
        // } )
        e.preventDefault();
    }
    // console.log("payList ", payList);
    // console.log("products ", products);
    

    return (
        <ValidateWrapper>
            <form className='form-info' ref={formInfoRef} onSubmit={(e) => handleSubmit(e)} >
                <h3>Thông Tin Thanh Toán</h3>
                <div className="form-group">
                    <label htmlFor="name">Họ và tên</label> <br />
                    <input type="text" id="name" placeholder='Họ và Tên' />
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Email</label> <br />
                    <input type="text" id="Email" placeholder='Email' />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Số điện thoại</label> <br />
                    <input type="text" id="phone" placeholder='Số điện thoại' />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Địa Chỉ</label> <br />
                    <input type="text" id="address" placeholder='Địa chỉ' />
                </div>

                <p>Phí Ship 20k tính theo từng địa chỉ</p>

                <div className="form-group form-group__submit">
                    <Button>
                        <Link to="/cart">Giỏ Hàng</Link>
                    </Button>
                    <Button>Hoàn Tất Thanh Toán</Button>
                </div>
            </form>
        </ValidateWrapper>
    )
}

export default memo(Validate);
