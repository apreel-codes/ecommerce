import Container from "./Container";
import Ruler from "./Ruler";

const Footer = () => {
  console.log(window.location.host);
  return (
    <footer className="mt-auto ">
      <Container className="flex flex-col gap-y-12 justify-between pt-4 md:flex-row">
        {/* quick links */}
        <div className="flex flex-col gap-y-6">
          <span className="font-semibold text-lg">Quick Links</span>
          <ul className="flex flex-col gap-y-2">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* about us */}
        <div className="flex flex-col gap-y-6">
          <span className="font-semibold text-lg ">About Us</span>
          <ul className="flex flex-col gap-y-2">
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* payment methods */}
        <div className="flex flex-col gap-y-6">
          <span className="font-semibold text-lg">
            Supported payment methods
          </span>
          <ul className="grid grid-cols-4 gap-3 max-w-[15rem]">
            <li>
              <img src="/images/visa.svg" alt="" className="max-w-[2.8rem]" />
            </li>
            <li>
              <img
                src="/images/mastercard.svg"
                alt=""
                className="max-w-[3.5rem]"
              />
            </li>
            <li>
              <img src="/images/verve.svg" alt="" className="max-w-[2.8rem]" />
            </li>
            <li>
              <img
                src="/images/paystack.svg"
                alt=""
                className="max-w-[2.8rem]"
              />
            </li>
            <li>
              <img src="/images/zenith.svg" alt="" className="max-w-[2.8rem]" />
            </li>
            <li>
              <img src="/images/access.svg" alt="" className="max-w-[2.8rem]" />
            </li>

            <li>
              <img src="/images/gtb.svg" alt="" className="max-w-[2.8rem]" />
            </li>
          </ul>
        </div>
      </Container>

      <Ruler className="my-12"></Ruler>

      <Container className="container">
        <div className="flex flex-col gap-y-2 mb-10">
          <span className="text-xs">Country/region</span>
          <span className="border-2 border-black max-w-[10rem] py-2 flex items-center justify-center">
            NGN &#8358; | Nigeria
          </span>
        </div>
        <ul className="flex gap-x-2 items-center mb-3">
          <li className="text-xs">&copy; 2023, PGF Prime</li>
          <li className="text-xs">&#183;</li>
          <li className="text-xs">Refund policy</li>
          <li className="text-xs">&#183;</li>
          <li className="text-xs">Privacy policy</li>
          <li className="text-xs">&#183;</li>
          <li className="text-xs">Terms of service</li>
          <li className="text-xs">&#183;</li>
          <li className="text-xs">Contact information</li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
