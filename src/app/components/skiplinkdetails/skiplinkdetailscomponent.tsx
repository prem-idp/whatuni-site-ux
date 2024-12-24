import React from "react";
import Link from "next/link";
import Pullquote from "../pull-quote/pull-quote";
import Ctabanner from "../cta-banner/cta-banner";
import Articleimage from "../article-image/article-image";

const Skiplinkdetails = () => {
  const skiplinkLabel = [
    "Heading skip link",
    "Heading skip link",
    "Heading skip link",
    "Heading skip link",
  ];
  const skiplinklabellisting = skiplinkLabel.map((skiplinkLabel, index) => (
    <li
      className={`border-s-[4px]  py-[10px] px-[16px] small font-inter font-normal ${
        index == 0
          ? "border-blue-400 text-blue-400"
          : "border-grey-300 text-grey300"
      }`}
      key={`${skiplinkLabel}-${index + 1}`}
    >
      <a href={`#skiplink-${index + 1}`}>
        {skiplinkLabel} {index + 1}
      </a>
    </li>
  ));
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-[20px]">
        <div className="min-w-[289px] flex flex-col lg:gap-[8px] max-w-[100%]">
          <h2 className="text-black para font-semibold font-inter">
            On this page
          </h2>
          <ul>{skiplinklabellisting}</ul>
        </div>
        <div className="w-full">
          <div id="skiplink-1">
            <section className="pb-[40px]">
              <Ctabanner />
            </section>
            <section className="pb-[16px]">
              <Articleimage />
            </section>
            <section></section>
            <section className="pb-[16px]">
              <Pullquote />
            </section>
            {/* Find out more  */}
            <section className="pb-[40px]">
              <div className="px-[20px] bg-grey-50 py-[16px] border-grey-500 border-l-4 flex flex-col gap-[8px]">
                <span className="x-small tracking-[1px] font-semibold grey300">
                  Find OUT MORE
                </span>
                <Link className="para text-blue-400" href="#">
                  Link text goes here
                </Link>
                <Link className="para text-blue-400" href="#">
                  Link text goes here
                </Link>
              </div>
            </section>
            {/* Find out more END */}
            {/* newsletter-forms */}
            <section>
              <div className="bg-blue-100 p-[24px] flex flex-col gap-[16px] rounded-[8px]">
                <div className="">
                  <div className="h4">Don't miss out!</div>
                  <span>
                    Receive a monthly newsletter packed with useful tips and
                    updates to help you find the right uni.
                  </span>
                </div>

                <div className="">
                  <form action="">
                    {/* input  */}
                    {/* <div className='flex flex-col lg:flex-row gap-[10px]'> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
                      <input
                        type="text"
                        required
                        placeholder="First name*"
                        className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Last name*"
                        className="form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email address*"
                        className="md:col-span-2 lg:col-span-1 form-control w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                      />
                    </div>
                    {/* radio box  */}
                    <div className="flex flex-col">
                      <label>When would you like to start?*</label>
                      <div className="flex gap-[18px]">
                        <div className="">
                          <input
                            type="radio"
                            name="newsletter-starting"
                            id="2025"
                          />
                          <label htmlFor="2025">2025</label>
                        </div>
                        <div className="">
                          <input
                            type="radio"
                            name="newsletter-starting"
                            id="2026"
                          />
                          <label htmlFor="2026">2026</label>
                        </div>
                        <div className="">
                          <input
                            type="radio"
                            name="newsletter-starting"
                            id="2027"
                          />
                          <label htmlFor="2027">2027</label>
                        </div>
                        <div className="">
                          <input
                            type="radio"
                            name="newsletter-starting"
                            id="2028"
                          />
                          <label htmlFor="2028">2028</label>
                        </div>
                      </div>
                    </div>
                    {/* terms and condition  */}
                    {/* <div className="">
                      <input type="checkbox" name="termandcondition" id="term-condition" />
                      <label htmlFor="term-condition">I confirm I’m over 13 and agree to the 
                        <Link href="#"> terms and conditions</Link> and
                        <Link href="#">privacy notice</Link>, and agree to become a member of the
                        <Link href="#">Whatuni community</Link>*</label>
                    </div> */}
                    <div>
                      <input type="text" />
                    </div>
                    <button className="btn btn-grey-400">
                      Get free newsletters
                      {/* <Image src="" /> */}
                    </button>
                  </form>
                </div>
                <div className=""></div>
                <div className=""></div>
              </div>
            </section>
            {/* newsletter-forms END */}
          </div>
          <div id="skiplink-2"></div>
          <div id="skiplink-3"></div>
          <div id="skiplink-4"></div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Skiplinkdetails;
