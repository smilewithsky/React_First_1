
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

    console.log("product ",Products);

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


[
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
                        "id": "18180ab3-d1aa-4a39-a7f8-1d151dafe398",
                        "text": "S",
                        "quantity": 3999
                    },
                    {
                        "id": "ac8731c4-e21a-4fdd-b282-b5781c9eaf23",
                        "text": "M",
                        "quantity": 5555
                    },
                    {
                        "id": "b815392b-a7a2-4f83-ab67-8fccb7de8a42",
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
                        "id": "27564d05-dd61-4523-bf21-7498f3e14f99",
                        "text": "S",
                        "quantity": 9999
                    },
                    {
                        "id": "c91b0344-18df-47ef-80f8-b0e9b0f9acb9",
                        "text": "M",
                        "quantity": 5555
                    },
                    {
                        "id": "6414b8a7-91d1-48ba-8fb8-efd7c5f9171f",
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
                        "id": "4f0c17af-0d35-42b5-9183-cd49272ffb6b",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "3385f3c2-17d3-4ce8-b87e-5f81075ca574",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "49924409-4b3c-4cc9-847c-4607f93ae736",
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
                        "id": "e58a0536-f765-4b13-ae4e-41bccf6a033d",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "65c339d1-5302-4923-bf0c-682f53b93751",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "a2e513f3-5e8d-4c64-8011-404b4f5f733e",
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
                        "id": "4c48b3fb-f3be-47ea-95eb-fb5b0bb110e4",
                        "text": "S",
                        "quantity": "3333"
                    },
                    {
                        "id": "a9274067-9c2c-4c80-9d4c-a1b8f2134b42",
                        "text": "M",
                        "quantity": "2222"
                    }
                ]
            }
        ],
        "descriptionProduct": [
            {
                "headerText": "Mô tả",
                "descriptionText": "– Chất liệu: Cotton – Dáng: Regular – Chất liệu: Cotton – Đặc tính: Mềm mại, co giãn tốt, có độ thấm hút mồ hôi và hút ẩm cao, thoáng mát. – Màu: đen, nâu, – Màu: đen, nâu + Hướng dẫn sử dụng: – Giặt ở nhiệt độ bình thường, với đồ có màu tương tự. – Không được dùng hóa chất tẩy. – Hạn chế sử dụng máy sấy, ủi ở nhiệt độ bình thường. – Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống."
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
                        "id": "d0faa347-05d4-463d-9946-7f106b83448d",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "687c3308-2ea0-4206-89cc-ee4b0ad83944",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "e8404a14-8551-4036-817b-551133edc7f0",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "bf7c8988-c5ce-4bec-8162-29a142a879c2",
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
                        "id": "05a9f475-6aa1-4f2b-92a1-2b84d12b2357",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "4e6a5680-4613-4b89-8205-13bf18032ca3",
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
    },
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
                        "id": "927a69ad-a7a6-407e-a1b4-b277dea93300",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "3cfc1c8b-2e4c-4256-a10a-f9a2e55097a1",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "82c5b010-e2e8-47be-b7e9-991e06f0b4a6",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "3db3eabf-747d-421b-8b8f-bdf379bc9b8a",
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
            },
            {
                "headerText": "– Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống.",
                "descriptionText": ""
            }
        ],
        "ratingProduct": 5
    },
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
                        "id": "1e27071a-89d2-48c4-b34e-3680ed933f21",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "c05192f9-4f6a-487d-98f3-b302f2e2cf5b",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "a033af92-92e5-4ae8-a3c8-068d792891ea",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "615555fe-aa50-4ee8-83b7-c066817ad7af",
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
                        "id": "8245f551-0330-453e-8775-5b2cd6f3cf8a",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "3d2adee4-bfdf-4712-9103-3a5f446870cb",
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
                        "id": "faf347ab-ebbc-4654-864a-67210bbb3c1a",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "e7293734-38af-42a5-9d3c-8171cc2be29c",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "a85821b5-05df-4fbb-981e-ffa663077169",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "52f59d97-ac75-4151-8e2c-3bbfebae9eea",
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
    },
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
                        "id": "a4292b83-ba84-4df7-8365-68aba14227a0",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "2fc8cc06-3b9c-4be2-a5e5-3c2b41c8c3e4",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "74c33d64-7c41-4f9d-b9e6-c6489cbd5432",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "fd6e3d95-b43a-4b55-9d47-6388773f76d4",
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
                        "id": "931f3ad6-936a-4347-8266-e093d597df60",
                        "text": "S",
                        "quantity": 8
                    },
                    {
                        "id": "6824a2cc-72d1-4cd8-be90-1f0f5567a854",
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
    },
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
                        "id": "563abfa2-528a-4df7-8257-5536da31568d",
                        "text": "S",
                        "quantity": 8
                    },
                    {
                        "id": "058e8a94-c9db-4db3-ad17-292d4a66f7e3",
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
    },
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
                        "id": "5659883d-c96c-4966-b41a-28d7d05f33c5",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "d50708cd-803d-4416-89c7-a381b296841a",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "4174b788-fb16-44d7-afdf-65b608388836",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "cd0c64fd-1936-4b56-b565-8550b7a7d5b6",
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
    },
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
                        "id": "5a0fadfe-4d13-43dc-befc-643e96f43eee",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "3fc47b10-e556-49e6-a227-1ccafaea9eee",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "c659ca47-b7c8-4324-9c17-d7383535a869",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "6a30dbdd-84e1-4f8d-ad8e-8f9caefef052",
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
    },
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
                        "id": "9f54c5ad-1247-439f-ab30-3e6dddb29a95",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "e52cf2c5-6d0f-43a2-8d09-91a4c848ad93",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "51b64a1b-3944-4111-8af1-0e1e5ea4248f",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "6a3b1d64-2be1-40c8-a8c8-6a3b90902f29",
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
                        "id": "1034d3c9-48c6-4b6c-8568-e9dc01441b69",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "5d857dc5-66a1-4f12-8e07-ab82df041f06",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "88aaf6bf-4fb0-4e79-8204-8260941b5e25",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "eca00157-2251-4cfa-bb55-08eb893c4e83",
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
                        "id": "cd68247b-41c1-4a1b-98fc-4117ae7b9cc9",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "464cf894-bded-4d7f-9460-948eed837400",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "31494072-ff5f-4e84-a4b4-0c39eca356e3",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "478927c9-31e6-406c-b9f0-3da48ba95be3",
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
    },
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
                        "id": "9d1e98e5-1bac-46db-b3fd-3f096efb447f",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "decd0ff2-dd1e-4057-8d15-efb05bc25b8a",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "34b99e1e-7eaf-45fd-86d6-a6897c2b0ac8",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "31cba568-412f-4e0d-ba81-84e36d0e623d",
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
                        "id": "f61f95f0-f698-42ad-80cb-aa7b648b856a",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "63876048-1f70-4e04-b284-52d7fdb4d2a9",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "d12994c6-45db-4caa-88b5-086b47d8b35d",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "3c52529b-bab1-4236-b5d9-803c63a60cbf",
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
                        "id": "da7f8ce6-4606-4e98-a662-30264b06f30d",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "19cbc764-ad8a-4b4f-b339-1aa6fdb39957",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "08ece42d-b2be-4fae-8672-26f58b764e6e",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "37c3f8f3-0267-4eb7-8365-885fa4eba69f",
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
                        "id": "ea3b2d34-5ba4-4b8d-9611-078fa68e549b",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "b86b9fab-dc6e-43f6-b75b-84e784bd02bb",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "37780d7b-1165-4495-a829-82847c92ed81",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "1130a8e8-d255-42f2-9dfe-c7880808be7a",
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
    },
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
                        "id": "fc81530c-77c3-46cb-b1d5-2e9da0306b65",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "fb8df48a-e022-45fd-b740-c90393310833",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "e06c34c2-4041-48c6-9ec3-3c3648832e3e",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "1a95e7ad-de24-43cb-9651-f81ceab803b6",
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
    },
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
                        "id": "ba52973b-954f-47e5-9679-b543465e459b",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "e9967196-41b2-436c-bdc9-7aee21082b85",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "d5693cf3-2e85-4768-9631-f12090bd99ec",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "9af6de7f-374a-4cd2-b5d9-4552b3867316",
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
                        "id": "c1452144-1e11-464a-bc90-599914402e42",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "f1b0b2fd-7282-478a-af54-148f89aaa8fe",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "e1bc0609-b830-4673-a6c2-765d2ca90789",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "2f5a16db-93a9-4b57-9a15-f53fabe06174",
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
                        "id": "cacfd64d-39ce-43d6-bb22-f8a67c638c27",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "3aaf86ee-6384-49e5-bdee-dcf9d17afd59",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "42a46fca-8b4c-4257-8e19-98b90efc2a4d",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "099bbe0a-98aa-470f-8a91-033bf7850b01",
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
    },
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
                        "id": "3c055e61-055b-435d-9739-f7e615e8e753",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "6de9440f-f64a-4d45-8cb6-52901553fbe1",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "3164b2cd-3ece-4c6d-a835-559259683277",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "c7f78ac9-4436-4524-8ef7-b130f2b56fee",
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
                        "id": "4ed00edf-14be-4ff7-b96f-be3132f8875b",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "7bfa5719-084f-4bb5-adb3-03eb1b29e364",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "6b6c5928-17ba-4d4a-b002-50919ea41a4c",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "7e6747e3-753f-4e20-ad41-e30dd331e9c6",
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
    },
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
                        "id": "a03f5f3c-6a2c-4bcc-bc7b-1efcb8dd8e50",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "f28120c3-1a89-4298-813d-01abbca76d76",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "bf900ffe-cf46-44ed-b011-ba31398bd73f",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "ad4d518e-eed7-495c-96b3-1cf4dd6dd71d",
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
    },
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
                        "id": "44d9c91e-fc7a-4f3c-b730-1bc4a21589c3",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "a2967517-3bfe-4ea3-8d4f-42c1f10696d7",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "0d8a9617-148d-46d7-b96a-b049ac97318d",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "7a57a6c5-deff-4b66-bf00-b1015934b062",
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
    },
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
                        "id": "0eb5744e-551b-4220-a632-704b35a3e3bc",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "a0335e83-ef0b-4c56-b8cd-ab6560f2645e",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "3223e9fc-3721-4d45-ae06-5ca410d6874f",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "170e0950-010b-4273-9e76-38c78284de9e",
                        "text": "XXL",
                        "quantity": 3333
                    }
                ]
            },
            {
                "color": "Xanh Ngọc",
                "image": "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656857049/bsdxixx6lbhu3cvknfy3.jpg",
                "size": [
                    {
                        "id": "1f91a096-1d00-4257-ba89-cb26fccfd957",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "98b4cabf-4305-4d26-b274-267c35ebbeeb",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "a8bd1bc8-5b6a-44cb-bb53-45ac2c8e0c19",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "db19e105-8e54-45f8-a940-083ba2385ed1",
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
    },
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
                        "id": "b238d1c3-ab4c-4999-ae27-48f943792ecf",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "633213f1-fab2-4160-80f4-3c734cd41dcc",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "c7e39c46-1021-4b4d-8803-cc6ac518acf1",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "c09da6c3-9999-4efd-b048-65a5e04d31dd",
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
    },
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
                        "id": "7063d31d-bb34-4dd4-830c-9661883a609e",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "dc2cfa5b-730c-4218-bee3-eb09be8ffe40",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "be6b6c17-cec5-4fff-b309-5d4e268a8d59",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "9599d662-782d-4a9d-823b-8fca672ea3ff",
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
                        "id": "4ed6e7a2-8e9d-4d72-8584-8cbf86d6c55b",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "c9c5ba5f-1cf5-42da-9f9e-44bff3a131cd",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "15b0727b-7153-413f-9c9e-2b551f6b1f86",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "73531edc-5e0f-4fad-99d3-12b97ab84136",
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
                        "id": "77b14828-3be3-422d-afc2-9955a71e7313",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "e5f5b98d-6567-4963-8d99-dead923d99b7",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "6868ac72-2c4b-4b2b-81f3-d15fa96414b4",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "a9b360ae-fc91-4cdd-bcbd-a5967666b8ee",
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
    },
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
                        "id": "650b4411-2919-4e0a-bc67-f1ac54138fda",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "bdbb14c5-0aa7-43d7-8a74-ecdf0ce2e78e",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "386a7d9c-0150-49c1-988c-f7c59c93b4e5",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "e8209456-da91-4542-81eb-43ce067b055d",
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
    },
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
                        "id": "db5b3e74-789e-4894-abe5-d3ebe19f490e",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "6fdb3f31-bf48-40a4-adeb-16b5656a5e14",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "59587204-0cb2-402f-9707-a96bab0b7607",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "1d0a058c-1ddc-41f2-82de-7c98576deeb3",
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
                        "id": "ace66f52-2d84-4743-a372-86a22a1d8df8",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "d81e6573-dcf7-406e-9007-3789b2de3654",
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
                        "id": "180cf8c4-42f4-4e22-8ec8-72933db4d8a5",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "073752a3-1e01-4cf4-903c-af48a4ddcff9",
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
    },
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
                        "id": "1c09996a-e00a-4c05-98f5-85983e8fd55e",
                        "text": "39",
                        "quantity": 100
                    },
                    {
                        "id": "847d6911-3252-4189-985c-57d6f3191729",
                        "text": "40",
                        "quantity": 100
                    },
                    {
                        "id": "e522f92f-6916-4705-a686-fb6a33deb227",
                        "text": "41",
                        "quantity": 300
                    },
                    {
                        "id": "846d30ac-fc01-411e-b87c-228d13fc1fc5",
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
    },
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
                        "id": "5caeee5b-9eac-40b0-992f-5e8f55154310",
                        "text": "39",
                        "quantity": 111
                    },
                    {
                        "id": "b2d4fe21-c980-4806-a0f7-29092777a1ef",
                        "text": "40",
                        "quantity": 2222
                    },
                    {
                        "id": "05506fd3-46cb-4508-961b-4542b2e68269",
                        "text": "41",
                        "quantity": 11
                    },
                    {
                        "id": "1c30d3c4-ef17-42f4-b165-48af9138e9a4",
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
    },
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
                        "id": "7c17bc8c-bdb7-4941-aae4-512beb2339cf",
                        "text": "39",
                        "quantity": 1111
                    },
                    {
                        "id": "b33d041c-8e55-44d3-bbbf-cf2c36a8853e",
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
    },
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
                        "id": "5b4efc4e-0999-4012-beeb-99e41a0544e8",
                        "text": "39",
                        "quantity": 4444
                    },
                    {
                        "id": "0161eb8b-2548-41de-b451-576969141488",
                        "text": "40",
                        "quantity": 5555
                    },
                    {
                        "id": "76772ea0-1e9a-4d8b-bfc9-af5542c66d3e",
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
    },
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
                        "id": "43c1f9ad-a370-47dd-9d7e-d509ec84483c",
                        "text": "39",
                        "quantity": 3333
                    },
                    {
                        "id": "750e0e7f-01d3-4fa3-875f-7795ac5e5383",
                        "text": "40",
                        "quantity": 2222
                    },
                    {
                        "id": "1f9f170f-98d3-48e9-a0f5-f6075cc7fd3f",
                        "text": "41",
                        "quantity": 3333
                    },
                    {
                        "id": "43362c35-0675-470d-a925-9e4e6294d2eb",
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
    },
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
                        "id": "a7c54c9d-6bab-4757-a0fe-b1b194b82cb5",
                        "text": "41",
                        "quantity": 3333
                    },
                    {
                        "id": "3ea19c69-05e1-4886-8353-6b58f6d2214b",
                        "text": "42",
                        "quantity": 2222
                    },
                    {
                        "id": "bc1265f1-6c0b-4cb9-baad-982e25b8c100",
                        "text": "43",
                        "quantity": 3333
                    },
                    {
                        "id": "0d0bf498-70e3-45d5-a566-77132be39252",
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
    },
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
                        "id": "d315928b-2fe3-4a6e-8590-9e7fc208f56f",
                        "text": "41",
                        "quantity": 3333
                    },
                    {
                        "id": "3602c268-8672-457e-8e43-d46e8b33721a",
                        "text": "42",
                        "quantity": 2222
                    },
                    {
                        "id": "e01ff0a3-bc30-478e-ae2c-805a76684bf9",
                        "text": "43",
                        "quantity": 3333
                    },
                    {
                        "id": "ed2cbdb9-2331-4ec5-aad9-ead5c002a1cd",
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
    },
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
                        "id": "58f146f4-a3df-4180-a20a-df0b53506059",
                        "text": "40",
                        "quantity": 3333
                    },
                    {
                        "id": "857dabbd-2bb7-4a5f-bf66-1201efa1bf7f",
                        "text": "41",
                        "quantity": 2222
                    },
                    {
                        "id": "deac7682-7d49-4bb4-bc11-dd556a2706ac",
                        "text": "42",
                        "quantity": 3333
                    },
                    {
                        "id": "32c137d2-ec33-4286-b2c1-5dd5f6bab79a",
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
    },
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
                        "id": "a592bf0d-5cd9-48b3-b97d-c35e42aa4064",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "f3e215e9-f300-44bb-b1c2-de5a6f3cad90",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "63e285d1-eac4-45bc-b1f8-24f91816580b",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "af012df7-fab5-45ef-a863-b77049f9f5a7",
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
    },
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
                        "id": "98cff510-6691-400e-8f18-0dad1c8813cc",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "df4b6d4c-2fa8-4b39-8ba8-ff4b83e7e523",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "3b571b45-a2cb-477c-b799-33b39f3039a1",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "38c4d2a4-3a3c-49b4-be7c-6744e0cfbc96",
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
    },
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
                        "id": "4cbf2aa6-5d30-4fa2-9f46-498bbfce29c5",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "a7766031-bcb1-4efa-b37d-a3879c8ae036",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "3669da61-ce09-4a20-b367-963b34eadc67",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "c510d297-a637-4839-8ce8-df83b72acd03",
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
    },
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
                        "id": "875d354a-ce34-4e98-a46a-f4f346ab9f03",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "30cc7261-b224-44dc-8a3c-80b3b0681358",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "e839bb10-83ed-4f03-9e1a-215912dac10b",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "5eea591c-5c96-4caf-be78-361a1fd9af58",
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
    },
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
                        "id": "10a69b2f-6829-42cc-aef0-79c226ae8806",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "25011d1e-4027-4fd5-ae4c-77b6e3e0c0b7",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "f4878396-1d06-4b17-801b-084daf27f20e",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "d67430f3-5c99-4803-b58d-1b7f1dfa08c2",
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
                        "id": "8be0c1ed-939d-457f-adde-649af36c8ebf",
                        "text": "S",
                        "quantity": 3333
                    },
                    {
                        "id": "ec5a7ca3-1440-4cd0-8611-cbbc726b8023",
                        "text": "M",
                        "quantity": 2222
                    },
                    {
                        "id": "22bd8f72-21bb-41c9-b92e-1b58a7f88d39",
                        "text": "XL",
                        "quantity": 3333
                    },
                    {
                        "id": "d46ecbdd-d5fb-4715-91ab-fe11a210969a",
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