// src/components/Header.jsx

export default function Header(){
  return (
    <header className="bg-gray-100 sticky top-0 z-40 shadow-sm">
      <nav className="max-w-screen-1440 mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold text-gray-800">my portfolio</a>
        <div className="space-x-6 text-sm hidden sm:flex">
          <a href="#skills" className="hover:text-brand-700">Skills</a>
          <a href="#projects" className="hover:text-brand-700">Projects</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </div>
        <button className="sm:hidden" aria-label="open menu">☰</button>
      </nav>
    </header>
  );
}
