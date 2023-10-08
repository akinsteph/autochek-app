import React, { useEffect, useState } from 'react';
import { getAllCars } from '@/libs/api';
import CarCard from './CarCard';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';

interface CarItem {
  id: string;
  imageUrl: string;
  title: string;
  year: number;
  city: string;
  state: string;
  marketplacePrice: number;
  [key: string]: any;
}

const CarList = () => {
  const [carList, setCarList] = useState<CarItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchData = async (page: number, query: string) => {
    const response = await getAllCars();
    setCarList(response.result);
    setTotalPages(response.pagination.totalPages);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container mx-auto px-4">

      <div className="mb-4">
        <div className="flex md:h-[80px] justify-between gap-0 items-center mb-3xl bg-white overflow-hidden rounded-5xs shadow-lg">
          <div className="w-2/3 h-full">
            <input
              type="text"
              placeholder="Search cars..."
              className="px-md py-2 border-0 w-full h-full bg-white"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className={"w-1/3 h-full flex border-l-px border-l-gray-borders"}>
            <div className="text-black-site w-1/2 h-full flex jusity-center items-center lg:px-30">
              Pages {currentPage} / {totalPages}
            </div>
            <div className="w-1/2 h-full flex items-center border-l-px border-l-gray-borders">
              <button
                onClick={handlePrevPage}
                className={`flex w-1/2 h-full justify-center items-center px-4 py-2 ${
                  currentPage === 1 ? 'text-gray-light cursor-not-allowed' : 'text-gray-dark hover:text-orange'
                }`}
                disabled={currentPage === 1}
              >
                <LiaAngleLeftSolid className={"w-30 h-30 text-gray-dark"} />
              </button>
              <button
                onClick={handleNextPage}
                className={`flex w-1/2 h-full justify-center items-center px-4 py-2 border-l-px border-l-gray-borders ${
                  currentPage === totalPages ? 'text-gray-light cursor-not-allowed' : 'text-gray-dark hover:text-orange'
                }`}
                disabled={currentPage === totalPages}
              >
                <LiaAngleRightSolid className={"w-30 h-30 text-gray-dark"} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-start gap-30">
        {carList && (
          carList.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        )}
      </div>
    </div>
  );
};

export default CarList;
