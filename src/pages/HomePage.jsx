import { DiamondCollection, CollectionSlider, Navbar } from "components";
export const HomePage = () => {
  return (
    <div className="home-container w-full h-screen flex items-center flex-row max-md:p-3">
      <div className="grid w-full">
        <div className="row-span-3">
          <DiamondCollection />
        </div>

        <div className="row-span-2">
          <CollectionSlider />
        </div>
        <div className="md:hidden mt-4 row-span-1">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
