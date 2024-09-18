export const Products = [
  {
    id: "TK-001",
    name: "Khadi Silk Floral Print Saree",
    image: [
      // Default saree images without embroidery
      "https://assets.ajio.com/medias/sys_master/root/20240814/bric/66bc67411d763220fa79b059/-473Wx593H-700187158-beige-MODEL.jpg",
      "https://www.bharatsthali.com/cdn/shop/products/final-6_59bc9d85-6fcf-41f1-9f66-2c32906e1784_1800x1800.jpg?v=1653218373",
    ],
    price: "1,300",
    qty:1,

    blouseSizes: [
      {
       size: "XL",
       blousePrice: 445,
      },
      {
        size: "L",
        blousePrice: 445,
       },
       {
        size: "SL",
        blousePrice: 445,
       }
     ],
    // Default price
    colorModles: [
      {
        name: "XL",
        details: 'To Fit Bust - 42" | Waist - 38" | Hip - 46',
      },
      {
        name: "L",
        details: 'To Fit Bust - 40" | Waist - 36" | Hip - 44',
      },
    ],

    selectedemdesign:{
      image:'',
      price:0
    }
  },

  {
    id: "TK-002",
    name: "Women Zari Woven Saree with Tassels",
    image: [
      "https://assets.ajio.com/medias/sys_master/root/20240610/EcPM/666630fe05ac7d77bbb1701f/-473Wx593H-700062049-purple-MODEL.jpg",
    ],
    price: "4999",
    blouseSizes: [
      {
       size: "XL",
       blousePrice: 445,
      },
      {
        size: "L",
        blousePrice: 445,
       },
       {
        size: "SL",
        blousePrice: 445,
       }
     ],
    // Default price
    colors: [
      {
        name: "XL",
        details: 'To Fit Bust - 42" | Waist - 38" | Hip - 46',
      },
      {
        name: "L",
        details: 'To Fit Bust - 40" | Waist - 36" | Hip - 44',
      },
    ],
    selectedemdesign:{
      image:'',
      price:0
    },
    qty: 1,
  },
  {
    id: "TK-003",
    name: "Women Embroidered Saree with Contrast Border",
    image: [
      "https://assets.ajio.com/medias/sys_master/root/20240118/1sxB/65a8566d16fd2c6e6aaeb7cb/-473Wx593H-466990390-maroon-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240118/QmOF/65a8566d16fd2c6e6aaeb7cf/-473Wx593H-466990390-maroon-MODEL5.jpg",
    ],
    price: "9520.",
    blouseSizes: [
      {
       size: "XL",
       blousePrice: 445,
      },
      {
        size: "L",
        blousePrice: 445,
       },
       {
        size: "SL",
        blousePrice: 445,
       }
     ],
    // Default price
    colors: [
      {
        name: "XL",
        details: 'To Fit Bust - 42" | Waist - 38" | Hip - 46',
      },
      {
        name: "L",
        details: 'To Fit Bust - 40" | Waist - 36" | Hip - 44',
      },
    ],

    selectedemdesign:{
      image:'',
      price:0
    },
    qty: 1,
  },
  {
    id: "TK-005",
    name: "Women Embroidered Saree with Contrast Border Pink",
    image: [
      "https://assets.ajio.com/medias/sys_master/root/20240129/p1eg/65b7d3c916fd2c6e6ac857b7/-473Wx593H-467019544-white-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240129/vq6z/65b7d3ce16fd2c6e6ac857f4/-473Wx593H-467019544-white-MODEL4.jpg",
    ],
    price: "2999",

    blouseSizes: [
      {
       size: "XL",
       blousePrice: 445,
      },
      {
        size: "L",
        blousePrice: 445,
       },
       {
        size: "SL",
        blousePrice: 445,
       }
     ],
    // Default price
    colors: [
      {
        name: "XL",
        details: 'To Fit Bust - 42" | Waist - 38" | Hip - 46',
      },
      {
        name: "L",
        details: 'To Fit Bust - 40" | Waist - 36" | Hip - 44',
      },
    ],
    selectedemdesign:{
      image:'',
      price:0
    },
    qty: 1,
  },
];

export const EmbroideryOptions = [
  {
    id: "TKE-001",
    image:
      "https://imgs.search.brave.com/74ZzhLarNJZjQ_VOR-QMEVCGrncm3JUNj1iVhcG1hmM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8yLmlt/aW1nLmNvbS9kYXRh/Mi9HRC9ESS9NWS0z/ODQ5ODUwL2VtYnJv/aWRlcnktZGVzaWdu/cy1mb3ItZGlmZmVy/ZW50LXR5cGVzLW9m/LXNhcmVlcy0xMDAw/eDEwMDAuanBn",
    price: "200",
  },
  {
    id: "TK-002",
    image:
      "https://imgs.search.brave.com/74ZzhLarNJZjQ_VOR-QMEVCGrncm3JUNj1iVhcG1hmM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8yLmlt/aW1nLmNvbS9kYXRh/Mi9HRC9ESS9NWS0z/ODQ5ODUwL2VtYnJv/aWRlcnktZGVzaWdu/cy1mb3ItZGlmZmVy/ZW50LXR5cGVzLW9m/LXNhcmVlcy0xMDAw/eDEwMDAuanBn",
    price: "400",
  },
  {
    id: "TK-003",
    image:
      "https://imgs.search.brave.com/FQdc53zuG9d6bPDsSVYvpQ591Qi_cn8K-ZaxyHiqq7E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU4L2Qz/LzUwLzU4ZDM1MDhm/MmRhNTMwYWJkZDQz/ZTU3N2M2ZTc5ZDE5/LmpwZw",
    price: "500",
  },
];
