function Products(){
    const data=[
        {
            id:1,
            name:"Công Nghệ Blockchain",
            img:"https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-cong-nghe-blockchain.jpg",
            artist:'Nhiều tác giả',
            categoryID:1,
            content:"",
            vuaramat:true,
            docnhieu:true
        },
        {
            id:2,
            name:"Machine Learning Cơ Bản",
            img:"https://drive.google.com/uc?export=view&id=14dO5dFFIVh3jCvbtTpIM1nF3bbmzdhjl",
            artist:'Vũ Hữu Tiệp',
            categoryID:1,
            content:"",
            vuaramat:true,
            docnhieu:true
        },
        {
            id:3,
            name:"Learning Vue.js 2",
            img:"https://drive.google.com/uc?export=view&id=1eQ6G5JjP8oYPLVs8R7zGKVQWCjEj1OgL",
            artist:'Olga Filipova',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:4,
            name:"Giáo Trình Thuật Toán (Introduction To Algorithms )",
            img:"https://drive.google.com/uc?export=view&id=1amPdYp9oOkHp007IlcCqVrDnu7gYt7zv",
            artist:'Thomas H. Cormen - Charles E. Leiserson,',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:5,
            name:"Pro ASP.NET MVC 5",
            img:"https://drive.google.com/uc?export=view&id=1fuaZsecOfujUsUTxbMN2JkX1d6m8az3N",
            artist:'Adam Freeman',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:6,
            name:"Linux All-In-One For Dummies – 5Th Edition",
            img:"https://drive.google.com/uc?export=view&id=1uFMCZbvoXCBd3sST1iFdjdn1ULY6kzoI",
            artist:'Emmett Dulaney',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:7,
            name:"Giải Thuật Và Lập Trình",
            img:"https://drive.google.com/uc?export=view&id=1MHoQ-oESh1ycVCVvWnojbtJdPriRa6mP",
            artist:'Lê Minh Hoàng',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:8,
            name:"Beginning Programming With Java For Dummies – 4Th Edition",
            img:"https://drive.google.com/uc?export=view&id=1iTSnKZyiMbdVvS1tP2Iza9Vmzton7I8R",
            artist:' Barry A. Burd',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:9,
            name:"Php, Mysql, Javascript & Html5 All-In-One For Dummies",
            img:"https://drive.google.com/uc?export=view&id=1ZSaNmVJmb2A4C7ROrCoxCRsojLx-9VCi",
            artist:'Steve Suehring, Janet Valade',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:10,
            name:"Programming ASP.NET MVC 4",
            img:"https://drive.google.com/uc?export=view&id=1mj5JhS-jLegBWnIjNfj1KZ2cAgX76AwK",
            artist:'Jess Chadwick - Todd Snyder - Hrusikesh Panda',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:11,
            name:"Code Dạo Ký Sự ",
            img:"http://listsach.com/wp-content/uploads/2019/08/code-dao-ki-su-sach-hay-it.jpg",
            artist:'Phạm Huy Hoàng',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:12,
            name:"Gián điệp mạng",
            img:"http://listsach.com/wp-content/uploads/2019/08/sach-gian-diep-mang-sach-hay-ve-it-lap-trinh-cong-nghe.jpg",
            artist:'Clifford Stoll',
            categoryID:1,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:13,
            name:"Messi – Từ El Pulga Đến Một Huyền Thoại",
            img:"https://drive.google.com/uc?export=view&id=1peT40CZShLTf45HlS5GBlEwHkI9xoFRL",
            artist:'Luca Caioli',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:14,
            name:"Hướng Dẫn Chơi Cờ Vây ",
            img:"https://drive.google.com/uc?export=view&id=1bgEgN8K02_EhMcq3MwyisWw4Ffae2qXN",
            artist:' Nhiều Tác Giả',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:15,
            name:"Võ Thuật Trung Hoa – Đao Thuật",
            img:"https://drive.google.com/uc?export=view&id=1kiIIDPRdxamORKJqKiNo1E0g8KHJCZAT",
            artist:'Hà Sơn',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:16,
            name:"Võ Thuật Trung Hoa – Côn Thuật",
            img:"https://drive.google.com/uc?export=view&id=1CLNz8HH9rmrqJ8IWoAYyxs1Y9cl58jzw",
            artist:'Hà Sơn',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:17,
            name:"Ronaldo – Ám Ảnh Về Sự Hoàn Hảo",
            img:"https://drive.google.com/uc?export=view&id=12mdz1t0lxukVyRmoHlWEW0wBwSnnlY3r",
            artist:'Luca Caioli',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:18,
            name:"Barca – Đường Đến Vinh Quang",
            img:"https://drive.google.com/uc?export=view&id=1GhcE-BT1MG4NWiL690gydC0qFtJSIemu",
            artist:' Graham Hunter',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:19,
            name:"Dạy Trẻ Tập Bơi",
            img:"https://drive.google.com/uc?export=view&id=1G1Yy9d9ptwO-ZW3K_k_bFDoueTkY-oda",
            artist:'Alis Mark',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:20,
            name:"Tự Học Chơi Cờ Vua – Nước Đi Đầu Tiên Của Nhà Vô Địch",
            img:"https://drive.google.com/uc?export=view&id=11EWHKD21SGGDc7lwSznYDtsLFM7oEH5n",
            artist:'Mai Luân',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:21,
            name:"Võ Thuật Trung Hoa – Kiếm Thuật",
            img:"https://drive.google.com/uc?export=view&id=1BLCltqrJNj6GG-2qYf2yHtZl6qK1VhH_",
            artist:' Hà Sơn',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:22,
            name:"Võ Thuật Trung Hoa – Giáo Thuật",
            img:"https://drive.google.com/uc?export=view&id=1ZLP0VUG__LcgxmFV6sfZMtDyntrtY9eR",
            artist:' Hà Sơn ',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:23,
            name:"Học Chơi Cờ Tướng",
            img:"https://drive.google.com/uc?export=view&id=1rKiFLGBx1O2w_KffiCmJHvZUCsFSrDEM",
            artist:'Hải Phong',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:24,
            name:"Chơi Cờ Tướng Như Thế Nào – Quyển 2",
            img:"https://drive.google.com/uc?export=view&id=1nO7lW9oKYpSy4qMQdx3fk6fL-IB6V_BX",
            artist:'Nhiều tác giả',
            categoryID:2,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:25,
            name:"One Piece – Đảo Hải Tặc",
            img:"https://drive.google.com/uc?export=view&id=1_zX0kiyvOgflEwB1nJWtHlp_omNAxdC9",
            artist:'Eiichiro Oda',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:26,
            name:"Truyện Tranh Doremon Plus ",
            img:"https://drive.google.com/uc?export=view&id=1dtDG7aM_ned9RneDhuy00k3VJmDfpFE1",
            artist:'Fujiko F Fujio',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:27,
            name:"Truyện Tranh Doremon Màu",
            img:"https://drive.google.com/uc?export=view&id=1VbNTJTiA7XgR53GQ-xfP3LqVgRAIxOQF",
            artist:'Fujiko F. Fujio',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:28,
            name:"Đấm Phát Chết Luôn",
            img:"https://drive.google.com/uc?export=view&id=1rD5tj_nkzaIbInAvfLD-78oIR3M6xzzn",
            artist:'Nhiều tác giả',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:29,
            name:"Thám Tử Lừng Danh Conan bản đẹp Gosho Aoyama",
            img:"https://drive.google.com/uc?export=view&id=1s0LqFVcTZGCgwYa_cTed9_XlYJ9l_hrR",
            artist:'Gosho Aoyama',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:30,
            name:"Dragon Quest – Dấu Ấn Rồng Thiêng",
            img:"https://drive.google.com/uc?export=view&id=12mOw7qwjnHLtiBBuEh3Virfy3DpCzKrk",
            artist:'Sanjo Riku',
            categoryID:9,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:31,
            name:"Nanatsu No Taizai – Thất Hình Đại Tội",
            img:"https://drive.google.com/uc?export=view&id=1Pywd66JiJuGVqv3mB3x06MqayBMGRXTI",
            artist:'Suzuki Nakaba',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:32,
            name:"Toriko",
            img:"https://drive.google.com/uc?export=view&id=1eiC9tZ_08HnaAq8fbpsrEOE5gj5K3sPH",
            artist:'Shimabukuro Mitsutoshi',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:33,
            name:"7 Viên Ngọc Rồng – Dragon Ball",
            img:"https://drive.google.com/uc?export=view&id=1AaRVLmyP2LIPsnvTq_PaNFbLnNIlXINP",
            artist:'Akira Toriyama',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:34,
            name:"Bleach – Sứ Giả Thần Chết",
            img:"https://drive.google.com/uc?export=view&id=1AXD--kRbyZDKuStHvUW2vIJo7mGHYX32",
            artist:'Kubo Tite',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:35,
            name:"Death Note – Cuốn Sổ Tử Thần",
            img:"https://drive.google.com/uc?export=view&id=1LvLafwpmx0Ssep_eUU7JdQ97LT0Mo6lH",
            artist:'Tsugumi Ohba - Takeshi Obata',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:36,
            name:"Naruto",
            img:"https://drive.google.com/uc?export=view&id=1L-K-0YBxOwT8UYo9rb-anYuPEDl2_OdA",
            artist:'Kishimoto Masashi',
            categoryID:3,
            content:'',
            vuaramat:true,
            docnhieu:true
        },
        {
            id:37,
            name:"Tích Phân Và Ứng Dụng",
            img:"https://drive.google.com/uc?export=view&id=1iQ1kcvBDS5FSBloczxP-sN81OvKxr82O",
            artist:'Tô Thị Nga',
            categoryID:4,
            content:'',
          
        },
        {
            id:38,
            name:"Dạng Bài Mũ – Logarit, Số Phức",
            img:"https://drive.google.com/uc?export=view&id=1TBHffTRkkTPgTfuUFXz_vXWkWhh6RzB0",
            artist:'Tô Thị Nga',
            categoryID:4,
            content:'',
          
        },
        {
            id:39,
            name:"Giáo Trình Xác Suất Thống Kê",
            img:"https://drive.google.com/uc?export=view&id=10OXv5RS_PvmJZBcThqpZuZGhxbZp23XG",
            artist:'Tống Đình Quỳ',
            categoryID:4,
            content:'',
          
        },
        {
            id:40,
            name:"Giáo Trình Giáo Dục Quốc Phòng – An Ninh – Tập 2",
            img:"https://drive.google.com/uc?export=view&id=1M6BxMTHeeQZnUg2qddC5mWiRTYthZ6pc",
            artist:' NXB Giáo Dục',
            categoryID:4,
            content:'',
          
        },
        {
            id:41,
            name:"100% Trọng Tâm Ôn Kiến Thức Luyện Kỹ Năng – Sinh Học 12",
            img:"https://drive.google.com/uc?export=view&id=1UgSieOg9TpEq24zL1iExnouge7_0rqwU",
            artist:' Đoàn Mạnh Linh - Bùi Huyền Trang',
            categoryID:4,
            content:'',
          
        },
        {
            id:42,
            name:"100% Trọng Tâm Ôn Kiến Thức – Luyện Kỹ Năng Ngữ Văn 12",
            img:"https://drive.google.com/uc?export=view&id=1DmH24EA1IZEDoQyNaVNa5g2caab7OnU-",
            artist:' Đoàn Mạnh Linh - Bùi Huyền Trang',
            categoryID:4,
            content:'',
          
        },
        {
            id:43,
            name:"25 Bài Tập Trắc Nghiệm Tiếng Anh 11",
            img:"https://drive.google.com/uc?export=view&id=10XIAL9WS5v6mA572ZsXOMUaMxF27jXnz",
            artist:' Nguyễn Thị Minh Hương',
            categoryID:4,
            content:'',
          
        },
        {
            id:44,
            name:"Giải Bài Tập Toán 6 – Tập 2",
            img:"https://drive.google.com/uc?export=view&id=1i0E_HW5z05fcsuYfiHVs3OFNF57Zht7j",
            artist:'Lê Nhứt',
            categoryID:4,
            content:'',
          
        },
        {
            id:45,
            name:"Văn Mẫu Lớp 5",
            img:"https://drive.google.com/uc?export=view&id=1kwnnvRRLHK-T-_OZcOkseLl710oyOwaa",
            artist:' Sachvui.Com',
            categoryID:4,
            content:'',
          
        },
        {
            id:46,
            name:"Phương Pháp Tư Duy Giải Nhanh Trắc Nghiệm Toán 12",
            img:"https://drive.google.com/uc?export=view&id=1b0fLcpgM9hgB9ksu987IGLcu9oirQ_vK",
            artist:' Nguyễn Bá Tuấn',
            categoryID:4,
            content:'',
          
        },
        {
            id:47,
            name:"N400 Bài Toán Nâng Cao Vật Lý 10aruto",
            img:"https://drive.google.com/uc?export=view&id=1N4vOUH2MVT7Ixw8QY62dpocJ0EtCDvUu",
            artist:'Trần Trọng Hưng',
            categoryID:4,
            content:'',
          
        },
        {
            id:48,
            name:"Hướng Dẫn Sử Dụng Và Giải Toán Trên Máy Tính Casio",
            img:"https://drive.google.com/uc?export=view&id=1mtUxNkwYRyRV1ldSMJ15fEUMB4T_8mAz",
            artist:' Nguyễn Trường Chấn - Nguyễn Thế Thạch',
            categoryID:4,
            content:'',
          
        },
        {
            id:49,
            name:"Tuổi Thơ Dữ Dội",
            img:"https://drive.google.com/uc?export=view&id=1ztcFP_13kHPnYQCvi-kyrOOf9Ol7WcPl",
            artist:' Phùng Quán',
            categoryID:5,
            content:'',
          
        },
        {
            id:50,
            name:"Chị Em Khác Mẹ",
            img:"https://drive.google.com/uc?export=view&id=1r4my31EZ2nquPcitSBagf2yRcoOmoaN1",
            artist:' Thụy Ý',
            categoryID:5,
            content:'',
          
        },
        {
            id:51,
            name:"Quân Khu Nam Đồng",
            img:"https://drive.google.com/uc?export=view&id=1le-imZiyRy1zi-wzglaqXeD_f2WAbsun",
            artist:' Bình Ca',
            categoryID:5,
            content:'',
          
        },
        {
            id:52,
            name:"Những Ngã Tư Và Những Cột Đèn",
            img:"https://drive.google.com/uc?export=view&id=1eWmQUmg4jIXdUSmurBdQ0QcvWgLu-eAU",
            artist:'Trần Dần',
            categoryID:5,
            content:'',
          
        },
        {
            id:53,
            name:"Ngày Vui",
            img:"https://drive.google.com/uc?export=view&id=1WxKqw9fG2b5PGDuOnwBMfxwkAxfoihc6",
            artist:' Đặng Trần Huân',
            categoryID:5,
            content:'',
          
        },
        {
            id:54,
            name:"Ranh Giới",
            img:"https://drive.google.com/uc?export=view&id=1-dh40WKx57WXfBQbyE3-nJhrZ7MoHyRu",
            artist:'Phong Thanh      ',
            categoryID:5,
            content:'',
          
        },
        {
            id:55,
            name:"Chiếc Ngai Vàng",
            img:"https://drive.google.com/uc?export=view&id=1c2AH_L9WlU7YmJqlOuUrQ8INNijsdHLz",
            artist:' Lan Khai',
            categoryID:5,
            content:'',
          
        },
        {
            id:56,
            name:"Đoạn Tình",
            img:"https://drive.google.com/uc?export=view&id=1LJHsjzDge_16ZxDtAjLg6oCf_SQoX-52",
            artist:' Hồ Biểu Chánh',
            categoryID:5,
            content:'',
          
        },
        {
            id:57,
            name:"Cuộc Đời Ngoài Cửa",
            img:"https://drive.google.com/uc?export=view&id=1x-aYF-BoByfIcZ80Amso6SzW9qCyKsIM",
            artist:'  Nguyễn Danh Lam',
            categoryID:5,
            content:'',
          
        },
        {
            id:58,
            name:"Tuyển Tập Truyện Ngắn Vũ Trọng Phụng",
            img:"https://drive.google.com/uc?export=view&id=1_23vfiMYEH5S_liL2AvmoBeWGkMgl9qt",
            artist:' Vũ Trọng Phụng',
            categoryID:5,
            content:'',
          
        },
        {
            id:59,
            name:"Ván Bài Lật Ngửa",
            img:"https://drive.google.com/uc?export=view&id=1s_Vvy1LfsN8aNShwsbtHCHIVK3rWKAfp",
            artist:' Nguyễn Trương Thiên Lý',
            categoryID:5,
            content:'',
          
        },
        {
            id:60,
            name:"Một Đứa Con Đã Khôn Ngoan",
            img:"https://drive.google.com/uc?export=view&id=13Enx20MiZb3rABTogjhxN8CxuCFe9SWz",
            artist:'  Nguyễn Công Hoan',
            categoryID:5,
            content:'',
          
        },
        
       
    ]
    localStorage.setItem('products',JSON.stringify(data));
}

function Categorys(){
    const data=[
        {
            id:1,
            name:"Công nghệ thông tin"
        },
        {
            id:2,
            name:"Thể thao - Nghệ thuật"
        },
        {
            id:3,
            name:"Truyện tranh"
        },
        {
            id:4,
            name:"Tài liệu học tập"
        },
        {
            id:5,
            name:"Văn học Việt Nam"
        },
        {
            id:6,
            name:"Khoa học viễn tưởng"
        },
        {
            id:7,
            name:"Lịch sử Việt Nam"
        },
        {
            id:8,
            name:"Ngôn Tình-Lãng Mạng"
        },
       
    ]
    localStorage.setItem('categorys',JSON.stringify(data));
}

function users(){
    const data=[{
        username:'abc',
        password:'123',
        name:''
    }]
}

Products();
Categorys();