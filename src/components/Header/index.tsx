import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  OnOpenNewTransactionModal: () => void;
}

export function Header({OnOpenNewTransactionModal}:HeaderProps){
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={OnOpenNewTransactionModal}>
          Nova transação
        </button>
        
      </Content>
    </Container>
  );
}

