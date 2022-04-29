import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from "react-modal";
import { TransactionsModal } from "./components/Modal";

Modal.setAppElement("#root");

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />
      <TransactionsModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal} />
      <GlobalStyle />
    </>
  );
}
