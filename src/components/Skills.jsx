// src/components/Skills.jsx
import React from 'react';

const skills = [
  { name: 'HTML', icon: '/resources/icons/html-logo.webp' },
  { name: 'CSS', icon: '/resources/icons/css-logo.webp' },
  { name: 'JavaScript', icon: '/resources/icons/javascript-logo.webp' },
  { name: 'Bootstrap', icon: '/resources/icons/bootstrap.svg' },
  { name: 'Tailwind', icon: '/resources/icons/tailwind.svg' },
  { name: 'React', icon: '/resources/icons/react-logo.webp' },
  { name: 'Dart', icon: '/resources/icons/dart.svg' },
  { name: 'Flutter', icon: '/resources/icons/flutter-icon.svg' },
  { name: 'Python', icon: '/resources/icons/python-logo.svg' },
  { name: 'Django', icon: '/resources/icons/django-logo.svg' },
  { name: 'FastAPI', icon: '/resources/icons/fastapi.svg' },
  { name: 'C', icon: '/resources/icons/c.svg' },
  { name: 'C++', icon: '/resources/icons/cpp-logo.svg' },
  { name: 'PostgreSQL', icon: '/resources/icons/pgsql.svg' },
  { name: 'MySQL', icon: '/resources/icons/mysql.svg' },
  { name: 'SQLite', icon: '/resources/icons/sqlite.svg' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
      <p className="mb-6 text-center text-sm text-gray-700">
        Technologies I work with regularly
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="
              flex items-center gap-3
              px-4 py-2
              bg-white/50 border border-gray-400 rounded-lg
              shadow-sm
              hover:shadow-md transition
            "
          >
            <img
              src={skill.icon}
              alt={`${skill.name} logo`}
              className="w-6 h-6 object-contain"
              loading="lazy"
            />
            <span className="text-sm font-semibold tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
