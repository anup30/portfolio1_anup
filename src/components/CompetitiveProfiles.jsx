// src/components/CompetitiveProfiles.jsx
import React from 'react';

const profiles = [
  {
    platform: 'Codeforces',
    username: 'anup30',
	info:'rating: 1141',
    icon: '/resources/icons/codeforces.svg',
    url: 'https://codeforces.com/profile/anup30'
  },
  {
    platform: 'Codechef',
    username: 'anup30',
	info:'rating: 1493',
    icon: '/resources/icons/codechef.svg',
    url: 'https://www.codechef.com/users/anup30'
  },
    {
    platform: 'LeetCode',
    username: 'anup30',
	info:'solved: 28',
    icon: '/resources/icons/leetcode.svg',
    url: 'https://leetcode.com/u/anup30/'
  },
];

export default function CompetitiveProfiles() {
  return (
    <section id="competitive" className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Competitive Programming
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {profiles.map(p => (
          <a
            key={p.platform}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3
              w-64 p-4
              bg-blue-100/50 border border-gray-400 rounded-lg
              shadow-sm hover:shadow-md
              transition
            "
          >
            <img
              src={p.icon}
              alt={`${p.platform} logo`}
              className="w-7 h-7 object-contain"
            />
            <div>
              <p className="text-sm font-semibold">{p.platform}</p>
              <p className="text-xs text-gray-600">user: {p.username}</p>
              <p className="text-xs text-gray-600">{p.info}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
