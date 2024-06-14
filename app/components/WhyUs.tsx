export default function WhyUs() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true">
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Why Choose Us?</h2>

            <ul className="text-left">
              <li className="text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                <div className="font-bold leading-snug tracking-tight mb-1">
                  Expertise and Experience
                </div>{" "}
                <p className="text-gray-600">
                  With years of experience in web development, we have honed our
                  skills to offer you the best in class services.
                </p>
              </li>
              <li className="text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                <div className="font-bold leading-snug tracking-tight mb-1">
                  Tailored Solutions
                </div>{" "}
                <p className="text-gray-600">
                  We understand that every business is unique. Our solutions are
                  customized to meet your specific needs.
                </p>
              </li>
              <li className="text-lg  p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                <div className="font-bold leading-snug tracking-tight mb-1">
                  Responsive Design{" "}
                </div>{" "}
                <p className="text-gray-600">
                  Our websites are designed to provide an optimal viewing
                  experience across all devices, ensuring your site looks great
                  and functions perfectly on desktop, tablet, and mobile.
                </p>
              </li>
              <li className="text-lg  p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                <div className="font-bold leading-snug tracking-tight mb-1">
                  SEO-Friendly{" "}
                </div>{" "}
                <p className="text-gray-600">
                  Our development process includes SEO best practices to ensure
                  your site ranks well in search engine results, driving more
                  traffic to your business.
                </p>
              </li>
              <li className="text-lg  p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                <div className="font-bold leading-snug tracking-tight mb-1">
                  Technology{" "}
                </div>{" "}
                <p className="text-gray-600">
                  We stay updated with the latest trends and technologies to
                  provide you with innovative and future-proof web solutions.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="300">
            <div>
              <a
                className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="#0">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
