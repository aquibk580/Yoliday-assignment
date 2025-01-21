"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

const items = [
  {
    id: 1,
    title: "Kemampuan Merangkum Tulisan",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    subject: "BAHASA SUNDA",
    author: "Al-Baqi Samaan",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Kemampuan Merangkum Tulisan",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    subject: "BAHASA SUNDA",
    author: "Al-Baqi Samaan",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Kemampuan Merangkum Tulisan",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    subject: "BAHASA SUNDA",
    author: "Al-Baqi Samaan",
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more items as needed
];

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export function PortfolioList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );
        if (response.status === 200) {
          console.log(response.data)
          setProducts(response.data);
        }
      } catch (error: any) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  return (
    <div className="divide-y divide-gray-200 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-1 gap-4 py-10 px-4 md:grid-cols-[200px,1fr] md:gap-6 md:py-6 rounded-lg shadow-lg"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-gray-600">
                  {product.price}
                </span>
                <span className="text-xs text-gray-500">
                  Oleh {product.category}product
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Button className="bg-[#F4B459] hover:bg-[#e5a44a]">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
