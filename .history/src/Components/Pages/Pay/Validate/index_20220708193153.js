import React, { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Common/Button';
import { ValidateWrapper } from './styled';
function Validate({ payList, products }) {
    const [indexSize, setIndexSize] = useState()

    const formInfoRef = useRef()

    // thay đổi rồi nhập lại vào
    // axios.put(api name/table/id/giá trị thay đổi)
    const handleSubmit = (e) => {
        e.preventDefault();

        const cloneProduct = [...products]
        const clonePayList = [...payList]
        // const abc = payList.map( payItem => {
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
        //             return payItem
        //         }
        //         else{
        //             return payItem
        //         }
        //     })
        //     return payItem
        // })

        // console.log("abc" , abc);
        console.log("index ",indexSize);
        const listIdProduct = clonePayList.map( item => item.idProduct  );
        const updateData = cloneProduct.map(product => {
            const { id, typeProduct, nameProduct, priceProduct, colorProduct, descriptionProduct, ratingProduct } = product

            const [{ color, image, size }] = colorProduct
            const [{ text, quantity }] = size

            const { nameProduct: namePayList, priceProduct: pricePayList, quantity: quantityPayList, size: sizePayList, colorProduct: colorPayList, idProduct, id: idPayList, sale } = clonePayList
            clonePayList.forEach((payItem, index) => {
                if (product.id == payItem.idProduct) {

                    const colorMap = colorProduct.map( item => {
                        const sizeProduct = item.size.map(itemSize => {
                            if(itemSize.text == payItem.size){
                                return {
                                    ...itemSize,
                                    quantity: itemSize.quantity - payItem.quantity
                                }
                                // return {...item , size: itemSize.map( item => {
                                    
                                // } )}
                            }
                            return itemSize
                        }) 

                        
                        return item
                    } )
                    console.log("sizeProduct ",sizeProduct);
                    const sizeList = size.map((sizeItem , indexSize) => {
                        // console.log("index ", index);
                        if (sizeItem.text == payItem.size) {
                            // console.log("product ",product);
                            // listData.push({ ...sizeItem, quantity: sizeItem.quantity - payItem.quantity })
                            return { ...sizeItem, quantity: sizeItem.quantity - payItem.quantity }
                        }
                        return sizeItem
                    })
                    console.log("product ",product);
                    console.log("product Change quantity ", sizeList);

                    console.log("sizeList", sizeList);
                    return sizeList
                }

                // return {...product , }
            })

            // if(listIdProduct.includes(product.id)){
            //     // console.log("product" , product);
            //     const productChangeQuantity = product
            //     return product
            // }

            // console.log("listData ",listData);

            

            return product
        })

        console.log("updateData ", updateData);
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
