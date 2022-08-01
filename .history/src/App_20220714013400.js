
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Introduce from "./Components/Pages/Introduce";
import { useEffect, useLayoutEffect, useState } from "react";
import Product from "./Components/Pages/Product";
import Home from "./Components/Pages/Home";
import DetailProduct from "./Components/Pages/Common/detail.js";
import { cartApi, productApi, userApi } from "./Api"
import Detail from './Components/Pages/Common/detail.js';
import Cart from './Components/Pages/Cart';
import Login from './Components/Pages/User/login';
import Register from './Components/Pages/User/register';
import NotFound from './Components/Pages/Common/NotFound';
import Admin from './Components/Pages/Admin';
import Pay from './Components/Pages/Pay';
import Page from './Components/Pages/page';
import News from './Components/Pages/News';
import Recruit from './Components/Pages/Recruit';
// import MessengerCustomerChat from 'react-messenger-customer-chat';


// console.log("product ", Products);
function App() {
    // console.log("re-render app");
    // product
    const [products, setProducts] = useState([]);
    const [homeProduct, setHomeProduct] = useState([])
    const [newProducts, setNewProducts] = useState([])

    // users
    const [users, setUsers] = useState([])

    // carts
    const [carts, setCarts] = useState([])

    useEffect(() => {
        document.title = "Tiến Anh Shop"
        const getProduct = async () => {
            try {
                const { data: res } = await axios.get(productApi);
                setProducts(res)

                const cloneRes = [...res];
                const homePageProduct = cloneRes.slice(0, 12);
                setHomeProduct(homePageProduct);

                const homePageNewProduct = cloneRes.slice((cloneRes.length - 8))
                setNewProducts(homePageNewProduct)

                // console.log("homePageProduct " ,homePageProduct);
            } catch (error) {
                console.log("Invalid Product", error);
            }
        }
        getProduct()
        return () => {

        }
    }, [])

    const Products = [
        {
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
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3999
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 5555
                        },
                        {
                            "id": uuid(),
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
                            "id": uuid(),
                            "text": "S",
                            "quantity": 9999
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 5555
                        },
                        {
                            "id": uuid(),
                            "text": "L",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText":
                        "– Chất liệu: Cotton,– Dáng: Regular– Chất liệu: Cotton– Đặc tính: Mềm mại co giãn tốt có độ thấm hút mồ hôi và hút ẩm cao thoáng mát.– Màu: đen nâu– Màu: đen nâu+ Hướng dẫn sử dụng:– Giặt ở nhiệt độ bình thường với đồ có màu tương tự.– Không được dùng hóa chất tẩy.– Hạn chế sử dụng máy sấy ủi ở nhiệt độ bình thường.– Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống."
                },
                {
                    "headerText": "HƯỚNG DẪN CHỌN SIZE",
                    "descriptionText": "Size M: 50-57kg / Cao 1m53 – 1m68Size L: 58-64kg / Cao 1m57 – 1m70Size XL: 65-70kg / Cao 1m66 – 1m76Size XXL: 71-76kg / Cao 1m70 – 1m85.Tùy mỗi người thích body hoặc vừa người thì tăng hoặc giảm 1 size, chỉ số trên là tương đối mặc"
                }
            ],
            "ratingProduct": 5
        },
        {
            "id": "2",
            "typeProduct": "Áo Nam",
            "saleProduct": 5,
            "nameProduct": "Áo phông nam APHTK338",
            "priceProduct": 515000,
            "colorProduct": [
                {
                    "color": "Xanh",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855634/femhlezjk0qlgaxmpsw9.png",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "L",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Trắng",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855645/pbue2ruqt9mobabdno9w.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "L",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Cam",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855661/ewri7dzsr22ww9jm4zgd.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": "3333"
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": "2222"
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText":
                        "– Chất liệu: Cotton – Dáng: Regular – Chất liệu: Cotton – Đặc tính: Mềm mại, co giãn tốt, có độ thấm hút mồ hôi và hút ẩm cao, thoáng mát. – Màu: đen, nâu, – Màu: đen, nâu + Hướng dẫn sử dụng: – Giặt ở nhiệt độ bình thường, với đồ có màu tương tự. – Không được dùng hóa chất tẩy. – Hạn chế sử dụng máy sấy, ủi ở nhiệt độ bình thường. – Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống."
                },
                {
                    "headerText": "HƯỚNG DẪN CHỌN SIZE",
                    "descriptionText": "Size M: 50-57kg / Cao 1m53 – 1m68 Size L: 58-64kg / Cao 1m57 – 1m70 Size XL: 65-70kg / Cao 1m66 – 1m76 Size XXL: 71-76kg / Cao 1m70 – 1m85.Tùy mỗi người thích body hoặc vừa người thì tăng hoặc giảm 1 size, chỉ số trên là tương đối mặc"
                }
            ],
            "ratingProduct": 4
        },
        {
            "id": "3",
            "typeProduct": "Quần Nam",
            "saleProduct": 15,
            "nameProduct": "Quần short nam QSVTK330",
            "priceProduct": 815000,
            "colorProduct": [
                {
                    "color": "Xanh Đậm",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855726/d0i9odxiz5czs4iuqxbp.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 2222
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Chất liệu: cotton lạnh – Đặc tính: – Kiểu dáng: Regular– Màu sắc: xám đậm"
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        },
        {
            "id": "4",
            "typeProduct": "Mũ Nam",
            "saleProduct": 15,
            "nameProduct": "Mũ thời trang nam MLTTK305",
            "priceProduct": 915000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855777/xyzqc9ojmdkamcgjfnjx.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "L",
                            "quantity": 2222
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 4
        }
        ,
        {
            "id": "5",
            "typeProduct": "Quần Nam",
            "nameProduct": "Quần kaki nam QKLTK307",
            "priceProduct": 425000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855937/vdtluuxp2aeg4iocksr1.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 2222
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Chất liệu: Jeans cotton – Đặc tính: có độ thấm hút mồ hôi và hút ẩm cao, thoáng mát. – Màu sắc: đen – Kiểu dáng:Slim"
                },
                {
                    "headerText": "+ Hướng dẫn sử dụng:",
                    "descriptionText": "– Giặt ở nhiệt độ bình thường, với đồ có màu tương tự. – Không được dùng hóa chất tẩy. – Hạn chế sử dụng máy sấy, ủi ở nhiệt độ bình thường."
                }
                ,
                {
                    "headerText": "– Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống.",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 5
        }
        ,
        {
            "id": "7",
            "typeProduct": "Áo Nam",
            "nameProduct": "ÁO THUN NAM",
            "priceProduct": 285000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856019/ph8qf3f0x4pimazx6ppo.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Xám",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856021/anovuloustd4mthsp5bz.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        }
                    ]
                },
                {
                    "color": "Vàng",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856024/pc6x0akv3ffv2nvssytp.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "» BẢO HÀNH SẢN PHẨM 90 NGÀY , » ĐỔI HÀNG TRONG VÒNG 30 NGÀY"
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "8",
            "typeProduct": "Áo Nam",
            "saleProduct": 15,
            "nameProduct": "SƠMI UNISEX",
            "priceProduct": 915000,
            "colorProduct": [
                {
                    "color": "Xanh",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856029/u7gdibgkdrnzbmt7jiid.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Xanh Lá",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856125/k7n0ilrsm7kstjmbghyj.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 8
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": "BẢO HÀNH SẢN PHẨM 90 NGÀY » ĐỔI HÀNG TRONG VÒNG 30 NGÀY"
                }
            ],
            "ratingProduct": 5
        }
        ,
        {
            "id": "9",
            "typeProduct": "Quần Nam",
            "nameProduct": "QUẦN JEAN M1QJN05220FSFTR",
            "priceProduct": 445000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856175/omnrsws3slmz2oulpzux.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 8
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "10",
            "typeProduct": "Quần Nam",
            "nameProduct": "QUẦN JEAN M1QJN05211FSFRE",
            "priceProduct": 425000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856222/kna2pwoq5ukag0909h2l.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "11",
            "typeProduct": "Quần Nam",
            "nameProduct": "QUẦN JEAN M1QJN05206FSFRK",
            "priceProduct": 450000,
            "colorProduct": [
                {
                    "color": "Xanh",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856330/oj3wrjhyw7bpnrk5msi3.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 5
        }
        ,
        {
            "id": "12",
            "typeProduct": "Áo Nam",
            "nameProduct": "ÁO THUN M1ATN03202FOSHT",
            "priceProduct": 285000,
            "colorProduct": [
                {
                    "color": "Trắng",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856400/axbdhwcat8qfgl4otpmo.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Xanh",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856423/howtrnj9qvwmwdsbgmnv.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Tím",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856418/rzcmpil0k9nkbxm0aby1.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "13",
            "typeProduct": "Áo Nam",
            "nameProduct": "ÁO SƠMI M1SMD02201BOSTE",
            "priceProduct": 320000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856503/elbtiuziltk8kgswtnlg.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Xám",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856506/pzylhkqpetdqohn4phiw.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Nâu",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856510/bfjrhfmlw8npknorjdgw.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Bạc",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856515/zc6skkrjtxu84cy4sshc.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "14",
            "typeProduct": "Quần Nam",
            "nameProduct": "QUẦN JEAN M1QJN01215FSFRI",
            "priceProduct": 425000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856610/jvegqfavlpyqmndtfbro.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "15",
            "typeProduct": "Áo Nam",
            "saleProduct": 5,
            "nameProduct": "ÁO POLO M1ATP01205BSFSO",
            "priceProduct": 300000,
            "colorProduct": [
                {
                    "color": "Nâu Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856678/hs4sxfbg2pshl7nwbyaf.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Xanh Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856695/zst67c29opmreqb6jaad.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Vàng Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856702/b4dq3ctebkulokymrzed.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "16",
            "typeProduct": "Áo Nam",
            "saleProduct": 15,
            "nameProduct": "Quần thời trang nam MLTTK305",
            "priceProduct": 300000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856760/gw7nkumtvd9hnsruftlv.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Xanh Lá",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856796/ngqh5oslowxta7w0npo7.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 5
        }
        ,
        {
            "id": "17",
            "typeProduct": "Quần Nam",
            "saleProduct": 10,
            "nameProduct": "QUẦN SHORT M1SJN01201FSFRI",
            "priceProduct": 350000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856902/qni7u1m6ktegquy8l4hc.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "18",
            "typeProduct": "Áo Nam",
            "saleProduct": 15,
            "nameProduct": "ÁO THUN U1ATD01201FOSBA",
            "priceProduct": 915000,
            "colorProduct": [
                {
                    "color": "Hồng Cam",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856947/ramk288odhnoancarzqb.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "19",
            "typeProduct": "Áo Nam",
            "saleProduct": 10,
            "nameProduct": "Áo sơ mi nam STNTK303",
            "priceProduct": 355000,
            "colorProduct": [
                {
                    "color": "Nâu",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656857045/sygnleyscqxyw53tngdt.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
                ,
                {
                    "color": "Xanh Ngọc",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656857049/bsdxixx6lbhu3cvknfy3.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "20",
            "typeProduct": "Áo Nam",
            "saleProduct": 5,
            "nameProduct": "Áo phông nam APHTK326",
            "priceProduct": 315000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656857085/lubd4n52yifv6cjw3pbg.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 5
        }
        ,
    
        {
            "id": "21",
            "typeProduct": "Áo Nam",
            "nameProduct": "Áo Khoác Gió",
            "priceProduct": 915000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657445599/gusb12nlxerpwacpa3su.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Nâu",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657445601/kmigrwc8pvzzegoelw91.png",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Bạc",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657445612/gxmibd0kighj2693j8ho.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
    
        {
            "id": "22",
            "typeProduct": "Mũ Nam",
            "saleProduct": 15,
            "nameProduct": "Quần Short Lifestyle Nam Nike DM5227-407",
            "priceProduct": 1500000,
            "colorProduct": [
                {
                    "color": "Xanh",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657529029/q1fjva6juo5ltceyzpmn.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "23",
            "typeProduct": "Mũ Nam",
            "nameProduct": "Mũ lưỡi trai LAURENCLAYT",
            "priceProduct": 200000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657529178/h8hazedlmwid9kvs8kf2.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Trắng",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657529181/dt3ygwxeug93p96208qw.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        }
                    ]
                },
                {
                    "color": "Xám",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657529184/fgyuxnkeisz2dqwcobzq.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 4
        }
        ,
        {
            "id": "24",
            "typeProduct": "Giày Nam",
            "saleProduct": 15,
            "nameProduct": "Giày Tập Luyện Nam Anta A-Jelly 812127720-3",
            "priceProduct": 2000000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657529637/lvpnjz7iaegfowv0myro.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "39",
                            "quantity": 100
                        },
                        {
                            "id": uuid(),
                            "text": "40",
                            "quantity": 100
                        },
                        {
                            "id": uuid(),
                            "text": "41",
                            "quantity": 300
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "42",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 4
        }
        ,
        {
            "id": "25",
            "typeProduct": "Giày Nam",
            "saleProduct": 50,
            "nameProduct": "Giày Chạy Bộ Nam Erke 11121202442-002",
            "priceProduct": 2000000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657529715/bbfac5l3tqogwc1fbbjm.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "39",
                            "quantity": 111
                        },
                        {
                            "id": uuid(),
                            "text": "40",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "41",
                            "quantity": 11
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "42",
                            "quantity": 30
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 4
        }
        ,
        {
            "id": "26",
            "typeProduct": "Giày Nam",
            "nameProduct": "Giày Chạy Bộ Nam Anta A-Shock Lite 812115520",
            "priceProduct": 1500000,
            "colorProduct": [
                {
                    "color": "Xanh",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657529977/abyu5d0sk32upnwsmyso.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "39",
                            "quantity": 1111
                        },
                        {
                            "id": uuid(),
                            "text": "40",
                            "quantity": 2222
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "Thân giày được làm từ chất liệu 100% vải lưới/PP/da tổng hợp thoáng khí thấm hút tốt, tạo sự thông thoáng, dễ chịu , Giày Anta với công nghệ A- shock lite hấp thụ chấn động tốt, hỗ trợ vận động hiệu quả hơn, thích hợp sử dụng cho bộ môn chạy bộ , Công nghệ Flash foam trang bị trên giày Anta A-Shock Lite 812115520 giúp hỗ trợ giảm xóc, đàn hồi tốt, giảm sự tổn thương lên bàn chân"
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 4
        }
        ,
        {
            "id": "27",
            "typeProduct": "Giày Nam",
            "nameProduct": "Giày Lifestyle Nam Nike Blazer Mid '77 Jumbo DD3111-001",
            "priceProduct": 3000000,
            "colorProduct": [
                {
                    "color": "Đen Đỏ",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657529962/tjeebmprwae5pde9topa.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "39",
                            "quantity": 4444
                        },
                        {
                            "id": uuid(),
                            "text": "40",
                            "quantity": 5555
                        },
                        {
                            "id": uuid(),
                            "text": "41",
                            "quantity": 5555
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "28",
            "typeProduct": "Giày Nam",
            "saleProduct": 15,
            "nameProduct": "Giày Chạy Bộ Nam Peak E12527H - Trắng & Xanh",
            "priceProduct": 1500000,
            "colorProduct": [
                {
                    "color": "Trắng Xanh",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657530107/jetnxm1a8scy69dhabd5.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "39",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "40",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "41",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "42",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 4
        }
        ,
        {
            "id": "29",
            "typeProduct": "Giày Nam",
            "nameProduct": "Giày Bóng Rổ Nam Peak E14101ATX",
            "priceProduct": 1500000,
            "colorProduct": [
                {
                    "color": "Trắng",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657530214/yodzqauen0hcsszv1h96.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "41",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "42",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "43",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "44",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "Giày Peak được làm từ chất liệu da PU có độ co giãn tốt hơn so với da thật và vải dệt lưới mềm mịn, sáng bóng, thoáng khí tốt , Công nghệ được giày Peak E14101ATX sử dụng là P-Motive có độ bền cao, đàn hồi tốt sau khoảng thời gian dài chịu lực nén , Tăng ma sát với đế giày cao su chống trơn trượt, an toàn khi vận động"
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "30",
            "typeProduct": "Giày Nam",
            "nameProduct": "Mũ thời trang nam MLTTK305",
            "priceProduct": 1500000,
            "colorProduct": [
                {
                    "color": "Trắng",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657530364/ipaznlvnmvajeibzdydt.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "41",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "42",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "43",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "44",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "Thiết kế giày Anta năng động cùng phối màu hài hoà trên nền giày trắng ngà , Anta 812138084 được làm từ 100% vải lưới/PP/da tổng hợp giúp bạn dễ dàng lau chùi khi bị dính vết bẩn, đồng thời chống thấm nước tốt , Giày cổ thấp tạo cảm giác tiện lợi, thoải mái khi người dùng di chuyển, phù hợp cho những bạn nam mang hằng ngày"
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 4
        }
        ,
        {
            "id": "31",
            "typeProduct": "Giày Nam",
            "saleProduct": 15,
            "nameProduct": "Giày Chạy Bộ Nam Adidas ULTRABOOST 5.0 DNA GW5125",
            "priceProduct": 3500000,
            "colorProduct": [
                {
                    "color": "Trắng Cam",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657530580/h0iofcyqya2qipv9tgik.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "40",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "41",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "42",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "43",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "32",
            "typeProduct": "Mũ Nam",
            "saleProduct": 15,
            "nameProduct": "Mũ Nike DC3673-010",
            "priceProduct": 600000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657530666/lvtusplynts8vzszo0hb.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "33",
            "typeProduct": "Mũ Nam",
            "saleProduct": 15,
            "nameProduct": "Mũ Lưỡi Trai Erke 10321311035-001",
            "priceProduct": 300000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657530772/i9jubxz6tue3ajfadr58.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "34",
            "typeProduct": "Quần Nam",
            "saleProduct": 15,
            "nameProduct": "Quần Short Lifestyle Nam Nike DD6436-010",
            "priceProduct": 915000,
            "colorProduct": [
                {
                    "color": "Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657530838/kccxljxn2nhy1xuagjry.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "Được làm từ chất liệu với 20% Polyester, 80% Cotton , Thiết kế quần Nike với kiểu dáng mang đến sự thoải mái, dễ chịu cho người dùng suốt cả ngày dài"
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 4
        }
        ,
        {
            "id": "35",
            "typeProduct": "Áo Nam",
            "saleProduct": 15,
            "nameProduct": "Áo Polo Lifestyle Nam Anta 852028167-2",
            "priceProduct": 700000,
            "colorProduct": [
                {
                    "color": "Xanh Đen",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657530998/sihw37jvrhg9ynppsibz.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "Mẫu áo Anta được làm từ chất liệu Cotton đem đến khả năng thấm hút tốt, hút ẩm nhanh, cho bạn cảm giác thông thoáng, dễ chịu suốt cả ngày , Kiểu dáng áo được thiết kế thoải mái, giúp bạn dễ dàng vận động, tập luyện mà không cảm thấy bị gò bó"
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
        ,
        {
            "id": "36",
            "typeProduct": "Quần Nam",
            "saleProduct": 15,
            "nameProduct": "Quần Jeans Clean Denim dáng Slimfit",
            "priceProduct": 550000,
            "colorProduct": [
                {
                    "color": "Xanh Nhạt",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657531239/r4g8ilxlo42xcjultyyh.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                },
                {
                    "color": "Xanh Đậm",
                    "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1657531244/jkka4ysuo4qobzmqznor.jpg",
                    "size": [
                        {
                            "id": uuid(),
                            "text": "S",
                            "quantity": 3333
                        },
                        {
                            "id": uuid(),
                            "text": "M",
                            "quantity": 2222
                        },
                        {
                            "id": uuid(),
                            "text": "XL",
                            "quantity": 3333
                        }
                        ,
                        {
                            "id": uuid(),
                            "text": "XXL",
                            "quantity": 3333
                        }
                    ]
                }
            ],
            "descriptionProduct": [
                {
                    "headerText": "Mô tả",
                    "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
                },
                {
                    "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
                    "descriptionText": ""
                }
            ],
            "ratingProduct": 3
        }
    ]

    console.log("product ",products);

    // console.log("product", products);
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home data={homeProduct} news={newProducts} />}></Route>
                <Route path="introduce" element={<Introduce />}></Route>
                <Route path="product" element={<Product />}></Route>
                <Route path="product" element={<Product />}>
                    <Route path=":search" element={<Product />}></Route>
                </Route>
                <Route path="detail" element={<Detail />}>
                    <Route path=":id" element={<Detail />}></Route>
                </Route>
                <Route path='cart' element={<Cart />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="pay" element={<Pay />}></Route>
                <Route path="news" element={<News />}></Route>
                <Route path="recruit" element={<Recruit />}></Route>
                <Route path="page" element={<Page />}>
                    <Route path=":namepage" element={<Detail />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;


// [
//   {
//       "id": "1",
//       "typeProduct": "Áo Nam",
//       "nameProduct": "Áo phông nam APHTK338",
//       "priceProduct": 315000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855504/yybushgtvfyvbxwfttlr.png",
//               "size": [
//                   {
//                       "id": "482a01c7-ee74-4780-b106-a28cf6a27003",
//                       "text": "S",
//                       "quantity": 3999
//                   },
//                   {
//                       "id": "47a37f70-caf4-4b73-8659-002608df4030",
//                       "text": "M",
//                       "quantity": 5555
//                   },
//                   {
//                       "id": "934e15c2-c00a-4564-bfe3-64297abeb607",
//                       "text": "L",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Nâu",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855510/e4ckcb4zq3pie2noeu6w.jpg",
//               "size": [
//                   {
//                       "id": "78e90b8e-ba55-4c5a-903a-5645b818219d",
//                       "text": "S",
//                       "quantity": 9999
//                   },
//                   {
//                       "id": "126f0735-ca0a-410e-ac75-43fffe7a5d51",
//                       "text": "M",
//                       "quantity": 5555
//                   },
//                   {
//                       "id": "74daff5c-5db4-40e7-8aeb-03555f124ad9",
//                       "text": "L",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Chất liệu: Cotton,– Dáng: Regular– Chất liệu: Cotton– Đặc tính: Mềm mại co giãn tốt có độ thấm hút mồ hôi và hút ẩm cao thoáng mát.– Màu: đen nâu– Màu: đen nâu+ Hướng dẫn sử dụng:– Giặt ở nhiệt độ bình thường với đồ có màu tương tự.– Không được dùng hóa chất tẩy.– Hạn chế sử dụng máy sấy ủi ở nhiệt độ bình thường.– Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống."
//           },
//           {
//               "headerText": "HƯỚNG DẪN CHỌN SIZE",
//               "descriptionText": "Size M: 50-57kg / Cao 1m53 – 1m68Size L: 58-64kg / Cao 1m57 – 1m70Size XL: 65-70kg / Cao 1m66 – 1m76Size XXL: 71-76kg / Cao 1m70 – 1m85.Tùy mỗi người thích body hoặc vừa người thì tăng hoặc giảm 1 size, chỉ số trên là tương đối mặc"
//           }
//       ],
//       "ratingProduct": 5
//   },
//   {
//       "id": "2",
//       "typeProduct": "Áo Nam",
//       "saleProduct": 5,
//       "nameProduct": "Áo phông nam APHTK338",
//       "priceProduct": 515000,
//       "colorProduct": [
//           {
//               "color": "Xanh",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855634/femhlezjk0qlgaxmpsw9.png",
//               "size": [
//                   {
//                       "id": "9e7fffeb-cd9d-462b-9e1e-05f7e7f01401",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "7c2c3e4c-8b97-4e4b-a4fa-15efcf699e6e",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "fda856d0-455f-4fda-ab22-0ae836eb4b5b",
//                       "text": "L",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Trắng",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855645/pbue2ruqt9mobabdno9w.jpg",
//               "size": [
//                   {
//                       "id": "ee9034ee-063b-4b8d-b401-7128d477502e",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "5e12badd-9993-4494-993f-d1b2f9294857",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "171f24c6-979c-4dba-808f-f9136963bbd4",
//                       "text": "L",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Cam",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855661/ewri7dzsr22ww9jm4zgd.jpg",
//               "size": [
//                   {
//                       "id": "7d727fd5-b653-464e-ba98-6c53a03bddfa",
//                       "text": "S",
//                       "quantity": "3333"
//                   },
//                   {
//                       "id": "96411d21-0409-488c-b31b-4c1d88bbc645",
//                       "text": "M",
//                       "quantity": "2222"
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Chất liệu: Cotton – Dáng: Regular – Chất liệu: Cotton – Đặc tính: Mềm mại, co giãn tốt, có độ thấm hút mồ hôi và hút ẩm cao, thoáng mát. – Màu: đen, nâu, – Màu: đen, nâu + Hướng dẫn sử dụng: – Giặt ở nhiệt độ bình thường, với đồ có màu tương tự. – Không được dùng hóa chất tẩy. – Hạn chế sử dụng máy sấy, ủi ở nhiệt độ bình thường. – Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống."
//           },
//           {
//               "headerText": "HƯỚNG DẪN CHỌN SIZE",
//               "descriptionText": "Size M: 50-57kg / Cao 1m53 – 1m68 Size L: 58-64kg / Cao 1m57 – 1m70 Size XL: 65-70kg / Cao 1m66 – 1m76 Size XXL: 71-76kg / Cao 1m70 – 1m85.Tùy mỗi người thích body hoặc vừa người thì tăng hoặc giảm 1 size, chỉ số trên là tương đối mặc"
//           }
//       ],
//       "ratingProduct": 4
//   },
//   {
//       "id": "3",
//       "typeProduct": "Quần Nam",
//       "saleProduct": 15,
//       "nameProduct": "Quần short nam QSVTK330",
//       "priceProduct": 815000,
//       "colorProduct": [
//           {
//               "color": "Xanh Đậm",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855726/d0i9odxiz5czs4iuqxbp.jpg",
//               "size": [
//                   {
//                       "id": "69adb19d-7268-4102-b48a-f582f2504f2a",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "0614e11b-7011-4efd-93b7-ff840dff3d08",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "39c87614-26a7-4b25-927a-eb3a69a1c41b",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "6c63f069-212b-4df2-b131-095687eb0101",
//                       "text": "XXL",
//                       "quantity": 2222
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Chất liệu: cotton lạnh – Đặc tính: – Kiểu dáng: Regular– Màu sắc: xám đậm"
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "4",
//       "typeProduct": "Mũ Nam",
//       "saleProduct": 15,
//       "nameProduct": "Mũ thời trang nam MLTTK305",
//       "priceProduct": 915000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855777/xyzqc9ojmdkamcgjfnjx.jpg",
//               "size": [
//                   {
//                       "id": "76d30501-4608-42ee-b38a-5947a77998ac",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "9d4f98ff-a79d-4e1c-84a1-d08bba4d173c",
//                       "text": "L",
//                       "quantity": 2222
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 4
//   },
//   {
//       "id": "5",
//       "typeProduct": "Quần Nam",
//       "nameProduct": "Quần kaki nam QKLTK307",
//       "priceProduct": 425000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656855937/vdtluuxp2aeg4iocksr1.jpg",
//               "size": [
//                   {
//                       "id": "8f644895-9049-43b2-b983-e0ec08888bff",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "906b5fc2-14be-4e7a-9fec-accd019b6f29",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "742a20a2-a1a6-44d9-944a-69d835372d7f",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "5fbcaa32-2494-41b5-b7e3-0f66030ea930",
//                       "text": "XXL",
//                       "quantity": 2222
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Chất liệu: Jeans cotton – Đặc tính: có độ thấm hút mồ hôi và hút ẩm cao, thoáng mát. – Màu sắc: đen – Kiểu dáng:Slim"
//           },
//           {
//               "headerText": "+ Hướng dẫn sử dụng:",
//               "descriptionText": "– Giặt ở nhiệt độ bình thường, với đồ có màu tương tự. – Không được dùng hóa chất tẩy. – Hạn chế sử dụng máy sấy, ủi ở nhiệt độ bình thường."
//           },
//           {
//               "headerText": "– Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống.",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 5
//   },
//   {
//       "id": "7",
//       "typeProduct": "Áo Nam",
//       "nameProduct": "ÁO THUN NAM",
//       "priceProduct": 285000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856019/ph8qf3f0x4pimazx6ppo.jpg",
//               "size": [
//                   {
//                       "id": "380d46df-38aa-4d1d-9939-1bb5539239e6",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "7dd45cd7-1a30-4fff-8521-02a3f8159ca3",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "c8d450f2-a67b-41ae-aed5-dc0466fe9779",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "ab82e912-20ab-4997-a913-09f4d75f5e62",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Xám",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856021/anovuloustd4mthsp5bz.jpg",
//               "size": [
//                   {
//                       "id": "3a4e6531-ff3c-4291-84b4-9a914ff8c219",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "67cc02e7-1706-4820-b60f-08050a2ac7aa",
//                       "text": "M",
//                       "quantity": 2222
//                   }
//               ]
//           },
//           {
//               "color": "Vàng",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856024/pc6x0akv3ffv2nvssytp.jpg",
//               "size": [
//                   {
//                       "id": "f415c47c-0217-474d-a9e6-e22a27e9e6dc",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "dcf2e77a-ce73-49bf-aee3-212df97ae06b",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "e6b01128-e259-44c5-ab9c-dc891f3334a5",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "72b6d7d1-5065-4901-8cbb-1c1de262f19c",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "» BẢO HÀNH SẢN PHẨM 90 NGÀY , » ĐỔI HÀNG TRONG VÒNG 30 NGÀY"
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "8",
//       "typeProduct": "Áo Nam",
//       "saleProduct": 15,
//       "nameProduct": "SƠMI UNISEX",
//       "priceProduct": 915000,
//       "colorProduct": [
//           {
//               "color": "Xanh",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856029/u7gdibgkdrnzbmt7jiid.jpg",
//               "size": [
//                   {
//                       "id": "a3882602-03fb-4c1c-b077-075e9c185887",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "c633d7ea-eb7b-4fd5-b9f1-dd42d73291b8",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "d1953dc2-f2e0-4e37-b7ed-a5b3ccc1e4a6",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "46b2fc81-bac4-48d9-905e-5d0b5e31bc28",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Xanh Lá",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856125/k7n0ilrsm7kstjmbghyj.jpg",
//               "size": [
//                   {
//                       "id": "a2fb3786-e1bc-4160-a593-d126121065d0",
//                       "text": "S",
//                       "quantity": 8
//                   },
//                   {
//                       "id": "221d5dfc-91b9-4e7c-95b8-d35328aad31a",
//                       "text": "M",
//                       "quantity": 2222
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": "BẢO HÀNH SẢN PHẨM 90 NGÀY » ĐỔI HÀNG TRONG VÒNG 30 NGÀY"
//           }
//       ],
//       "ratingProduct": 5
//   },
//   {
//       "id": "9",
//       "typeProduct": "Quần Nam",
//       "nameProduct": "QUẦN JEAN M1QJN05220FSFTR",
//       "priceProduct": 445000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856175/omnrsws3slmz2oulpzux.jpg",
//               "size": [
//                   {
//                       "id": "6163a3f9-9430-4579-b36b-f57e7637553e",
//                       "text": "S",
//                       "quantity": 8
//                   },
//                   {
//                       "id": "ef89cebb-2c30-4123-8da7-33e7cc437cb7",
//                       "text": "M",
//                       "quantity": 2222
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "10",
//       "typeProduct": "Quần Nam",
//       "nameProduct": "QUẦN JEAN M1QJN05211FSFRE",
//       "priceProduct": 425000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856222/kna2pwoq5ukag0909h2l.jpg",
//               "size": [
//                   {
//                       "id": "510dd5b9-82bd-4ec0-a24a-43bbc9dac3ca",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "a7110042-99a5-4840-b2b3-f58ba8d5b4ce",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "e120ef09-0f88-4d15-8fd3-d47dcd8f5f10",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "3e34d075-78c9-49f3-87d6-eefbe6ea28d7",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "11",
//       "typeProduct": "Quần Nam",
//       "nameProduct": "QUẦN JEAN M1QJN05206FSFRK",
//       "priceProduct": 450000,
//       "colorProduct": [
//           {
//               "color": "Xanh",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856330/oj3wrjhyw7bpnrk5msi3.jpg",
//               "size": [
//                   {
//                       "id": "17093ee2-9f59-4f6e-b620-5783dcbc1993",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "2a5124b8-e75b-444c-8feb-037475ff83ea",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "7be6b7e1-fd87-4dfe-9c02-b386255dd3b1",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "4b245bb7-7158-45bb-a41b-ed58bf23673c",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 5
//   },
//   {
//       "id": "12",
//       "typeProduct": "Áo Nam",
//       "nameProduct": "ÁO THUN M1ATN03202FOSHT",
//       "priceProduct": 285000,
//       "colorProduct": [
//           {
//               "color": "Trắng",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856400/axbdhwcat8qfgl4otpmo.jpg",
//               "size": [
//                   {
//                       "id": "2f145599-3858-4612-a3ed-b0d76a41cf8c",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "7ee505cb-1ded-4341-9891-918664e6ba23",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "d0803fcb-7e05-49f7-ab9f-6de78e97506e",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "47656059-cd5f-45ed-840c-49d1e9042756",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Xanh",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856423/howtrnj9qvwmwdsbgmnv.jpg",
//               "size": [
//                   {
//                       "id": "5efb70f2-1d24-4919-b4fd-7e5ae08d4d83",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "d42eab71-3ecb-47bf-94dc-7186854edbf2",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "cd2d32c4-a487-4641-a2ec-bba666f68192",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "4e364ed0-5cc2-4fe5-84d7-471c5550b483",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Tím",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856418/rzcmpil0k9nkbxm0aby1.jpg",
//               "size": [
//                   {
//                       "id": "7916417c-b5d9-49d4-ac18-a61aaa03356b",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "5a18eed6-f587-4795-ae3d-024600ab4e88",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "88964711-0431-4178-93d7-d7e219580409",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "95929be5-b086-428e-9b17-20e5fe0f4b51",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "13",
//       "typeProduct": "Áo Nam",
//       "nameProduct": "ÁO SƠMI M1SMD02201BOSTE",
//       "priceProduct": 320000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856503/elbtiuziltk8kgswtnlg.jpg",
//               "size": [
//                   {
//                       "id": "8009e682-2789-48df-b7ef-d5eb2487d4fd",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "56e1a8fd-5e56-4b93-9366-812cee998c0a",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "ab2a4526-98eb-4a24-a0a2-600943e903c2",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "d7457633-52f6-430b-9f73-e050753fa708",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Xám",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856506/pzylhkqpetdqohn4phiw.jpg",
//               "size": [
//                   {
//                       "id": "508b6905-99ba-455d-9791-28d3140ce718",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "28973fee-7c1d-4670-8597-86dfef839241",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "f85834a6-9932-46bb-9fc8-c90192d2aa08",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "f1eaeaac-7a39-4955-9362-09403f457aeb",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Nâu",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856510/bfjrhfmlw8npknorjdgw.jpg",
//               "size": [
//                   {
//                       "id": "55a553af-1b3b-4f59-a2a6-c0bcfec6568e",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "a57fbb0a-88b3-4b4a-9cb1-5824fe8f907f",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "1397946b-7e08-4c90-a6cb-b90bdbfde4ba",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "4111afbe-9887-41ab-8c47-d0b193ccb8d5",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Bạc",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856515/zc6skkrjtxu84cy4sshc.jpg",
//               "size": [
//                   {
//                       "id": "ec55b7e9-a6a8-4e59-93df-968027057ad1",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "19c314ce-c7a6-4cb3-89f9-0e0ebf0e407e",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "d3de0c1b-6884-43bf-bf50-219b48531145",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "6d4a1e9a-ecba-4e57-8af9-ebd04faf6e8a",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "14",
//       "typeProduct": "Quần Nam",
//       "nameProduct": "QUẦN JEAN M1QJN01215FSFRI",
//       "priceProduct": 425000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856610/jvegqfavlpyqmndtfbro.jpg",
//               "size": [
//                   {
//                       "id": "158a75a7-03f8-4492-97d3-ff29858becc7",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "6cb8722a-d538-4bd7-8d71-4213ec2eb2b3",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "1d07ab80-5a6e-45a6-af15-c202a5a6009e",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "4f727170-5746-4dc5-b8e7-bd0a165ec4c9",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "15",
//       "typeProduct": "Áo Nam",
//       "saleProduct": 5,
//       "nameProduct": "ÁO POLO M1ATP01205BSFSO",
//       "priceProduct": 300000,
//       "colorProduct": [
//           {
//               "color": "Nâu Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856678/hs4sxfbg2pshl7nwbyaf.jpg",
//               "size": [
//                   {
//                       "id": "ffc06db7-51e9-4558-afd2-0475e47d436e",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "2dd90b2e-6bbc-4ffb-bcaa-80bfef9efa0e",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "d300cc96-62d7-40df-9c96-7bb83e8f2766",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "04220413-8f1d-4752-bb3f-0d5d1d5a7c52",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Xanh Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856695/zst67c29opmreqb6jaad.jpg",
//               "size": [
//                   {
//                       "id": "d7f31415-1f55-456f-8af8-8c816fcfb0fa",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "f281aed0-6333-49ea-b234-0ba5f4686128",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "ef53fcb1-eaa3-4cba-a515-45617ab9908e",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "43a503f5-b4d2-4cc8-a3c0-92e28c03d473",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Vàng Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856702/b4dq3ctebkulokymrzed.jpg",
//               "size": [
//                   {
//                       "id": "d65d4991-412f-43ea-8b31-081de1b8aab8",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "9081e55e-e1d2-4b3a-af92-ba804af2077f",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "aae330d2-d493-4388-bea4-2735ab3b75fb",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "31b7779a-6503-4d3b-ad31-bef17c371811",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "16",
//       "typeProduct": "Áo Nam",
//       "saleProduct": 15,
//       "nameProduct": "Quần thời trang nam MLTTK305",
//       "priceProduct": 300000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856760/gw7nkumtvd9hnsruftlv.jpg",
//               "size": [
//                   {
//                       "id": "4cb48e1a-a996-4833-8b66-b6860c383b62",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "91905741-4b1e-47a0-8a70-fa232912b100",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "59d6c59f-7e77-4c02-90ee-1f7e6678b73c",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "5196150f-46e1-4850-b29a-f1031748d40d",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Xanh Lá",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856796/ngqh5oslowxta7w0npo7.jpg",
//               "size": [
//                   {
//                       "id": "531534e7-a900-454c-969c-4b80229b3e69",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "ba48b3f1-c45a-4c83-9cd6-56e363aeacd8",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "bffe62f5-505c-4c0a-97c2-91fd3bc0bfce",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "7929b08e-aac2-434c-a643-d6eb6ee9443e",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 5
//   },
//   {
//       "id": "17",
//       "typeProduct": "Quần Nam",
//       "saleProduct": 10,
//       "nameProduct": "QUẦN SHORT M1SJN01201FSFRI",
//       "priceProduct": 350000,
//       "colorProduct": [
//           {
//               "color": "Đen",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856902/qni7u1m6ktegquy8l4hc.jpg",
//               "size": [
//                   {
//                       "id": "7a0a3965-ccae-434e-97c3-fdf0ad3b3105",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "d1a18d39-817b-42c8-8122-4df9dfda3a92",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "96dacd31-d4d5-4b9b-8a54-d3a270fd7a2c",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "293d5cf1-3dfb-467a-81b8-85aaf95991e8",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "18",
//       "typeProduct": "Áo Nam",
//       "saleProduct": 15,
//       "nameProduct": "ÁO THUN U1ATD01201FOSBA",
//       "priceProduct": 915000,
//       "colorProduct": [
//           {
//               "color": "Hồng Cam",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656856947/ramk288odhnoancarzqb.jpg",
//               "size": [
//                   {
//                       "id": "ba04b3b6-6590-4ac1-bf40-7acfc20a1ad1",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "64b0890d-30bd-4917-b9c1-e8861902a3b5",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "47e9018b-9f50-489f-9e84-837c3fe58490",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "be1465ac-ec81-4f04-a214-695602bbc593",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   },
//   {
//       "id": "19",
//       "typeProduct": "Áo Nam",
//       "saleProduct": 10,
//       "nameProduct": "Áo sơ mi nam STNTK303",
//       "priceProduct": 355000,
//       "colorProduct": [
//           {
//               "color": "Nâu",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656857045/sygnleyscqxyw53tngdt.jpg",
//               "size": [
//                   {
//                       "id": "61c0bbfd-85d7-47c1-ac76-328cd2b24308",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "ba097086-5b3f-4720-aa44-04735bbd3e8a",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "236106af-e2b3-476a-9d97-c215ca6145f9",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "e6172873-0aba-429f-8d52-18238904b64e",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           },
//           {
//               "color": "Xanh Ngọc",
//               "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656857049/bsdxixx6lbhu3cvknfy3.jpg",
//               "size": [
//                   {
//                       "id": "b6af33ca-406b-4180-92d1-ec6c8fade569",
//                       "text": "S",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "4b9990d9-98e0-48f0-aa22-43098476778a",
//                       "text": "M",
//                       "quantity": 2222
//                   },
//                   {
//                       "id": "8d7e9adb-6634-453a-bb84-bf9c36ffde28",
//                       "text": "XL",
//                       "quantity": 3333
//                   },
//                   {
//                       "id": "ca960897-7040-45e6-8919-dd1e033aae22",
//                       "text": "XXL",
//                       "quantity": 3333
//                   }
//               ]
//           }
//       ],
//       "descriptionProduct": [
//           {
//               "headerText": "Mô tả",
//               "descriptionText": "– Màu sắc: Đen – Chất liệu: Vải cao cấp – Kiểu dáng: Snapback thời trang, phối màu cá tính – Đặc điểm: Chỉ thêu đẹp, tỉ mỉ – Sản phẩm có mặt tại tất cả các shop trên hệ thống."
//           },
//           {
//               "headerText": "Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống",
//               "descriptionText": ""
//           }
//       ],
//       "ratingProduct": 3
//   }
// ]