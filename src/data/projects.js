// src/data/projects.js
// Add or edit projects here. Images should be placed in /public/resources/ and referenced with absolute path like "/resources/xyz.png".
const projects = [
  {
    id: 'just-radio',
    title: 'Live Online Radio',
    stack: 'flutter',
    description: 'A live radio streaming app (mobile & web) built with Flutter.',
    images: [
      '/app_ss/flutter_just_radio/jr1.png',
      '/app_ss/flutter_just_radio/jr2.png',
      '/app_ss/flutter_just_radio/jr3.png',
      '/app_ss/flutter_just_radio/jr4.png',
      '/app_ss/flutter_just_radio/jr5.png',
      '/app_ss/flutter_just_radio/jr6.png',      
    ],
    github: 'https://github.com/anup30/just_radio',
    live: 'https://anup30.github.io/just_radio/'
  },
  {
    id: 'e_commerce',
    title: 'E-commerce App',
    stack: 'flutter',
    description: 'Flutter e-commerce app with authentication, product list and cart.',
    images: [
		'/app_ss/flutter_e-com/cb1.png',
		'/app_ss/flutter_e-com/cb2.png',
		'/app_ss/flutter_e-com/cb3.png',
		'/app_ss/flutter_e-com/cb4.png',
		'/app_ss/flutter_e-com/cb5.png',
		'/app_ss/flutter_e-com/cb6.png',		
	],
    github: 'https://github.com/anup30/e_commerce_1'
  },
  {
    id: 'social_app',
    title: 'Social media App',
    stack: 'flutter',
    description: 'social media app with user Authentication, live 1 to 1 chat, share pictures, firebase backend',
    images: [
		'/app_ss/flutter_social_app/sa1.png',
		'/app_ss/flutter_social_app/sa2.png',
		'/app_ss/flutter_social_app/sa3.png',
		'/app_ss/flutter_social_app/sa4.png',
		'/app_ss/flutter_social_app/sa5.png',
	],
    github: 'https://github.com/anup30/social_ap'
  },
  {
    id: 'dj-event-mgmt',
    title: 'Event Management',
    stack: 'django',
    description: 'Django MVT project for event management, role based access control\n — deployed on Render.',
    images: [
		'/app_ss/event_management/em1.png', 
		'/app_ss/event_management/em2.png', 
		'/app_ss/event_management/em3.png', 
		'/app_ss/event_management/em4.png',
		'/app_ss/event_management/em5.png',
		'/app_ss/event_management/em6.png',
	],
    github: 'https://github.com/anup-sdp/dj_event_mgmt/tree/mid-term-exam',
    live: 'https://dj-event-mgmt-3.onrender.com/'
  },
  {
    id: 'blog-ink',
    title: 'BlogInk (React + DRF)',
    stack: 'django',
    description: 'Django DRF backend + React frontend blog project.',
    images: [
		'/app_ss/blog_ink/bi1.png',
		'/app_ss/blog_ink/bi2.png',
		'/app_ss/blog_ink/bi3.png',
		'/app_ss/blog_ink/bi4.png',
		'/app_ss/blog_ink/bi5.png',
		'/app_ss/blog_ink/bi6.png',
		'/app_ss/blog_ink/bi7.png',
		'/app_ss/blog_ink/bi8.png',
		'/app_ss/blog_ink/bi9.png',
	],
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
    images: [
		'/app_ss/phimart/pm1.png',
		'/app_ss/phimart/pm2.png',
		'/app_ss/phimart/pm3.png',
		'/app_ss/phimart/pm4.png',
		'/app_ss/phimart/pm5.png',
		'/app_ss/phimart/pm6.png',
		'/app_ss/phimart/pm7.png',
		'/app_ss/phimart/pm8.png',
		'/app_ss/phimart/pm9.png',
	],
	api_github: 'https://github.com/anup-sdp/pritron_drf_phimart_ecom',
	api_live: 'https://drf-phimart.vercel.app/swagger/',
    frontend_github: 'https://github.com/anup-sdp/react_phimart_client',
    frontend_live: 'https://react-phimart-client.vercel.app/'
  }
];

export default projects;
