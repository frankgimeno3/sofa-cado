import Image from 'next/image'

export const CityPreview = () => {
    return (
        <><div className="bg-amber-400">
            <div className="h-20vh max-w-7xl ml-20 mt-20 ">
                <h3 className="text-gray-800">City Preview </h3>
            </div>
        </div>
        <div className="h-screen flex items-center justify-center">
        <div className="flex items-center justify-center">
          <Image src="/img/FrankgualadaMap.png" alt="FrankgualadaMap" width={1000} height={700} />
        </div>
      </div>
        </>
        );
      };
      