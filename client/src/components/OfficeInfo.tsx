import Image from "next/image";
import Link from "next/link";

const OfficeInfo = () => {
  return (
    <div className="text-left">
      <h2
        className="text-4xl font-bold text-[#3B4F84] w-full md:w-[630px]"
        style={{ fontFamily: "Asap Condensed" }}
      >
        Visit Our Office – Let’s Meet in Person!
      </h2>
      <p
        className="text-lg text-[#404040] mt-2"
        style={{ fontFamily: "albert sans" }}
      >
        Visit us at our office for a face-to-face consultation.
      </p>

      <div className="mt-6 font-albert">
        <h3 className="text-xl font-semibold font-roboto">
          Our Office Location
        </h3>
        <div className="mt-4 flex items-start">
          <Image
            className="mr-2"
            src="/location.png"
            alt="location"
            width={24}
            height={24}
          />
          <div>
            <p className="text-lg font-semibold">
              Visa Synergy Office – New York, USA
            </p>
            <p className="text-[#404040] text-sm">
              Visa Synergy Consultancy
              <br />
              123 Global Avenue, Suite 456,
              <br />
              Midtown Manhattan, Near Times Square,
              <br />
              New York, NY 10001, USA
            </p>
          </div>
        </div>

        <div className="my-4 flex items-start">
          <Image
            className="mr-2"
            src="/time.png"
            alt="business hours"
            width={24}
            height={24}
          />
          <p className="text-lg font-semibold">
            Business Hours:{" "}
            <span className="ml-2">Monday – Friday | 9 AM – 6 PM</span>
          </p>
        </div>
        <Link href="https://www.google.com/maps?q=Visa+Synergy" target="_blank">
          <div className="w-full text-center p-2 bg-[#51868e] text-white rounded-md hover:bg-white border-2 hover:text-[#51868e] transition duration-700 font-bold text-lg">
            Get Directions
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OfficeInfo;
