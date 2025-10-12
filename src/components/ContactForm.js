import React, { useState } from "react";

 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus("Please fill in all required fields.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (response.ok) {
        setStatus("Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission Failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf1ec] flex flex-col">
     

      <section className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto px-6 py-16 gap-12 w-full">
        
        <div className="md:w-1/2 text-left">
          <p className="font-semibold leading-relaxed mb-4">
            Whether you have an idea, a question, or simply want to explore how V can work together, 
            V’re just a message away. <br />
            Let’s catch up over coffee. <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

       
        <div className="md:w-1/2 w-full">
          <h2 className=" font-bold text-center md:text-left mb-2 text-3xl ">Join the Story</h2>
          <p className="text-gray-700 text-center md:text-left mb-6">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
              onChange={handleChange}
              value={formData.name}
            />

            <input
              type="email"
              name="email"
              placeholder="Your email*"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
              onChange={handleChange}
              value={formData.email}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              onChange={handleChange}
              value={formData.phone}
            />

            <textarea
              name="message"
              placeholder="Your message*"
              rows="4"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
              onChange={handleChange}
              value={formData.message}
            ></textarea>

           <div className="w-full flex justify-center md:justify-center lg:justify-center mt-4">
  <button
    type="submit"
    className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors shadow-md"
  >
    Submit
  </button>
</div>

          </form>

          <p className="mt-4 text-sm text-center md:text-left text-gray-700">{status}</p>

          <div className="flex flex-col md:flex-row justify-center  gap-2 md:gap-6 mt-6 text-sm text-orange-700 text-center md:text-left md:justify-center lg:justify-center">
            <a href="mailto:vermita@varnanfilms.co.in" className="hover:underline">
              vermita@varnanfilms.co.in
            </a>
            
            <a href="tel:+919873684567" className="hover:underline">
              +91 98736 84567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
