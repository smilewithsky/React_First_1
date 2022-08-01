
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


