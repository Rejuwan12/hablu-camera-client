


const ContactPage = () => {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-md p-6 rounded-lg ">
                <h2 className="mb-6 text-4xl font-bold text-center text-gray-800">Contact With Us</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Email"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
