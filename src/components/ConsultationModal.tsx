import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styled from 'styled-components';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Modal = styled(motion.div)`
  background: linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 100%);
  border-radius: 30px;
  padding: 3.5rem;
  max-width: 650px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #F0F0F0;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #E0E0E0;
    border-radius: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #F5F5F5;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: #666;

  &:hover {
    background: #EEEEEE;
    transform: rotate(90deg);
  }
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const questions = [
    {
      id: 'frequency',
      label: 'How often would you like your home cleaned?',
      type: 'select',
      options: ['Weekly', 'Bi-weekly', 'Monthly', 'One-time deep clean']
    },
    {
      id: 'sqft',
      label: 'What is the approximate square footage of your home?',
      type: 'select',
      options: ['Under 1,000 sq ft', '1,000-2,000 sq ft', '2,000-3,000 sq ft', 'Over 3,000 sq ft']
    },
    {
      id: 'priorities',
      label: 'What are your top cleaning priorities?',
      type: 'checkbox',
      options: [
        'Deep cleaning bathrooms',
        'Kitchen sanitization',
        'Dusting and allergen removal',
        'Floor care',
        'Window cleaning',
        'Organization'
      ]
    },
    {
      id: 'pain_points',
      label: 'What are your current cleaning pain points?',
      type: 'textarea',
      placeholder: 'Tell us about your specific cleaning challenges...'
    },
    {
      id: 'pets',
      label: 'Do you have any pets?',
      type: 'radio',
      options: ['Yes', 'No']
    },
    {
      id: 'contact',
      label: 'Your Contact Information',
      type: 'group',
      fields: [
        { id: 'name', label: 'Name', type: 'text', required: true },
        { id: 'email', label: 'Email', type: 'email', required: true },
        { id: 'phone', label: 'Phone', type: 'tel', required: true }
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Modal
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="shadow-xl"
          >
            <CloseButton onClick={onClose}>
              <X size={24} />
            </CloseButton>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <h2 className="text-4xl font-light mb-12 text-gray-800">
                Consultation Questionnaire
              </h2>
              
              {questions.map((question) => (
                <div key={question.id} className="space-y-3">
                  <label className="block text-lg font-medium text-gray-700">
                    {question.label}
                  </label>
                  
                  {question.type === 'select' && (
                    <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl 
                      focus:ring-2 focus:ring-[#8B9D6C] focus:border-[#8B9D6C] text-gray-700
                      placeholder-gray-400 transition-all hover:border-gray-300">
                      <option value="">Select an option</option>
                      {question.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  )}
                  
                  {question.type === 'checkbox' && (
                    <div className="space-y-3">
                      {question.options.map(option => (
                        <label key={option} className="flex items-center space-x-3 text-gray-700">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 rounded border-gray-300 bg-gray-50 
                              checked:bg-[#8B9D6C] checked:border-[#8B9D6C] focus:ring-[#8B9D6C]
                              hover:border-gray-400 transition-colors"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  
                  {question.type === 'textarea' && (
                    <textarea
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl 
                        focus:ring-2 focus:ring-[#8B9D6C] focus:border-[#8B9D6C] text-gray-700
                        placeholder-gray-400 min-h-[120px] transition-all hover:border-gray-300"
                      rows={4}
                      placeholder={question.placeholder}
                    />
                  )}
                  
                  {question.type === 'radio' && (
                    <div className="space-y-3">
                      {question.options.map(option => (
                        <label key={option} className="flex items-center space-x-3 text-gray-700">
                          <input 
                            type="radio" 
                            name={question.id} 
                            className="w-5 h-5 border-gray-300 bg-gray-50 
                              checked:bg-[#8B9D6C] checked:border-[#8B9D6C] focus:ring-[#8B9D6C]
                              hover:border-gray-400 transition-colors"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  
                  {question.type === 'group' && (
                    <div className="space-y-4">
                      {question.fields.map(field => (
                        <div key={field.id}>
                          <label className="block text-sm font-medium text-gray-600 mb-1">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            required={field.required}
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl 
                              focus:ring-2 focus:ring-[#8B9D6C] focus:border-[#8B9D6C] text-gray-700
                              placeholder-gray-400 transition-all hover:border-gray-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <button
                type="submit"
                className="w-full bg-[#8B9D6C] text-white py-4 px-8 rounded-xl text-lg font-medium
                  hover:bg-[#7A8C5B] transition-all shadow-md hover:shadow-lg mt-8"
              >
                Submit Consultation Request
              </button>
            </form>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;