// src/data/projects.js
// Two arrays exported: flutter_projects and django_projects
// Images are referenced from /app_ss/... (public folder)

// src/data/projects.js
export const flutter_projects = [
  {
    id: 'just-radio',
    title: 'Live Online Radio',
    description: [
      'Live radio streaming (mobile & web)',
      'Search & favorite stations',
      'Lightweight UI built with Flutter'
    ],
    tags: ['flutter', 'radio', 'streaming'],
    images: [
      '/app_ss/flutter_just_radio/jr1.png',
      '/app_ss/flutter_just_radio/jr2.png',
      '/app_ss/flutter_just_radio/jr3.png',
      '/app_ss/flutter_just_radio/jr4.png',
      '/app_ss/flutter_just_radio/jr5.png',
      '/app_ss/flutter_just_radio/jr6.png'
    ],
    github: 'https://github.com/anup30/just_radio',
    live: 'https://anup30.github.io/just_radio/',
    thumbnail: '/app_ss/flutter_just_radio/jr1.png'
  },
  {
    id: 'e_commerce',
    title: 'E-commerce App',
    description: [
      'User authentication and profile',
      'Product listing with categories',
      'Cart and checkout flow'
    ],
    tags: ['flutter', 'ecommerce', 'authentication'],
    images: [
      '/app_ss/flutter_e-com/cb1.png',
      '/app_ss/flutter_e-com/cb2.png',
      '/app_ss/flutter_e-com/cb3.png',
      '/app_ss/flutter_e-com/cb4.png',
      '/app_ss/flutter_e-com/cb5.png',
      '/app_ss/flutter_e-com/cb6.png'
    ],
    github: 'https://github.com/anup30/e_commerce_1',
    thumbnail: '/app_ss/flutter_e-com/cb1.png'
  },
  {
    id: 'social_app',
    title: 'Social Media App',
    description: [
      'Firebase backend (auth + storage)',
      '1-to-1 live chat',
      'Photo sharing with comments'
    ],
    tags: ['flutter', 'firebase', 'chat'],
    images: [
      '/app_ss/flutter_social_app/sa1.png',
      '/app_ss/flutter_social_app/sa2.png',
      '/app_ss/flutter_social_app/sa3.png',
      '/app_ss/flutter_social_app/sa4.png',
      '/app_ss/flutter_social_app/sa5.png'
    ],
    github: 'https://github.com/anup30/social_ap',
    thumbnail: '/app_ss/flutter_social_app/sa1.png'
  }
];

export const django_projects = [
  {
    id: 'dj-event-mgmt',
    title: 'Event Management',
    description: [
      'Role-based access control',
      'Event creation & registration',
      'Rendered templates with Django MVT'
    ],
    tags: ['django', 'mvt', 'render'],
    images: [
      '/app_ss/event_management/em1.png',
      '/app_ss/event_management/em2.png',
      '/app_ss/event_management/em3.png',
      '/app_ss/event_management/em4.png',
      '/app_ss/event_management/em5.png',
      '/app_ss/event_management/em6.png'
    ],
    github: 'https://github.com/anup-sdp/dj_event_mgmt/tree/mid-term-exam',
    live: 'https://dj-event-mgmt-3.onrender.com/',
    thumbnail: '/app_ss/event_management/em1.png'
  },
  {
    id: 'blog-ink',
    title: 'BlogInk (React + DRF)',
    description: [
      'Django DRF backend with JWT',
      'React frontend SPA',
      'API docs available (Swagger)'
    ],
    tags: ['django', 'drf', 'react'],
    images: [
      '/app_ss/blog_ink/bi1.png',
      '/app_ss/blog_ink/bi2.png',
      '/app_ss/blog_ink/bi3.png',
      '/app_ss/blog_ink/bi4.png',
      '/app_ss/blog_ink/bi5.png',
      '/app_ss/blog_ink/bi6.png',
      '/app_ss/blog_ink/bi7.png',
      '/app_ss/blog_ink/bi8.png',
      '/app_ss/blog_ink/bi9.png'
    ],
    api_github: 'https://github.com/anup-sdp/drf-blog-ink/tree/main',
    api_live: 'https://drf-blog-ink.vercel.app/api/v1/swagger/',
    frontend_github: 'https://github.com/anup-sdp/react_blog-ink',
    frontend_live: 'https://react-blog-ink.vercel.app/',
    thumbnail: '/app_ss/blog_ink/bi1.png'
  },
  {
    id: 'phi_mart',
    title: 'PhiMart e-commerce',
    description: [
      'DRF backend + React frontend',
      'Payment integration (sslcommerz)',
      'Product management & orders'
    ],
    tags: ['django', 'drf', 'ecommerce', 'postgresql'],
    images: [
      '/app_ss/phimart/pm1.png',
      '/app_ss/phimart/pm2.png',
      '/app_ss/phimart/pm3.png',
      '/app_ss/phimart/pm4.png',
      '/app_ss/phimart/pm5.png',
      '/app_ss/phimart/pm6.png',
      '/app_ss/phimart/pm7.png',
      '/app_ss/phimart/pm8.png',
      '/app_ss/phimart/pm9.png'
    ],
    api_github: 'https://github.com/anup-sdp/pritron_drf_phimart_ecom',
    api_live: 'https://drf-phimart.vercel.app/swagger/',
    frontend_github: 'https://github.com/anup-sdp/react_phimart_client',
    frontend_live: 'https://react-phimart-client.vercel.app/',
    thumbnail: '/app_ss/phimart/pm1.png'
  }
];

export default {
  flutter_projects,
  django_projects
};
