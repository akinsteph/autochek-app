// components/CarCard.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CarCardProps {
  car: {
    id: string;
    imageUrl: string;
    title: string;
    year: number;
    city: string;
    state: string;
    marketplacePrice: number;
    [key: string]: any;
  };
}

const CarCard = ({ car } : CarCardProps) => {
  const router = useRouter();
  
  // Function to navigate to the Car Detail page
  // const navigateToCarDetail = () => {
  //   router.push(`/car/${car.id}`);
  // };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const id = car.id;

  return (
    <div
      className={`bg-white w-full md:max-w-[48%] lg:max-w-[23%] overflow-hidden relative  ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <Link href={{
              pathname: '/car/[id]',
              query: { id: id },
            }}>
      {/* <div onClick={navigateToCarDetail} className={'coursor-pointer'}> */}
        <img
          src={car.imageUrl}
          alt={car.title}
          className="w-full h-[250px] object-cover rounded-5xs shadow-lg"
        />
      {isHovered ? (
        <div className="absolute left-0 top-0 bg-gray-light bg-opacity-70 rounded-5xs flex flex-col gap-3xs p-md w-full h-[250px]">
          <h2 className="text-md font-semibold mb-2 text-black-site">{car.title}</h2>
          <p className="text-sm text-black-site">Year: {car.year}</p>
          <p className="text-sm text-black-site">Location: {car.city}, {car.state}</p>
          <p className="text-sm text-black-site">Price: ${car.marketplacePrice.toLocaleString()}</p>
          <span className="text-blue underline">View Details</span>
        </div>
      ) : (
        <div className="flex flex-col gap-3xs p-3xs">
          <h2 className="text-xs font-normal mb-2 text-black">{car.title}</h2>
        </div>
        )
      }
      {/* </div> */}
      </Link>
    </div>
  );
};

export default CarCard;
