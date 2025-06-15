import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Manzanilla Seca",
    description:
      "Hierba seca de manzanilla para infusiones relajantes y digestivas.",
    price: 15000,
    image:
      "https://cdn.pixabay.com/photo/2020/06/01/14/19/chamomile-tea-5246824_640.jpg",
    stock: 50,
    category: "Plantas Medicinales y Hierbas Secas",
    reviews: [
      {
        user: "Ana",
        rating: 5,
        comment: "Excelente calidad, muy relajante.",
        date: "2025-05-01",
      },
    ],
  },
  {
    id: 2,
    name: "Extracto de Jengibre",
    description:
      "Extracto natural de jengibre para fortalecer el sistema inmunológico.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
    stock: 30,
    category: "Extractos Naturales y Suplementos",
    reviews: [],
  },
  {
    id: 3,
    name: "Crema de Aloe Vera",
    description: "Crema hidratante natural con aloe vera para piel sensible.",
    price: 28000,
    image:
      "https://cdn.pixabay.com/photo/2019/06/12/09/33/aloe-4268793_1280.jpg",
    stock: 40,
    category: "Cosmética Natural",
    reviews: [
      {
        user: "Luis",
        rating: 4,
        comment: "Hidrata bien, pero el envase es pequeño.",
        date: "2025-06-01",
      },
    ],
  },
  {
    id: 4,
    name: "Té de Hierbas Andinas",
    description:
      "Mezcla aromática de hierbas andinas para una infusión revitalizante.",
    price: 20000,
    image:
      "https://cdn.pixabay.com/photo/2022/04/04/15/42/herbal-tea-7111626_1280.jpg",
    stock: 60,
    category: "Tés y Mezclas Aromáticas",
    reviews: [],
  },
  {
    id: 5,
    name: "Hierba de San Juan",
    description:
      "Hierba seca para infusiones que apoyan el bienestar emocional.",
    price: 18000,
    image:
      "https://cdn.pixabay.com/photo/2016/07/27/09/30/sage-1544884_640.jpg",
    stock: 45,
    category: "Plantas Medicinales y Hierbas Secas",
    reviews: [],
  },
  {
    id: 6,
    name: "Cápsulas de Cúrcuma",
    description:
      "Suplemento natural de cúrcuma con propiedades antiinflamatorias.",
    price: 40000,
    image:
      "https://cdn.pixabay.com/photo/2018/07/11/08/24/about-3530488_640.jpg",
    stock: 25,
    category: "Extractos Naturales y Suplementos",
    reviews: [],
  },
  {
    id: 7,
    name: "Jabón de Caléndula",
    description: "Jabón artesanal de caléndula para pieles delicadas.",
    price: 22000,
    image: "https://cdn.pixabay.com/photo/2023/09/01/20/06/spa-8227623_640.jpg",
    stock: 35,
    category: "Cosmética Natural",
    reviews: [],
  },
  {
    id: 8,
    name: "Infusión de Menta y Limón",
    description:
      "Mezcla refrescante de menta y limón para digestión y relajación.",
    price: 19000,
    image:
      "https://cdn.pixabay.com/photo/2017/10/04/13/30/peppermint-2816233_640.jpg",
    stock: 50,
    category: "Tés y Mezclas Aromáticas",
    reviews: [],
  },
  {
    id: 9,
    name: "Valeriana Seca",
    description:
      "Hierba seca de valeriana para infusiones que promueven el sueño.",
    price: 17000,
    image:
      "https://cdn.pixabay.com/photo/2017/03/02/23/46/dandelion-2112780_640.jpg",
    stock: 40,
    category: "Plantas Medicinales y Hierbas Secas",
    reviews: [],
  },
  {
    id: 10,
    name: "Aceite de Moringa",
    description: "Extracto de moringa para apoyo nutricional y energético.",
    price: 38000,
    image:
      "https://cdn.pixabay.com/photo/2016/06/03/14/32/olive-oil-1433506_640.jpg",
    stock: 20,
    category: "Extractos Naturales y Suplementos",
    reviews: [],
  },
  {
    id: 11,
    name: "Bálsamo de Lavanda",
    description:
      "Bálsamo natural de lavanda para relajación y cuidado de la piel.",
    price: 25000,
    image:
      "https://cdn.pixabay.com/photo/2015/06/27/16/18/lavender-823600_1280.jpg",
    stock: 30,
    category: "Cosmética Natural",
    reviews: [],
  },
  {
    id: 12,
    name: "Té de Rooibos y Vainilla",
    description: "Mezcla aromática de rooibos con un toque de vainilla.",
    price: 21000,
    image: "https://cdn.pixabay.com/photo/2018/07/22/19/25/tea-3555327_640.jpg",
    stock: 55,
    category: "Tés y Mezclas Aromáticas",
    reviews: [],
  },
];

export const categories = [
  "Plantas Medicinales y Hierbas Secas",
  "Extractos Naturales y Suplementos",
  "Cosmética Natural",
  "Tés y Mezclas Aromáticas",
];
