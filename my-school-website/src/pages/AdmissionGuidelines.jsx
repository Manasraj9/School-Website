import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdmissionGuidelines = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffd5af]">
      {/* Navbar */}
      <Navbar />
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
      </div>

      {/* Page Content */}
      <main className="flex-1 px-4 md:px-12 lg:px-24 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
          Admission Guidelines
        </h1>

        <p className="text-lg text-gray-700 text-center mb-8">
          Welcome to the <span className="font-semibold">“NeevBaalpan Ki”</span>{" "}
          family! We are delighted that you are considering our play school for
          your child's first steps in their educational journey.
        </p>

        {/* Admission Process */}
        <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 border-2 border-[#FE7743]">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Our Admission Process
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <span className="font-medium">Enquire and Visit:</span> Book a
              school tour to explore classrooms, meet educators, and ask
              questions. Contact us at{" "}
              <span className="font-semibold text-blue-600">
                9142436076
              </span>
              .
            </li>
            <li>
              <span className="font-medium">Collect the Application Form:</span>{" "}
              Download it from our website or collect from the school office.
            </li>
            <li>
              <span className="font-medium">Submit the Form and Documents:</span>{" "}
              Complete the form and submit along with required documents.
            </li>
            <li>
              <span className="font-medium">Interaction Session:</span> An
              informal session with you and your child to help them feel
              comfortable.
            </li>
            <li>
              <span className="font-medium">Confirmation of Admission:</span> You
              will be notified of your child’s admission status and guided on
              next steps.
            </li>
          </ul>
        </section>

        {/* Eligibility */}
        <section className="bg-white shadow-lg rounded-2xl p-6 border-2 border-[#FE7743]">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Eligibility Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-medium">Playgroup</p>
              <p className="text-gray-600">2.5 - 3.5 years old</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-medium">Nursery</p>
              <p className="text-gray-600">3.5 - 4.5 years old</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-medium">NeevJunior (LKG)</p>
              <p className="text-gray-600">4.5 - 5.5 years old</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-medium">NeevSenior (UKG)</p>
              <p className="text-gray-600">5.5 - 6.5 years old</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdmissionGuidelines;

