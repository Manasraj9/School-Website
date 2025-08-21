import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AdmissionGuidelines(){
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

        {/* Welcome Paragraph */}
        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
          Welcome to the <span className="font-semibold">“NeevBaalpan Ki”</span>{" "}
          family! We are delighted that you are considering our play school for
          your child's first steps in their educational journey. We understand
          that choosing the right environment is a significant decision, and we
          are here to guide you through a smooth and transparent admission
          process.
        </p>

        {/* Admission Process */}
        <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 border-2 border-[#FE7743]">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Our Admission Process
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
            <li>
              <span className="font-medium">Enquire and Visit:</span> We
              encourage all prospective parents to book a school tour. This
              allows you to experience our vibrant classrooms, meet our
              educators, and ask any questions you may have. To schedule a
              visit, please contact us at{" "}
              <span className="font-semibold text-blue-600">
                9142436076
              </span>
              .
            </li>
            <li>
              <span className="font-medium">Collect the Application Form:</span>{" "}
              The application form can be downloaded from our website or
              collected in person from our school office.
            </li>
            <li>
              <span className="font-medium">Submit the Form and Documents:</span>{" "}
              Please complete the application form and submit it along with the
              required documents to the school office.
            </li>
            <li>
              <span className="font-medium">Interaction Session:</span> After
              reviewing the applications, we will schedule a brief and informal
              interaction with you and your child. This is a chance for us to
              get to know your child and for them to get comfortable in the
              school environment.
            </li>
            <li>
              <span className="font-medium">Confirmation of Admission:</span>{" "}
              Following the interaction, we will notify you of your child's
              admission status. Once confirmed, you will be guided on the next
              steps for fee payment and other formalities.
            </li>
          </ul>
        </section>

        {/* Eligibility Criteria */}
        <section className="bg-white shadow-lg rounded-2xl p-6 border-2 border-[#FE7743]">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Eligibility Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-medium">Playgroup</p>
              <p className="text-gray-600">Children who are 2.5 - 3.5 years old</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-medium">Nursery</p>
              <p className="text-gray-600">Children who are 3.5 - 4.5 years old</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-medium">NeevJunior (LKG)</p>
              <p className="text-gray-600">Children who are 4.5 - 5.5 years old</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-medium">NeevSenior (UKG)</p>
              <p className="text-gray-600">Children who are 5.5 - 6.5 years old</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

