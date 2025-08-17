import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            {/* Top Image above Footer */}
            <div className="w-full">
                <img
                    src="/images/Lower.png" // replace with your actual image path
                    alt="School Banner"
                    className="w-full h-40 sm:h-64 object-cover"
                />
            </div>

            {/* Footer Section */}
            <footer className="bg-[#010066] text-white px-6 py-10">
                <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">

                    {/* About */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            We provide the best programs for kids, teens, and adults to grow and
                            learn together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white transition">Home</a></li>
                            <li><a href="#" className="hover:text-white transition">Programs</a></li>
                            <li><a href="#" className="hover:text-white transition">Gallery</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-6 text-2xl">
                            <a href="#" className="hover:text-blue-400 transition"><FaFacebook /></a>
                            <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
                            <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} Your Brand. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
