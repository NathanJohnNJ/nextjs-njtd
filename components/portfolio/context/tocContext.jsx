'use client';
import { createContext, useState } from 'react';

export const TOCContext = createContext({
  setions: [],
  registerSection: () => {},
  activeSection: 0,
  setActiveSection: () => {},
})

export const useTOCContextValues = () => {
  const [ activeSection, setActiveSection ] = useState(-1);
  const [ sections, setSections ] = useState([{title: "", id: 0}]);

  const registerSection = (section) => {
    setSections((val) => val.concat([section]));
  };

  const processSections = (sections) => {
    const ids= sections.map(({id}) =>  id);
    const uniqueSections = sections.filter(
      ({id}, index) => !ids.includes(id, index +1)
    ).sort((a, b) => a.id - b.id);
    return uniqueSections;
  }

  return {
    values: {
      sections: processSections(sections),
      registerSection,
      activeSection,
      setActiveSection
    }
  }
}