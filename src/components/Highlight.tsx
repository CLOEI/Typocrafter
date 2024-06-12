import { BadgeCheck, Headset, Trophy, Truck } from "lucide-react";
import React from "react";

function Highlight() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 px-2 py-8 bg-primary md:px-24">
      <div className="flex items-center space-x-1 py-4">
        <Trophy size={32} />
        <div>
          <p className="font-semibold text-sm">High Quality</p>
          <p className="font-medium text-xs">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center space-x-1 py-4">
        <BadgeCheck size={32} />
        <div>
          <p className="font-semibold text-sm">Warranty Protection</p>
          <p className="font-medium text-xs">Over 2 year</p>
        </div>
      </div>
      <div className="flex items-center space-x-1 py-4">
        <Truck size={32} />
        <div>
          <p className="font-semibold text-sm">Free Shipping</p>
          <p className="font-medium text-xs">Order over $150</p>
        </div>
      </div>
      <div className="flex items-center space-x-1 py-4">
        <Headset size={32} />
        <div>
          <p className="font-semibold text-sm">24/7 Support</p>
          <p className="font-medium text-xs">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
