import React from 'react';
import { Container, TitleContainer, Controlles } from "./styles";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}
const ContentHeader: React.FC<IContentHeaderProps> = ({
  title, lineColor, children
}) => {

  return (
    <Container >
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controlles>
        {children}
      </Controlles>
    </Container>
  );
}

export default ContentHeader;