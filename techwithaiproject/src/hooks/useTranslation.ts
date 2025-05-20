import { useState, useEffect, createContext, useContext } from 'react';

// Simplified translation hooks system
// In a real app, this would integrate with i18next or similar library

type Language = 'en' | 'hi';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

// Mock translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    'Book Your Ride': 'Book Your Ride',
    'From': 'From',
    'To': 'To',
    'When': 'When',
    'Passengers': 'Passengers',
    'Search Rides': 'Search Rides',
    'Book Now': 'Book Now',
    'passenger': 'passenger',
    'passengers': 'passengers',
    'Change Details': 'Change Details',
    'Available Rides': 'Available Rides',
    'Pickup Location': 'Pickup Location',
    'Enter pickup location': 'Enter pickup location',
    'Destination': 'Destination',
    'Enter destination': 'Enter destination',
    'Date': 'Date',
    'Time': 'Time',
    'Reliable Transportation in Hill Stations': 'Reliable Transportation in Hill Stations',
    'Book jeeps, bikes, and shared rides with real-time tracking that works even in poor network areas.': 'Book jeeps, bikes, and shared rides with real-time tracking that works even in poor network areas.',
    'Book a Ride': 'Book a Ride',
    'Emergency Services': 'Emergency Services',
    'Travel Safely in Hill Stations': 'Travel Safely in Hill Stations',
    'PeakRide is designed specifically for hill station transportation challenges, offering reliable service even in remote areas.': 'PeakRide is designed specifically for hill station transportation challenges, offering reliable service even in remote areas.',
    'What Our Travelers Say': 'What Our Travelers Say',
    'Hear from people who have used PeakRide during their hill station adventures.': 'Hear from people who have used PeakRide during their hill station adventures.',
    'Ready for your hill station adventure?': 'Ready for your hill station adventure?',
    'Download the PeakRide app to access offline maps, real-time tracking, and emergency services during your trip.': 'Download the PeakRide app to access offline maps, real-time tracking, and emergency services during your trip.',
    'Book Your Ride Now': 'Book Your Ride Now',
    'Hill Station Coverage': 'Hill Station Coverage',
    'Specialized transportation solutions across 5 major hill stations in India.': 'Specialized transportation solutions across 5 major hill stations in India.',
    'Safety Focused': 'Safety Focused',
    'SOS alerts, driver verification, and safety toolkit for peace of mind.': 'SOS alerts, driver verification, and safety toolkit for peace of mind.',
    'Real-time Tracking': 'Real-time Tracking',
    'Know exactly where your ride is and get accurate ETAs even in low-signal areas.': 'Know exactly where your ride is and get accurate ETAs even in low-signal areas.',
    'Works Offline': 'Works Offline',
    'Book and track rides even without consistent internet connectivity.': 'Book and track rides even without consistent internet connectivity.',
  },
  hi: {
    'Book Your Ride': 'अपनी सवारी बुक करें',
    'From': 'से',
    'To': 'तक',
    'When': 'कब',
    'Passengers': 'यात्री',
    'Search Rides': 'सवारी खोजें',
    'Book Now': 'अभी बुक करें',
    'passenger': 'यात्री',
    'passengers': 'यात्री',
    'Change Details': 'विवरण बदलें',
    'Available Rides': 'उपलब्ध सवारियां',
    'Pickup Location': 'पिकअप स्थान',
    'Enter pickup location': 'पिकअप स्थान दर्ज करें',
    'Destination': 'गंतव्य',
    'Enter destination': 'गंतव्य दर्ज करें',
    'Date': 'दिनांक',
    'Time': 'समय',
    'Reliable Transportation in Hill Stations': 'हिल स्टेशनों में विश्वसनीय परिवहन',
    'Book jeeps, bikes, and shared rides with real-time tracking that works even in poor network areas.': 'जीप, बाइक, और साझा सवारियां बुक करें वास्तविक समय ट्रैकिंग के साथ जो कमज़ोर नेटवर्क क्षेत्रों में भी काम करता है।',
    'Book a Ride': 'सवारी बुक करें',
    'Emergency Services': 'आपातकालीन सेवाएं',
    'Travel Safely in Hill Stations': 'हिल स्टेशनों में सुरक्षित यात्रा करें',
    'PeakRide is designed specifically for hill station transportation challenges, offering reliable service even in remote areas.': 'पीकराइड विशेष रूप से हिल स्टेशन परिवहन चुनौतियों के लिए डिज़ाइन किया गया है, जो दूरस्थ क्षेत्रों में भी विश्वसनीय सेवा प्रदान करता है।',
    'What Our Travelers Say': 'हमारे यात्री क्या कहते हैं',
    'Hear from people who have used PeakRide during their hill station adventures.': 'उन लोगों से सुनें जिन्होंने अपनी हिल स्टेशन यात्राओं के दौरान पीकराइड का उपयोग किया है।',
    'Ready for your hill station adventure?': 'अपनी हिल स्टेशन एडवेंचर के लिए तैयार हैं?',
    'Download the PeakRide app to access offline maps, real-time tracking, and emergency services during your trip.': 'अपनी यात्रा के दौरान ऑफलाइन मानचित्र, वास्तविक समय ट्रैकिंग और आपातकालीन सेवाओं का उपयोग करने के लिए पीकराइड ऐप डाउनलोड करें।',
    'Book Your Ride Now': 'अभी अपनी सवारी बुक करें',
    'Hill Station Coverage': 'हिल स्टेशन कवरेज',
    'Specialized transportation solutions across 5 major hill stations in India.': 'भारत के 5 प्रमुख हिल स्टेशनों में विशेष परिवहन समाधान।',
    'Safety Focused': 'सुरक्षा पर केंद्रित',
    'SOS alerts, driver verification, and safety toolkit for peace of mind.': 'मन की शांति के लिए SOS अलर्ट, ड्राइवर सत्यापन और सुरक्षा टूलकिट।',
    'Real-time Tracking': 'वास्तविक समय ट्रैकिंग',
    'Know exactly where your ride is and get accurate ETAs even in low-signal areas.': 'जानें कि आपकी सवारी कहां है और कम सिग्नल वाले क्षेत्रों में भी सटीक ETA प्राप्त करें।',
    'Works Offline': 'ऑफलाइन काम करता है',
    'Book and track rides even without consistent internet connectivity.': 'निरंतर इंटरनेट कनेक्टिविटी के बिना भी सवारियां बुक करें और ट्रैक करें।',
  },
};

// In a real app, we'd create a proper React context and provider
// Here we'll just use a simple hook
export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });
  
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  const translate = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return { language, setLanguage, translate };
};