import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/50 text-white">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? (
          <FaMinus className="w-5 h-5 text-gray-200" />
        ) : (
          <FaPlus className="w-5 h-5 text-gray-200" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-200">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;