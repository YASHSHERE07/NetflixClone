import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black border-4 border-gray-100 border-width">
        <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div className="max-w-sm">
            <div className="mb-6 flex h-12 items-center space-x-2">
              <span className="text-xl  text-white">
                Questions? Call 000-800-919-1694{" "}
              </span>
            </div>
            <div className="text-gray-300">
              <ul className="space-y-2 underline">
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
            <div className="text-gray-300">
              <ul className="space-y-2 underline">
                <li>Help center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>

                <li>Legal Notices</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
            <nav aria-label="Footer Navigation" className="text-gray-500">
              <div className="text-gray-300">
                <ul className="space-y-2 underline">
                  <li>Account</li>
                  <li>Ways to watch</li>
                  <li>Corporate Information</li>

                  <li>Only on Netflix</li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="mt-4 mb-2 font-medium xl:mb-4">
            <div className="text-gray-300">
              <ul className="my-10 space-y-2 underline">
                <li>Media Center</li>
                <li>Term of use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
