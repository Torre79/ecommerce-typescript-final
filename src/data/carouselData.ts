export interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2020/05/14/20/09/mint-5171202_640.jpg",
    title: "Plantas Medicinales",
    description: "Descubre hierbas naturales para tu bienestar.",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2018/02/08/13/16/essential-oil-3139479_640.jpg",
    title: "Cosmética Natural",
    description: "Cuida tu piel con productos libres de químicos.",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2016/05/23/15/16/herbal-tea-1410565_640.jpg",
    title: "Tés Aromáticos",
    description: "Disfruta de infusiones únicas y saludables.",
  },
];
