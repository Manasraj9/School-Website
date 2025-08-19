import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SchoolPrayer = () => {
  return (
    <div className="bg-[#ffd5af] min-h-screen flex flex-col">
      <Navbar />

      {/* Banner Image */}
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
      </div>
      {/* Banner / Heading */}
      <div className="py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          School Prayers
        </h1>
        <p className="text-gray-600 mt-2">Daily Prayers & Mantras</p>
      </div>

      {/* Content Section */}
      <main className="flex-grow px-6 sm:px-12 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* English Prayer */}
          <section className="bg-white border-2 border-[#FE7743] rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              School Prayer (English)
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              O my God! Thank You for my life.
              {"\n"}O Almighty, thank You for Your creation.
              {"\n"}Bless our country to march on the path of progress.
              {"\n"}Thank You to our parents for guiding us in goodness.
              {"\n"}Thank You to our teachers for giving us good lessons.
              {"\n"}O my God! Thank You for all the unique gifts You have made for us.
            </p>
          </section>


          {/* Hindi Prayer */}
          <section className="bg-white border-2 border-[#FE7743] rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">School Prayer (Hindi)</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              तुम्हीं हो माता पिता तुम्हीं हो <br />
              तुम्हीं हो बन्धु सखा तुम्हीं हो <br />
              तुम्हीं हो साथी तुम्हीं सहारे <br />
              कोई न अपना सिवा तुम्हारे <br />
              <br />
              तुम्हीं हो नैया तुम्हीं खिवैया <br />
              तुम्हीं हो बन्धु सखा तुम्हीं हो <br />
              जो खिल सके ना वो फूल हम हैं <br />
              तुम्हारे चरणों की धूल हम हैं <br />
              <br />
              दया की दृष्टि सदा ही रखना <br />
              तुम्हीं हो बन्धु सखा तुम्हीं हो <br />
              तुम्हीं हो माता पिता तुम्हीं हो <br />
              तुम्हीं हो बन्धु सखा तुम्हीं हो
            </p>
          </section>


          {/* Gayatri Mantra */}
          <section className="bg-white border-2 border-[#FE7743] rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">ॐ गायत्री मंत्र</h2>
            <p className="text-gray-700 leading-relaxed whitespace-nowrap sm:whitespace-pre-line">
              ॐ भूर्भुवः स्वः <br />
              तत्स॑वि॒तुर्वरे॑ण्यं॒ <br />
              भर्गो॑ दे॒वस्य॑ धीमहि। <br />
              धियो॒ यो नः॑ प्रचो॒दया॑त्॥
            </p>
          </section>

        </div>
      </main>


      <Footer />
    </div>
  );
};

export default SchoolPrayer;
