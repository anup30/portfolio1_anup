// src/data/projects.js
// Add or edit projects here. Images should be placed in /public/resources/ and referenced with absolute path like "/resources/xyz.png".
const projects = [
  {
    id: 'just-radio',
    title: 'Live Online Radio',
    stack: 'flutter',
    description: 'A live radio streaming app (mobile & web) built with Flutter.',
    images: [
      '/resources/just_radio_1.png',
      '/resources/just_radio_2.png'
    ],
    github: 'https://github.com/anup30/just_radio',
    live: 'https://anup30.github.io/just_radio/'
  },
  {
    id: 'e_commerce',
    title: 'E-commerce App',
    stack: 'flutter',
    description: 'Flutter e-commerce app with authentication, product list and cart.',
    images: ['/resources/ecommerce_1.png', '/resources/ecommerce_2.png'],
    github: 'https://github.com/anup30/e_commerce_1'
  },
  {
    id: 'social_app',
    title: 'Social media App',
    stack: 'flutter',
    description: 'social media app with user Authentication, live 1 to 1 chat, share pictures, firebase backend',
    images: ['/resources/flutter_social_1.png', '/resources/flutter_social_2.png'],
    github: 'https://github.com/anup30/social_ap'
  },
  {
    id: 'dj-event-mgmt',
    title: 'Event Management',
    stack: 'django',
    description: 'Django MVT project for event management, role based access control\n — deployed on Render.',
    images: ['/app_ss/event_management/em1.png', '/app_ss/event_management/em2.png', '/app_ss/event_management/em3.png', '/app_ss/event_management/em4.png'],
    github: 'https://github.com/anup-sdp/dj_event_mgmt/tree/mid-term-exam',
    live: 'https://dj-event-mgmt-3.onrender.com/'
  },
  {
    id: 'blog-ink',
    title: 'BlogInk (React + DRF)',
    stack: 'django',
    description: 'Django DRF backend + React frontend blog project.',
    images: ['/resources/blog_1.png', '/resources/blog_2.png'],
	api_github: 'https://github.com/anup-sdp/drf-blog-ink/tree/main',
	api_live: 'https://drf-blog-ink.vercel.app/api/v1/swagger/',
    frontend_github: 'https://github.com/anup-sdp/react_blog-ink',
    frontend_live: 'https://react-blog-ink.vercel.app/'
  },
  {
    id: 'phi_mart',
    title: 'PhiMart e-commerce',
    stack: 'django',
    description: 'Django DRF backend + React frontend e-commerce project, with authentication and sslcommerz payment integration',
    images: ['/resources/phi_mart_1.png', '/resources/phi_mart.png'],
	api_github: 'https://github.com/anup-sdp/pritron_drf_phimart_ecom',
	api_live: 'https://drf-phimart.vercel.app/swagger/',
    frontend_github: 'https://github.com/anup-sdp/react_phimart_client',
    frontend_live: 'https://react-phimart-client.vercel.app/'
  }
];

export default projects;
