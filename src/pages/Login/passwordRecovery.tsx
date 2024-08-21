import React from 'react';
import { Typography } from '@mui/material';
import logo from '../../assets/symbol.png';
import { useNavigate } from 'react-router-dom';
import {
  Root,
  LeftSection,
  RightSection,
  Logo,
  Input,
  StyledButton,
  StyledLink,
} from './passwordRecoveryStyles';

export const PasswordRecovery: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Root>
      <LeftSection>
        <Logo src={logo} alt="DT Money" />
        <Typography variant="h5" style={{ color: '#4CAF50' }}>Recuperar senha</Typography>
        <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
          Para recuperar a sua senha preencha o campo abaixo com seu email ou seu número de celular.
        </Typography>
        <Input
          variant="outlined"
          placeholder="Digite seu email ou número de celular"
        />
        <StyledButton>Enviar</StyledButton>
        <StyledLink href="#" onClick={() => navigate('/login')}>Voltar</StyledLink>
      </LeftSection>
      <RightSection />
    </Root>
  );
};
