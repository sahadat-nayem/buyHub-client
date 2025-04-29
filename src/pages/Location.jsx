

const Location = () => {
    return (
        <div className="w-full h-[1000px]">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509177!2d144.9537353153169!3d-37.81720997975169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43bf5e1f1f%3A0x5045675218ce840!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1710000000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
};

export default Location;