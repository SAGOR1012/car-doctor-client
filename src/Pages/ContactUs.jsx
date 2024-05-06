import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactUs = () => {
    return (
        <div>
            <div className="container mx-auto py-6">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <div className="grid gap-6">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                        <p>Email: ar.sagor212@gmial.com</p>
                        <p>Phone: 01639136200</p>
                        <p>Address: Hazaribugh,Dhaka, Bangladesh</p>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2">
                                Follow us on social media:
                            </h3>
                            <ul className="flex space-x-4">
                                <li>
                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FaYoutube />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
                        <form>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    rows="4"
                                    placeholder="Your Message"></textarea>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;