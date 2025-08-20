import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaQrcode, FaPhoneAlt, FaUniversity, FaGoogleWallet } from "react-icons/fa";

export default function FeePayment() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
      </div>

      <section className="py-12 bg-[#ffd5af] px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Fee Payment Options
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* QR Code */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaQrcode className="text-5xl text-[#FF9B00] mb-4" />
            <h3 className="text-xl font-semibold mb-3">QR Code</h3>
            <p className="text-gray-600">
              A quick scan of a unique QR code linked to our account allows for
              instant transfers.
            </p>
            <img
              src="/images/qr.png"
              alt="QR Code"
              className="mt-4 w-40 h-40 object-contain border p-2 rounded-lg"
            />
          </div>

          {/* Phone Number */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaPhoneAlt className="text-5xl text-[#FF9B00] mb-4" />
            <h3 className="text-xl font-semibold mb-3">Phone Number</h3>
            <p className="text-gray-600">
              Direct payments can be made to our registered mobile number.
            </p>
            <p className="mt-3 text-lg font-bold text-gray-800">
              +91 9876543210
            </p>
          </div>

          {/* UPI ID */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaGoogleWallet className="text-5xl text-[#FF9B00] mb-4" />
            <h3 className="text-xl font-semibold mb-3">UPI ID</h3>
            <p className="text-gray-600">
              Use our Unified Payments Interface (UPI) ID for secure transfers.
            </p>
            <p className="mt-3 text-lg font-bold text-gray-800">
              school@upi
            </p>
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaUniversity className="text-5xl text-[#FF9B00] mb-4" />
            <h3 className="text-xl font-semibold mb-3">Bank Details</h3>
            <p className="text-gray-600">
              Transfer using our account number, IFSC code, and other details.
            </p>
            <div className="mt-3 text-gray-700 font-medium text-left">
              <p>Account No: <span className="font-bold">1234567890</span></p>
              <p>IFSC: <span className="font-bold">ABCD0123456</span></p>
              <p>Bank: <span className="font-bold">XYZ Bank</span></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
