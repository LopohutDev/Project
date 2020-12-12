import React from "react";

function ContactUs() {
  return (
    <div className="">
      {/* empty div */}
      <div className="w-screen h-24 bg-green-500"></div>
      <div className="flex justify-between max-w-3xl mx-auto mt-32 text-xl text-center">
        <div className="w-1/3 m-5">
          <h1 className="text-3xl text-gray-600">Facebook</h1>
          <p className="text-gray-400">
            https://www.facebook.com/ACsFlavorites/
          </p>
        </div>
        <div className="w-1/3 m-5">
          <h1 className="text-3xl text-gray-600">Email</h1>
          <p className="text-gray-400">Acsflavorites@gmail.com</p>
        </div>
        <div className="w-1/3 m-5">
          <h1 className="text-3xl text-gray-600">Contact No.</h1>
          <p className="text-gray-400">(0956) 581 5723</p>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-10 text-center">
        <h1 className="text-6xl">ContactUs</h1>
        <p className="text-xl">
          Please fill out the form to send me a message. or you can contact me
          using the details above.
        </p>
      </div>
      <div>
        <div className="max-w-6xl mx-auto mt-20">
          <div className="flex justify-between h-12 text-black">
            <input
              className="w-1/3 p-3 mr-4 bg-gray-200 border border-black rounded-2xl"
              placeholder="Name"
            />
            <input
              className="w-1/3 p-3 mx-4 bg-gray-200 border border-black rounded-2xl"
              placeholder="Email Address"
            />
            <input
              className="w-1/3 p-3 ml-4 bg-gray-200 border border-black rounded-2xl"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              placeholder="Subject"
              className="w-full p-3 bg-gray-200 border border-black mt-7 rounded-2xl"
            />
          </div>
          <div>
            <textarea
              id="w3review"
              name="w3review"
              rows="15"
              cols="185"
              className="w-full p-3 mb-10 text-gray-400 bg-gray-200 border border-black mt-7 rounded-2xl"
            >
              Message
            </textarea>
          </div>
          <div>
            <input
              type="Submit"
              className="w-64 h-10 text-xl bg-gray-300 border border-black rounded-full hover:bg-gray-500 hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
