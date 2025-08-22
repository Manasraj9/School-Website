import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            {/* Top Image above Footer */}
            <div className="w-full">
                <img
                    src="/images/Lower.png"
                    alt="School Banner"
                    className="w-full object-contain sm:object-cover max-h-48 sm:max-h-64"
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
                            <li>
                                <Link href="/" className="hover:text-white transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/management" className="hover:text-white transition">
                                    Management
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-white transition">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-6 text-2xl">
                            <a href="https://www.facebook.com/share/17AktSjFnf/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/_.neev._2020?igsh=MXV5YnV0aTlzb2wyMg==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} Neev Baalpan ki . All rights reserved.
                </div>
            </footer>
        </div>
    );
}
