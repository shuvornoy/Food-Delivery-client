import React from "react";

const Contact = () => {
  return (
    <section
      className=" py-16 text-center"
      style={{ backgroundColor: "rgb(112 123 183)" }}
    >
      <h2 className="text-5xl text-white font-bold mb-2">Contact Us</h2>

      <form className="w-full lg:w-1/2 md:w-1/2 mx-auto p-5">
        <div className="mb-6">
          <input
            type="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="subject"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Subject"
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="btn btn-primary  mt-3">Contact</button>
      </form>
    </section>
  );
};

export default Contact;
