import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4E878C] text-white py-10 font-albert w-full">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 w-full text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo-white.jpg"
            alt="Visa Synergy"
            height={100}
            width={100}
            className="w-28 md:w-36 mb-4 rounded-lg"
          />
          <p className="text-sm max-w-xs md:max-w-sm">
            At Visa Synergy, We Simplify Your Journey and Open Doors to New
            Opportunities.
          </p>
          <div className="flex space-x-4 mt-4">
            {[
              { href: "#", Icon: FaWhatsapp },
              { href: "#", Icon: FaInstagram },
              { href: "#", Icon: FaLinkedin },
              { href: "#", Icon: FaFacebook },
            ].map(({ href, Icon }, index) => (
              <Link
                key={index}
                href={href}
                className="text-white text-xl hover:text-gray-300"
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full">
          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 font-asap">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm md:text-base underline">
              {[
                "About Us",
                "Eligibility Calculator",
                "Blog & Resources",
                "Contact Us",
                "Dashboard",
                "News",
              ].map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 font-asap">
              Visa Quick Links
            </h3>
            <ul className="space-y-3 text-sm md:text-base underline">
              {[
                "USA Visa",
                "Canada Visa",
                "Australia Visa",
                "Europe Visa",
                "New Zealand Visa",
                "UK Visa",
              ].map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 w-full flex flex-col items-center md:items-start mt-10 md:mt-0">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 font-asap">
              Contact Details
            </h3>
            <p className="text-sm md:text-base">
              123 Global Avenue, Suite 456, New York, NY 10001, USA
            </p>
            <p className="text-sm md:text-base mt-2">+1 (555) 123-4567</p>
            <p className="text-sm md:text-base mt-2">info@visasynergy.com</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white/50 mt-8 pt-4 text-center">
        <p className="text-sm">visasynergy.in © 2025, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
