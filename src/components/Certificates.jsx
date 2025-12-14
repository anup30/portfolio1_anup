// src/components/Certificates.jsx
import { useState, useEffect } from 'react';

const certificates = [
  {
    title: 'Flutter Development',
    issuer: 'Ostad',
    file: '/resources/certificates/ostad_flutter 5-A14855.pdf'
  },
  {
    title: 'Django Web Development',
    issuer: 'Ostad',
    file: '/resources/certificates/ostad_python_django_react 3-A31399.pdf'
  },
  {
    title: 'CSE & DSA fundamentals with C, C++, and python react web development',
    issuer: 'Phitron',
    file: '/resources/certificates/phitron cse fundamentsls.pdf'
  }
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);
  // close certificate modal with ESC
  useEffect(() => {
    const handler = e => e.key === 'Escape' && setActiveCert(null);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  //disable background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeCert ? 'hidden' : '';
  }, [activeCert]);

  return (
    <section id="certificates" className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Certifications
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {certificates.map(cert => (
          <button
            key={cert.title}
            onClick={() => setActiveCert(cert)}
            className="
              text-left
              w-64 p-4
              bg-white/50 border border-gray-500 rounded-lg
              shadow-sm hover:shadow-md
              transition
            "
          >
            <h3 className="font-semibold text-sm">{cert.title}</h3>
            <p className="text-xs text-gray-600 mt-1">
              {cert.issuer}
            </p>
            <span className="text-xs underline mt-2 inline-block">
              View Certificate
            </span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-3 border-b">
              <div>
                <h3 className="font-semibold text-sm">
                  {activeCert.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {activeCert.issuer}
                </p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="px-3 py-1 border rounded text-sm"
              >
                Close
              </button>
            </div>

            <iframe
              src={activeCert.file}
              title={activeCert.title}
              className="flex-1 w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
