import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCarById, getCarMedia } from '@/libs/api';
import CarMedia from '@/components/CarMedia';
import PageLayout from '@/layout/page-layout';

interface CarDetail {
  id: string;
  imageUrl: string;
  carName: string;
  year: number;
  city: string;
  state: string;
  marketplacePrice: number;
  exteriorColor: string;
  interiorColor: string;
  engineType: string;
  ccMeasurement: number;
  country: string;
  createdAt: string;
  depositReceived: boolean;
  financingSettings: {
    loanCalculator: {
      [key: string]: any;
    };
  };
  fuelType: string;
  gradeScore: number;
  hasFinancing: boolean;
  hasThreeDImage: boolean;
  hasWarranty: boolean;
  inspectorDetails: {
    inspectedMakes: Array<string>;
    inspectorFullName: string;
    totalInspection: number;
    profileImageUrl: string;
  };
  installment: number;
  insured: boolean;
  isFeatured: boolean;
  loanValue: number;
  marketplaceOldPrice: number;
  marketplaceVisible: boolean;
  marketplaceVisibleDate: string;
  mileage: number;
  mileageUnit: string;
  model: {
    modelFeatures: Array<string>;
    id: number;
    name: string;
    imageUrl: string;
    wheelType: string;
    [key: string]: any;
  };
  ownerType: string;
  sellingCondition: string;
  sold: boolean;
  transmission: string;
  updatedAt: string;
  vin: string;
  websiteUrl: string;
  [key: string]: any;
}

const CarDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [carDetail, setCarDetail] = useState<CarDetail | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch car details by carId
      getCarById(id as string)
        .then((data) => setCarDetail(data))
        .catch((error) => console.error('Error fetching car details:', error));
    }
  }, [id]);

  if (!carDetail) {
    // You can add a loading spinner or message here
    return <div>Loading...</div>;
  }

  return (
    <PageLayout className="w-full bg-white">
      <section className="w-full bg-blue-light pt-16 pb-32">
        <div className="container mx-auto p-4">
          <h1 className="text-black-site text-3xl font-semibold mb-4">{carDetail.carName}</h1>
        </div>
      </section>
      <section className="w-full mt-[-30px] lg:mt-[-100px]">
        <div className="container mx-auto p-4">
          <div className="bg-white flex flex-wrap md:flex-nowrap gap-0 rounded-sm shadow-lg">
            <div className="w-full md:w-2/3 p-md">
              <CarMedia carId={id as string} />
            </div>
            <div className="w-full md:w-1/3 text-black-site flex flex-col gap-md border-l-px border-l-gray-borders py-30 px-md">
              <h1 className="text-black-site text-18 font-normal mb-4">{ carDetail.sellingCondition.charAt(0).toUpperCase() + carDetail.sellingCondition.slice(1)} {"Used"}</h1>
              <p className="mt-2">Year: {carDetail.year}</p>
              <p>Location: {carDetail.city}, {carDetail.state}</p>
              <p>Price: ${carDetail.marketplacePrice.toLocaleString()}</p>

              <button className="mt-4 bg-red text-white px-4 py-2 h-6xl rounded-5xs shadow-lg hover:bg-blue-600">
                Buy Now
              </button>
              <button className="mt-4 bg-blue text-white px-4 py-2 h-6xl rounded-5xs shadow-lg hover:bg-blue-600">
                Contact for Inspection
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={"w-full"}>
        <div className="container mx-auto p-4 text-black-site">
          <div className="mt-8">
            <h2 className="text-3xl text-black-site font-bold">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="text-xl text-blue font-semibold">Car Name</h3>
                <p>{carDetail.carName}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Model</h3>
                <p>{carDetail.model.name}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Year</h3>
                <p>{carDetail.year}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Exterior Color</h3>
                <p>{carDetail.exteriorColor}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Interior Color</h3>
                <p>{carDetail.interiorColor}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Engine Type</h3>
                <p>{carDetail.engineType}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">CC Measurement</h3>
                <p>{carDetail.ccMeasurement}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Country</h3>
                <p>{carDetail.country}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Created At</h3>
                <p>{new Date(carDetail.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Deposit Received</h3>
                <p>{carDetail.depositReceived ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Financing Settings</h3>
                {/* Add details for financing settings */}
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Fuel Type</h3>
                <p>{carDetail.fuelType}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Grade Score</h3>
                <p>{carDetail.gradeScore}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Has Financing</h3>
                <p>{carDetail.hasFinancing ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Has Three-D Image</h3>
                <p>{carDetail.hasThreeDImage ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Has Warranty</h3>
                <p>{carDetail.hasWarranty ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Inspector Details</h3>
                {/* Add details for inspector details */}
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Installment</h3>
                <p>{carDetail.installment}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Insured</h3>
                <p>{carDetail.insured ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Is Featured</h3>
                <p>{carDetail.isFeatured ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Loan Value</h3>
                <p>{carDetail.loanValue}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Marketplace Old Price</h3>
                <p>${carDetail.marketplaceOldPrice.toLocaleString()}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Marketplace Visible</h3>
                <p>{carDetail.marketplaceVisible ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Marketplace Visible Date</h3>
                <p>{new Date(carDetail.marketplaceVisibleDate).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Mileage</h3>
                <p>{carDetail.mileage} {carDetail.mileageUnit}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Owner Type</h3>
                <p>{carDetail.ownerType}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Selling Condition</h3>
                <p>{carDetail.sellingCondition}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Sold</h3>
                <p>{carDetail.sold ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Transmission</h3>
                <p>{carDetail.transmission}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Updated At</h3>
                <p>{new Date(carDetail.updatedAt).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">VIN</h3>
                <p>{carDetail.vin}</p>
              </div>
              <div>
                <h3 className="text-xl text-blue font-semibold">Website URL</h3>
                <p>{carDetail.websiteUrl}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CarDetailPage;
