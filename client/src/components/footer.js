import Container from "./Container";

const Footer = () => {
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
        <div>
          <span className="font-semibold text-lg">
            Supported payment methods
          </span>
        </div>
      </Container>

      <div className="ruler my-12"></div>

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
