import React, { memo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Common/Button';
import { ValidateWrapper } from './styled';
function Validate({payList , products}){
    const formInfoRef = useRef()

    // thay đổi rồi nhập lại vào
    // axios.put(api name/table/id/giá trị thay đổi)
    const handleSubmit = (e) => {
        const cloneProduct = [...products]
        const clonePayList = [...payList]


        let listPayId = []

        clonePayList.forEach( item => {
            listPayId = [...listPayId , item.idProduct]
        } )
        const updateData = cloneProduct.map(product => {
            if(listPayId.includes(product.id)){
                const {  } = product
            }
            return product
        })

        /**
         * {
    "id": "1",
    "typeProduct": "Áo Nam",
    "nameProduct": "Áo phông nam APHTK338",
    "priceProduct": 315000,
    "colorProduct": [
      {
        "color": "Đen",
        "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855504/yybushgtvfyvbxwfttlr.png",
        "size": [
          {
            "text": "S",
            "quantity": 0
          },
          {
            "text": "M",
            "quantity": 9
          },
          {
            "text": "L",
            "quantity": 3333
          }
        ]
      },
      {
        "color": "Nâu",
        "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855510/e4ckcb4zq3pie2noeu6w.jpg",
        "size": [
          {
            "text": "S",
            "quantity": 9999
          },
          {
            "text": "M",
            "quantity": 5555
          },
          {
            "text": "L",
            "quantity": 3333
          }
        ]
      }
    ],
    "descriptionProduct": [
      {
        "headerText": "Mô tả",
        "descriptionText": "– Chất liệu: Cotton,– Dáng: Regular– Chất liệu: Cotton– Đặc tính: Mềm mại co giãn tốt có độ thấm hút mồ hôi và hút ẩm cao thoáng mát.– Màu: đen nâu– Màu: đen nâu+ Hướng dẫn sử dụng:– Giặt ở nhiệt độ bình thường với đồ có màu tương tự.– Không được dùng hóa chất tẩy.– Hạn chế sử dụng máy sấy ủi ở nhiệt độ bình thường.– Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống."
      },
      {
        "headerText": "HƯỚNG DẪN CHỌN SIZE",
        "descriptionText": "Size M: 50-57kg / Cao 1m53 – 1m68Size L: 58-64kg / Cao 1m57 – 1m70Size XL: 65-70kg / Cao 1m66 – 1m76Size XXL: 71-76kg / Cao 1m70 – 1m85.Tùy mỗi người thích body hoặc vừa người thì tăng hoặc giảm 1 size, chỉ số trên là tương đối mặc"
      }
    ],
    "ratingProduct": 5
  }
         * / 

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
