// src/components/Contact.jsx
import { useState } from 'react';

export default function Contact(){
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <p className="text-sm">Email: anupbarua30@gmail.com</p>
          <p className="text-sm mt-2">Phone: (BD) 01913378482</p>
        </div>

        <div className="lg:col-span-2">
          {!submitted ? (
            // Netlify Forms: form-name hidden input required. data-netlify attribute enables Netlify forms
            <form
              name="contact"
              method="POST"
			  action="/" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              //onSubmit={() => setSubmitted(true)}
              onSubmit={(e) => {
                e.preventDefault();  
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(new FormData(e.target)).toString()
                })
                  .then(() => setSubmitted(true))
                  .catch((error) => alert("Error submitting form"));
              }}
              className="bg-white/50 border border-gray-500 p-6 rounded"
            >
              {/* required for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              {/* honeypot */}
              <input type="hidden" name="bot-field" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm">Name</span>
                  <input required name="name" className="mt-1 block w-full rounded border border-gray-500 px-3 py-2" />
                </label>
                <label className="block">
                  <span className="text-sm">Email</span>
                  <input required name="email" type="email" className="mt-1 block w-full rounded border border-gray-500 px-3 py-2" />
                </label>
              </div>

              <label className="block mt-4">
                <span className="text-sm">Message</span>
                <textarea required name="message" rows="6" className="mt-1 block w-full rounded border border-gray-500 px-3 py-2" />
              </label>

              <div className="mt-4">
                <button type="submit" className="px-4 py-2 hover:cursor-pointer bg-blue-300 text-gray-700 rounded">Send Message</button>
              </div>
            </form>
          ) : (
            <div className="bg-green-50 border p-6 rounded">
              <h4 className="font-semibold">Thanks — message submitted!</h4>
              <p className="text-sm mt-2">Netlify will capture and show your message in the site admin / forms dashboard.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
