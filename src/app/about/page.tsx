import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* About Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            Discover who we are, our story, our team, and our values.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Our mission is to provide exceptional service and quality products that improve the
              lives of our customers. Through innovation and dedication, we strive to make a
              positive impact on every person we touch.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>Customer-Centric: Always putting the customer first.</li>
              <li>Innovation: Continuously improving and evolving our offerings.</li>
              <li>Sustainability: Creating a positive impact on the environment and society.</li>
              <li>Integrity: Operating with honesty and transparency.</li>
            </ul>
          </div>
        </div>

        {/* Our Story */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Story</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Founded in 2010, we began with a simple idea: to create high-quality, affordable
            products that make everyday life a little easier. Over the years, we've grown into a
            company that is trusted by customers around the world, thanks to our commitment to
            quality and exceptional customer service.
          </p>
        </div>

        {/* Meet The Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/team-member1.jpg"
                alt="John Doe"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                width={150}
                height={200}
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <Image
              width={100}
              height={100}
                src="/team-member2.jpg"
                alt="Jane Smith"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
            <div className="text-center">
              <img
                src="/team-member3.jpg"
                alt="Tom Lee"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Tom Lee</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 text-white py-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-lg mb-6">
            Are you passionate about making a difference? Join our innovative team and help us
            create the future.
          </p>
          <Link
            href="/careers"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all"
          >
            Explore Careers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
