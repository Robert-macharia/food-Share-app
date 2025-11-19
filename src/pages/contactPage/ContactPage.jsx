import React from "react";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#f8faf8] flex flex-col items-center py-12 px-4 sm:px-8 md:px-16">
            {/* Header Section */}

            <div className="text-center mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                    We’re here to help
                </h1>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
                    Have a question, feedback, or need support? Fill out the form below or
                    reach out to us directly.
                </p>
            </div>

            {/* Main Container */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-6">
                        Send us a Message
                    </h2>

                    <form className="space-y-4">
                        {/* Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input w-full rounded-xl text-sm text-gray-700 bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                            />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="input w-full rounded-xl text-sm text-gray-700 bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                            />
                        </div>

                        {/* Subject */}
                        <select className="select w-full rounded-xl text-sm text-gray-700 bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500">
                            <option disabled selected>
                                Select a subject
                            </option>
                            <option>General Inquiry</option>
                            <option>Technical Support</option>
                            <option>Feedback</option>
                            <option>Partnership</option>
                        </select>

                        {/* Message */}
                        <textarea
                            placeholder="Write your message here..."
                            className="textarea w-full h-32 rounded-xl text-sm text-gray-700 bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                        ></textarea>

                        {/* Send Button */}
                        <button
                            type="submit"
                            className="btn btn-success w-full rounded-full text-white font-medium hover:brightness-95 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info & FAQ */}
                <div className="flex flex-col gap-6">
                    {/* Other Ways to Reach Us */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Other Ways to Reach Us
                        </h2>

                        <ul className="space-y-4 text-sm text-gray-700">
                            <li className="flex items-start gap-3">
                                <FiMail className="text-green-600 text-lg mt-0.5" />
                                <div>
                                    <p className="font-medium text-gray-800">Email</p>
                                    <p>support@foodshare.com</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <FiPhone className="text-green-600 text-lg mt-0.5" />
                                <div>
                                    <p className="font-medium text-gray-800">Phone</p>
                                    <p>+1 (234) 567-890</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <FiMapPin className="text-green-600 text-lg mt-0.5" />
                                <div>
                                    <p className="font-medium text-gray-800">Address</p>
                                    <p>123 Green Street, Foodville, FS 45678</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-green-100 rounded-2xl p-6 sm:p-8 text-left">
                        <h3 className="text-gray-900 font-semibold mb-2">
                            Looking for a quick answer?
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Many common questions are answered on our FAQ page.
                        </p>
                        <button className="text-green-700 font-medium flex items-center gap-1 hover:underline">
                            Check our FAQ page <FiArrowRight className="text-green-700" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
