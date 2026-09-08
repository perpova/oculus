import { createContext, useContext, useState } from "react";
import QuoteFormModal from "../components/ContactUs/QuoteFormModal";

const QuoteModalContext = createContext(null);

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = () => setIsOpen(true);
  const closeQuoteModal = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      {children}
      <QuoteFormModal isOpen={isOpen} onClose={closeQuoteModal} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}