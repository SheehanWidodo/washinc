import React from 'react';
import { Shirt, Fan, Truck } from 'lucide-react'; // Import Lucide icons


function ShoeCard({ shoe }) {
  // Determine progress states
  const isWashing = shoe["Pencucian"] === "1";
  const isDrying = shoe["Pengeringan"] === "1";
  const isDelivery = shoe["Pengiriman"] === "1";

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white w-full max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-2">{shoe["Kode Booking"]}</h3>
      <p className="text-gray-600"><b>{shoe["Nama"]}</b> | {shoe["Tanggal"]} </p>


      {/* Progress Bar */}
      <div className="flex items-center justify-between mt-4">
        {/* Washing */}
        <div className="relative flex flex-col items-center">
          <Shirt className={["w-8 h-8", isWashing ? "text-green-500" : "text-gray-400"].join(" ")} />
          <span className="text-xs">Washing</span>
        </div>

        {/* Line 1 */}
        <div className="w-16 h-1 bg-gray-300 relative">
          {isWashing && (
            <div className="absolute top-0 left-0 h-1 w-full bg-green-500 animate-progress"></div>
          )}
        </div>

        {/* Drying */}
        <div className="relative flex flex-col items-center">
          <Fan className={["w-8 h-8", isDrying ? "text-green-500" : "text-gray-400"].join(" ")} />
          <span className="text-xs">Drying</span>
        </div>

        {/* Line 2 */}
        <div className="w-16 h-1 bg-gray-300 relative">
          {isDrying && (
            <div className="absolute top-0 left-0 h-1 w-full bg-green-500 animate-progress"></div>
          )}
        </div>

        {/* Delivery */}
        <div className="relative flex flex-col items-center">
          <Truck className={["w-8 h-8", isDelivery ? "text-green-500" : "text-gray-400"].join(" ")} />
          <span className="text-xs">Delivery</span>
        </div>
      </div>
    </div>
  );
}

export default ShoeCard;
