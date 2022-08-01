import React, { memo, useState } from 'react';
import Button from '../../../../Common/Button';
import Breadcrumb from '../../Breadcrumb';
import Axios from 'axios'

import { DetailPageWrapper } from './styled'
import axios from 'axios';
import { cartApi } from '../../../../../Api';
import Relation from './relation';
function App({ props }) {
    const [ColorProductIndex , setColorProductIndex] = useState(0);
    const [SizeIndex, setSizeIndex] = useState(0);
    // const [SizeIndex, setSizeIndex] = useState(0);
    const [quantityDefault, setQuantityDefault] = useState(1);

    const { id, saleProduct, typeProduct, nameProduct, priceProduct, colorProduct, descriptionProduct } = props;
    const { color, image, size } = colorProduct[ColorProductIndex]
    const { text, quantity } = size[SizeIndex]

    console.log("typeProduct ",typeProduct);

    // console.log("quantity" ,quantity);

    const handleAddtoCart = (saleProduct , nameProduct, priceProduct, quantity, color, image, text, id) => {
        console.log("id " + id + " sale: " + saleProduct + " price: " + priceProduct + " nameProduct: " + nameProduct + " colorProduct: " + color + " quantity " + quantity + " size: " + text + " image: ", image);
        const buyQuantity = document.querySelector(".quantity").innerText;

        const priceAfterSale = saleProduct ? priceProduct * ((100 - parseInt(saleProduct)) / 100) : priceProduct
        const formData = {
            nameProduct: nameProduct,
            priceProduct: priceAfterSale,
            quantity: buyQuantity,
            size: text,
            colorProduct: color,
            idProduct: id,
            saleProduct: saleProduct,
            imageProduct: image
        }

        console.log("quantity ",quantity);

        if(quantity === 0){
            alert("Sản Phẩm Hiện Đang Hết Hàng")
        }
        else{
            axios.post(cartApi, formData)
            .then(response => {
                alert("Thêm Thành Công")
            })
            .catch(response => {
                alert("Thêm Thất Bại")
            })
            ;
        }

        // console.log("formData ",formData);
    }

    return (
        <DetailPageWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="product-image">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className='product-content'>
                            <h3 className='product-content__name'>{nameProduct}</h3>
                            <div className='product-content__price'>
                                {
                                    saleProduct ?
                                        (
                                            <p className='product-content__price-sale'>
                                                sale: <span>{saleProduct}</span>
                                            </p>
                                        ) : ""
                                }

                                {
                                    saleProduct ?
                                        (
                                            <div className='product-content__price-text'>
                                                <p className='name-text'>Giá: </p>
                                                <p className='product-content__price-text__oldPrice'>{priceProduct}đ</p>
                                                <p className='product-content__price-text__currentPrice'> {priceProduct * ((100 - parseInt(saleProduct)) / 100)}đ </p>
                                            </div>
                                        )
                                        :
                                        (
                                            <div className='product-content__price-text'>
                                                <p className='product-content__price-text__currentPrice'> {priceProduct}đ </p>
                                            </div>
                                        )
                                }

                                <div className='product-content__colorProduct'>
                                    <div className="product-content__colorProduct-color">
                                        <span className='product-content__colorProduct-color-text'>
                                            Màu Sắc:
                                        </span>
                                        {
                                            colorProduct.map((item, index) =>
                                            (
                                                <div key={`color-image-${index}`} className='product-content__colorProduct-color-list__image' onClick={() => setColorProductIndex(index)}>
                                                    <img className={`product-content__colorProduct-color-item__image ${ColorProductIndex === index ? "product-content__colorProduct-color-item__image--active" : ""}`} src={item.image} alt="" />
                                                </div>
                                            )
                                            )
                                        }
                                    </div>

                                    <div className="product-content__colorProduct-size">
                                        <span className='product-content__colorProduct-size-text'>
                                            Size:
                                        </span>
                                        <div className='list-size'>
                                            {
                                                size.map((itemSize, index) => (
                                                    <div key={`size-item-${index}`} className={`list-size__item ${SizeIndex === index ? "list-size__item--active" : ""}  `} onClick={() => setSizeIndex(index)}>
                                                        <span>
                                                            {itemSize.text}
                                                        </span><br />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className="product-content__colorProduct-size">
                                        <span className='product-content__colorProduct-size-text'>
                                            Số lượng:
                                        </span>
                                        <div className='list-size'>
                                            {
                                                size[SizeIndex].quantity
                                            }
                                        </div>
                                    </div>

                                    <div className='product-content__quantity'>
                                        <button
                                            className="down"
                                            onClick={() => setQuantityDefault(prev => prev - 1)}
                                            disabled={quantityDefault === 1}
                                        >-</button>
                                        <span className='quantity'>{quantityDefault}</span>
                                        <button
                                            className='up'
                                            onClick={() => setQuantityDefault(prev => prev + 1)}
                                            disabled={quantityDefault > size[SizeIndex].quantity || quantityDefault == size[SizeIndex].quantity}
                                        >+</button>
                                    </div>
                                </div>

                            </div>
                            <div className='product-content__desc'>
                                <ul className='product-content__desc-list'>
                                    {descriptionProduct.map((item, index) => (
                                        <li key={`product-content-${index}`} className='product-content__desc-list__item'>
                                            <h3 className='product-content__desc-list__item--heading'>{item.headerText}:</h3>
                                            <p className='product-content__desc-list__item--paragraphs'>
                                                {item.descriptionText}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='product-content__add-to-cart'>
                                <Button onClick={() => handleAddtoCart(saleProduct, nameProduct, priceProduct, quantity, color, image, text, id)}>Thêm Vào giỏ hàng</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Relation typeProduct={typeProduct} />
                    </div>
                </div>
            </div>
        </DetailPageWrapper>
    )
}

export default memo(App);
