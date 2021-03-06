import React from 'react';

import { 
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink
} from "./styles";

import { 
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
 } from "react-icons/md";

const Aside: React.FC = () => {
  const logoImg = require("../../assets/logo.svg").default as string;

	return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        
        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saidas
        </MenuItemLink>
        
        <MenuItemLink href="#">
          <MdExitToApp />
          sair
        </MenuItemLink>
        
      </MenuContainer>

    </Container>
	);
}

export default Aside;