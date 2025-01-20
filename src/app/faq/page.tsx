import React from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any product within 30 days of purchase. Please ensure the product is in its original condition.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping fees and delivery times may vary based on location.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact us through the 'Contact Us' page or email us directly at support@example.com.",
    },
    {
      question: "Are your products sustainable?",
      answer:
        "Yes, we are committed to sustainability and ensure our products are eco-friendly and responsibly sourced.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 mt-4">
            Find answers to common questions below.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
