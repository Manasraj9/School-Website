import { AlertTriangle } from "lucide-react"; // for warning icon
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PaymentOfFees() {
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
      <div className="bg-[#ffd5af] flex flex-col items-center px-4 py-10">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl border-2 border-[#FE7743] p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-red-600 w-8 h-8" />
            <h2 className="text-2xl font-bold text-red-700">
              ⚠️ LATE FINE ALERT ⚠️
            </h2>
          </div>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              A <span className="font-bold">₹100 late fine</span> will be
              charged for any school fees not submitted by the{" "}
              <span className="font-bold">15th of the month</span>.
            </p>
            <p>
              If fees remain unpaid for more than{" "}
              <span className="font-bold">one month</span>, the late fine will
              increase to <span className="font-bold">₹150</span>.
            </p>
            <p className="text-red-600 font-semibold">
              Please ensure your payment is made on time to avoid this penalty.
            </p>
            <p className="text-gray-700 italic">
              📌 Please follow the rules and regulations strictly.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

