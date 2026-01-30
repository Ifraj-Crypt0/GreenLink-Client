import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black/95 text-gray-300 border-t border-gray-700 p-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Left side: About */}
                <div className="text-center sm:text-left">
                    <h6 className="text-green-400 font-bold text-lg mb-1">
                        Built & Crafted by Ifraj Ahmed 🌱
                    </h6>
                    <p className="text-gray-400 text-sm max-w-md">
                        A passionate full-stack developer & gardening enthusiast. This app
                        is my little project to help gardeners connect, share tips, and grow
                        together.
                    </p>
                </div>

                {/* Right side: Links / Icons */}
                <div className="flex gap-4 items-center">
                    <a
                        href="https://github.com/Ifraj-Crypt0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-colors"
                    >
                        <FaGithub /> GitHub
                    </a>

                </div>
            </div>

            {/* Bottom text */}
            <div className="mt-6 text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} Ifraj Ahmed. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;