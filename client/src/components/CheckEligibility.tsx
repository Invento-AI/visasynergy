import { Button } from "./ui/button";
import Animation from "./Animation";
const CheckEligibility = () => {
  return (
    <div className="bg-[#51868e] text-white px-6 md:px-10 rounded-lg mt-12 text-center font-asap py-10 md:py-0">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
        <div className="flex-[2] flex justify-center">
          <Animation />
        </div>

        <div className="flex-[3] flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
          <h3 className="text-3xl md:text-5xl">
            Check Your Eligibility Instantly!
          </h3>
          <p className="mt-4 text-lg md:text-2xl w-full md:w-3/4 font-albert">
            Answer a few quick questions and discover your eligibility in
            seconds – no hassle, no waiting!
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 w-full">
            <Button className="bg-white text-lg md:text-xl text-[#51868e] border-2 hover:bg-[#51868e] hover:text-white hover:border-2 hover:border-white transition duration-700 px-6 py-3">
              Calculate My Eligibility
            </Button>
            <Button className="bg-white text-lg md:text-xl text-[#51868e] border-2 hover:bg-[#51868e] hover:text-white hover:border-2 hover:border-white transition duration-700 px-6 py-3">
              Need Help? Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEligibility;
