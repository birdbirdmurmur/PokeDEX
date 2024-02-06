import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 1000 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 bg-slate-400 text-white px-4 py-2 rounded-xl transition-opacity ${
        isVisible ? 'opacity-70' : 'opacity-0'
      } focus:outline-none`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
