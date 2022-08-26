import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewModal } from "./components/NewModal";
import { TransactionTable } from "./components/TransactionsTable";
import { TransactionsProvider } from "./TransactionsContext"
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header OnOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <GlobalStyle />
      <Dashboard/>
      <TransactionTable/>
      <NewModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      </TransactionsProvider>    
  );
}

 