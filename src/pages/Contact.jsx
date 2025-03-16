const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <a className="lg:relative lg:left-[520px] text-3xl mt-20 font-bold text-center mb-6 flex items-center gap-0">
        <span>Contact</span>
        <span className="text-blue-500">Us</span>
      </a>

      {/* Google Map Section */}
      <div className="w-full h-96">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509177!2d144.9537353153169!3d-37.81720997975169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43bf5e1f1f%3A0x5045675218ce840!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1710000000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info and Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Contact Info */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <p className="mb-2">
            <strong>Phone:</strong> +8801612844066 <br /> +012 345 678 203
          </p>
          <p className="mb-2">
            <strong>Email:</strong> BuyHub-spot@gmail.com
            <br />
            sahadatnayem333@gmail.com
          </p>
          <p className="mb-2">
            <strong>Address:</strong> Gulsan 123, <br />
            Dhaka, Bangladesh.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border rounded w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border rounded w-full mt-4"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 border rounded w-full mt-4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md mt-4 w-full font-semibold hover:bg-blue-600 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
