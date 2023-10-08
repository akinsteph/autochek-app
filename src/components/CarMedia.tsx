import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaVideo } from 'react-icons/fa';
import { getCarMedia } from '@/libs/api';

interface CarMedia {
  id: number;
  name: string;
  url: string;
  createdAt: string;
  type: 'image' | 'video'; 
}

const CarMedia = ({ carId } : any) => {
  const [mediaList, setMediaList] = useState<CarMedia[]>([]);
  const [activeMedia, setActiveMedia] = useState<CarMedia | null>(null);
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch car media data using the getCarMedia function
    const fetchCarMedia = async () => {
      try {
        const mediaData = await getCarMedia(carId);
        setMediaList(mediaData.carMediaList);

        // Set the initial active media to the first item in mediaList
        if (mediaData.carMediaList.length > 0) {
          setActiveMedia(mediaData.carMediaList[0]);
        }
      } catch (error) {
        console.error('Error fetching car media:', error);
      }
    };

    fetchCarMedia();
  }, [carId]);

  const handleMediaClick = (media: CarMedia) => {
    // Update the active media when a thumbnail is clicked
    setActiveMedia(media);
  };


  return (
    <div className="flex w-full flex-col">
      <div className="w-full p-4">
        {/* <Image src={activeMedia.url} alt="Car Media" width={800} height={600} /> */}
        {activeMedia ? (
          activeMedia.type === 'image' ? (
            <Image
            loading={"lazy"}
            src={activeMedia.url}
            alt={"Car Media"}
            className={"w-full h-[600px] object-cover rounded-5xs shadow-lg"}
          />
          ) : (
            <video controls width={800} height={600} className={"w-full"}>
              <source src={activeMedia.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        ) : (
          <div className="bg-gray-200 p-4 text-center">
            Select a media to view
          </div>
        )}
      </div>
      <div className="w-full p-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
          {mediaList.map((media) => (
            <div
              key={media.id}
              className="cursor-pointer"
              onClick={() => handleMediaClick(media)}
            >
              {media.type === 'image' ? (                
                <Image
                loading={"lazy"}
                  src={media.url}
                  alt={"Car Media"}
                  className={"w-full h-[75px] object-cover rounded-5xs shadow-lg hover:transform"}
                />
              ) : (
                <div className="w-20 h-20 flex items-center justify-center bg-gray-200">
                  <FaVideo className="text-2xl text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarMedia;
