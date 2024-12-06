import React from "react";

export default function ContactForm() {
  return (
    <div className=" bg-blue-100">
      <div className="border">
        <form className="mt-20">
          <div className="">
            <h1 className="text-6xl "> Get the Support you Need </h1>
            <p className="text-xl mt-10">
              Learn how our managed services can help your business do more in
              less time and for less money.
            </p>

            <div className="mt-12 space-x-10">
              <input
                type="text"
                placeholder="First name"
                className="border rounded-lg border-black px-32 py-5 font-semibold"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border rounded-lg border-black px-32 py-5 font-semibold"
              />
            </div>

            <div className="space-x-10 mt-5">
              <input
                type="text"
                placeholder="Last name"
                className="border rounded-lg border-black px-32 py-5 font-semibold"
              />
              <input
                type="text"
                placeholder="Email"
                className="border rounded-lg border-black px-32 py-5 font-semibold"
              />
            </div>
            <div className="space-x-10 mt-5">
              <input
                type="text"
                placeholder="Phone"
                className="border rounded-lg border-black px-32 py-5 font-semibold"
              />
              <input
                type="text"
                placeholder="Company"
                className="border rounded-lg border-black px-32 py-5 font-semibold"
              />
            </div>
            <div className="space-x-10 mt-5">
              <input
                type="text"
                placeholder="ZIP / Postal code"
                className="border rounded-lg border-black px-32 py-5 font-semibold"
              />
              <input
                type="text"
                placeholder="# of Employees"
                className="border rounded-lg border-black px-32 py-5 mb-10 font-semibold"
              />
            </div>
            <div>
              <textarea className="border rounded-lg border-black h-40 w-[940px] mb-20 " />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
