import React, {createContext, useContext, useRef, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Context for scroll management
const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const scrollRefs = useRef({});

  const addRef = (name, ref) => {
    scrollRefs.current[name] = ref;
  };

  const scrollTo = (name) => {
    if (scrollRefs.current[name]) {
      scrollRefs.current[name].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ScrollContext.Provider value={{ addRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}

export default ScrollToTop;