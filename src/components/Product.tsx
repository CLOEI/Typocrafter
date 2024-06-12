import type { Product } from "@/app/page";
import React from "react";

const idr = new Intl.NumberFormat("id-ID", { currency: "IDR" });
function Product({ data, product }: { data: Product; product: string }) {
  return (
    <div>
      <div className="h-72 md:h-[401px] relative">
        {data.discount > 0 && (
          <div className="font-medium w-12 h-12 absolute bg-[#E97171] top-6 right-6 rounded-full text-white flex items-center justify-center">
            -{data.discount}%
          </div>
        )}
        {data.isNew && (
          <div className="font-medium w-12 h-12 absolute bg-[#2EC1AC] top-6 right-6 rounded-full text-white flex items-center justify-center">
            New
          </div>
        )}
      </div>
      <div className="h-[145px] bg-[#F4F5F7] flex items-center pl-4">
        <div className="text-left space-y-2">
          <p className="font-semibold text-xl md:text-2xl">{product}</p>
          <p className="font-medium text-[#898989]">By {data.by}</p>
          <div className="flex gap-4">
            <p className="font-semibold text-lg md:text-xl">
              Rp {idr.format(data.price)}
            </p>
            {data.discountedPrice > 0 && (
              <p className="line-through text-[#B0B0B0]">
                Rp {idr.format(data.discountedPrice)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
