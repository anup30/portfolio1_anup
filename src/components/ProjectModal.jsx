// src/components/ProjectModal.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <button
            onClick={onClose}
            className="px-3 py-1 text-sm border rounded"
          >
            Close
          </button>
        </div>

        <div className="p-4">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            slidesPerView={1}
            className="flex! items-center"
          >
            {(project.images || []).map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex justify-center items-center h-[75vh]">
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={src}
                      alt={`${project.title}-${idx}`}
                      className="
                        w-full
                        max-h-[70vh]
                        object-contain
                        bg-gray-100
                        rounded
                        cursor-zoom-in
                      "
                    />
                  </a>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4">
            <p className="text-sm text-gray-700">{project.description}</p>
            <p className="mt-2 text-xs">
              Stack: <strong>{project.stack}</strong>
            </p>

            <div className="mt-3 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sm"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sm"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
