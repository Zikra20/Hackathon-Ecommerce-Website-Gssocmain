export interface Product {
  name: string;
  price: string;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    name: "The Dandy Chair",
    price: "£250",
    image: "/chair.png",
    alt: "The Dandy Chair",
  },
  {
    name: "New Lamp",
    price: "£350",
    image: "/lamp.png",
    alt: "New Lamp",
  },
  {
    name: "The Stanley Table",
    price: "£125",
    image: "/table.png",
    alt: "The Stanley Table",
  },
  {
    name: "Stool",
    price: "£250",
    image: "/stool.png",
    alt: "Stool",
  },
  {
    name: "Andel Vase",
    price: "£95",
    image: "/vase.png",
    alt: "Andel Vase",
  },
];
