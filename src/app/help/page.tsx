import React from "react";

const HelpPage = () => {
  const faqs = [
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, go to the login page and click on 'Forgot Password.' Follow the instructions to reset your password.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by visiting the 'Orders' section in your account dashboard or using the tracking link sent to your email.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via the contact form below or email us at support@example.com.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Help & Support</h1>
          <p className="text-lg text-gray-600 mt-4">
            Need assistance? Explore our FAQs or contact our support team.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Contact Support
          </h2>
          <form
            action="#"
            method="POST"
            className="space-y-6"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 p-3 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-3 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 p-3 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
