import { useState } from 'react';

import styles from './page.module.scss'

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border rounded-md pl-0 pr-0 lg:p-2 md:p-4 pb-4 my-6 lg:my-2 ${styles.FAQContainer}`}>
      <div className="flex justify-between items-start">
        <h2 className="text-md lg:text-md font-semibold leading-relaxed">{question}</h2>
        <button
          className={`transition transform hover:scale-105 lg:-mr-4 md:mr-0 font-semibold text-sm lg:text-md text-gray-500`}
          onClick={toggleAccordion}
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      {isOpen && <p className={`mt-2 text-sm lg:text-md leading-relaxed ${styles.answerText}`}>{answer}</p>}
    </div>
  );
};

export default FaqItem;
