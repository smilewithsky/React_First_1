import React, { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Common/Button';
import { ValidateWrapper } from './styled';
function Validate({payList , products}){
    const [indexSize , setIndexSize] = useState()

    const formInfoRef = useRef()

    // thay đổi rồi nhập lại vào
    // axios.put(api name/table/id/giá trị thay đổi)
    const handleSubmit = (e) => {
        e.preventDefault();

        const cloneProduct = [...products]
        const clonePayList = [...payList]


        let listPayId = []

        clonePayList.forEach( item => {
            listPayId = [...listPayId , item.idProduct]
        } )
        const updateData = cloneProduct.map(product => {
            if(listPayId.includes(product.id)){
                const { id , typeProduct , nameProduct , priceProduct , colorProduct , descriptionProduct , ratingProduct} = product
                const { color , image , size } = colorProduct
                // console.log("id: ", id , "typeProduct: ",typeProduct , "nameProduct: ", nameProduct , "priceProduct: ",priceProduct , "color: " , color , "image: " , image , "size: " , size , "ratingProduct: " , ratingProduct , "descriptionProduct: ",descriptionProduct );

                const updateQuantity = size.map( sizeItem => {
                    if(sizeItem.text == listPayId.size){
                        return sizeItem.quantity = siz
                    }
                } ) ;

                return product
            }
            return product
        })


        console.log('123');

    }
    // console.log("payList ", payList);
    // console.log("products ", products);
    
        

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
