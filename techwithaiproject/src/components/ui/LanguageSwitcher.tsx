import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
  ];
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  
  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    closeDropdown();
  };
  
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-sm px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        onClick={toggleDropdown}
      >
        <span>{currentLanguage.name}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 z-10 animate-slide-in">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                lang.code === language ? 'text-primary-600 dark:text-primary-400 font-medium' : 'text-slate-700 dark:text-slate-300'
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;