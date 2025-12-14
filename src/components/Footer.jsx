// src/components/Footer.jsx

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-6 mt-8">
      <div className="max-w-screen-1440 mx-auto px-6 lg:px-12 text-center">
        <div>Author: Anup Barua — <a className="underline" href="mailto:anupbarua30@gmail.com">anupbarua30@gmail.com</a></div>
        <div className="mt-2">&copy; {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
