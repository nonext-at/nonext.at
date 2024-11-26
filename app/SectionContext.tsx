'use client';
import { createContext, useContext, useState } from "react";

const SectionContext = createContext(null);

export const SectionProvider = ({ children }) => {
  const [sections, setSections] = useState([]);

  return (
    <SectionContext.Provider value={{ sections, setSections }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => useContext(SectionContext);
