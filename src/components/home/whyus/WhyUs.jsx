const WhyUs = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-wider text-white uppercase">
            Why Us
          </h2>
          <p className="mt-2 text-2xl leading-8 tracking-tight text-white sm:text-4xl">
            Your Trusted Travel Management Partner
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white mx-auto">
            We offer exceptional travel experiences with tailored services to
            meet your unique needs.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12">
            <div className="text-center">
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white mx-auto">
                  {/* Expertise Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 11.3L6.7 9 5.3 10.4 9 14.1 18.7 4.4 17.3 3z" />
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                  </svg>
                </div>
                <p className="mt-4 text-lg leading-6 font-medium text-white">
                  Expertise
                </p>
              </dt>
              <dd className="mt-2 text-base text-white">
                Our team of travel experts are highly experienced in providing
                top-notch travel solutions.
              </dd>
            </div>

            <div className="text-center">
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md  text-white mx-auto">
                  {/* Reliability Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 22s8-4.4 8-10V5.7L12 2 4 5.7V12c0 5.6 8 10 8 10z"></path>
                    <polyline points="12 12 15 15 22 8"></polyline>
                  </svg>
                </div>
                <p className="mt-4 text-lg leading-6 font-medium text-white">
                  Reliability
                </p>
              </dt>
              <dd className="mt-2 text-base text-white">
                You can count on us for reliable and efficient travel management
                services.
              </dd>
            </div>

            <div className="text-center">
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white mx-auto">
                  {/* Customization Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15c-.1.2-.2.4-.3.6l1.6 1.6-1.4 1.4-1.6-1.6c-.2.1-.4.2-.6.3l-.3 2.2h-2v-2.2c-.2 0-.4-.1-.6-.2L12 19.8l-1.4-1.4 1.6-1.6c-.1-.2-.2-.4-.2-.6H9v-2h2.2c.1-.2.2-.4.3-.6L9.8 12l1.4-1.4 1.6 1.6c.2-.1.4-.2.6-.3V9h2v2.2c.2.1.4.2.6.3l1.6-1.6L19.4 12l-1.6 1.6c.1.2.2.4.2.6H19v2h-2.2c-.1.2-.2.4-.3.6l1.6 1.6L19.4 15z"></path>
                  </svg>
                </div>
                <p className="mt-4 text-lg leading-6 font-medium text-white">
                  Customization
                </p>
              </dt>
              <dd className="mt-2 text-base text-white">
                We offer personalized travel solutions tailored to your
                preferences and needs.
              </dd>
            </div>

            <div className="text-center">
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md  text-white mx-auto">
                  {/* Customer Service Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 12L2 19l4 4 7-7"></path>
                    <path d="M22 2s-5 1-7 1-7-1-7-1v11l3 3-3 4s0-6 7-6 7 6 7 6l-3-4 3-3z"></path>
                  </svg>
                </div>
                <p className="mt-4 text-lg leading-6 font-medium text-white">
                  Customer Service
                </p>
              </dt>
              <dd className="mt-2 text-base text-white">
                Our customer service is available 24/7 to assist you with any
                travel-related queries.
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
