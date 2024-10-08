const PricingPage = () => {
  return (
    <section className=" leading-4 text-gray-900 bg-white sm:py-4 md:py-4">
      <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
        <div className="flex flex-col items-center leading-4 text-center text-gray-900 border-0 border-gray-200">
          <h2
            id="pricing"
            className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl"
          >
            Simple, Transparent Pricing
          </h2>
          <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"></p>
        </div>

        <div
          id="pricing"
          className="grid grid-cols-1 gap-4 mt-1 leading-1 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-0 md:gap-0 lg:grid-cols-3"
        >
          {/* <!-- Price 1 --> */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-4 md:p-8">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
              Starter
            </h3>
            <div className="flex items-end mt-6 leading-4 text-gray-900 border-0 border-gray-200">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $0
              </p>
              <p
                className="box-border m-0 border-solid"
                //style="border-image: initial;"
              >
                / month
              </p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Free call
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Free message
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Customer Service 24h
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
            >
              Start Now
            </a>
          </div>
          {/* <!-- Price 2 --> */}
          <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-10">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
              Company
            </h3>
            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $20
              </p>
              <p
                className="box-border m-0 border-solid"
                // style="border-image: initial;"
              >
                / month
              </p>
            </div>
            <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
              <li className=" inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Unlimited job post
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Free CV details
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Direct call or message to job seeker
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Customer service 24h
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
            >
              Start Now
            </a>
          </div>
          {/* <!-- Price 3 --> */}
          <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-4 md:p-8">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
              Job seeker
            </h3>
            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
              <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                $49
              </p>
              <p
                className="box-border m-0 border-solid"
                // style="border-image: initial;"
              >
                / month
              </p>
            </div>

            <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                CV upload
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Direct notification by restaurant owner
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Job notification according to your preference
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Customer Service 24h
              </li>

              {/* <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Google Analytics
              </li>

              <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                <svg
                  className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Email Integration
              </li> */}
            </ul>
            <a
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingPage;
