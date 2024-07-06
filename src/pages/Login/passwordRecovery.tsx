// src/components/PasswordRecovery.tsx

import React from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Box)({
  display: 'flex',
  height: '100vh',
});

const LeftSection = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  padding: '0 20px',
});

const RightSection = styled(Box)({
  flex: 1,
  backgroundImage: 'url(https://i.ibb.co/zJMQqV1/image-dt-money.png)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const Logo = styled(Box)({
  marginBottom: '30px',
});

const Input = styled(TextField)({
  margin: '20px 0',
  width: '100%',
  '& .MuiInputBase-root': {
    backgroundColor: '#333',
    color: '#fff',
  },
});

const StyledButton = styled(Button)({
  marginTop: '20px',
  width: '100%',
  backgroundColor: '#4CAF50',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const StyledLink = styled(Link)({
  marginTop: '10px',
  color: '#ffffff',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export const PasswordRecovery: React.FC = () => {
  return (
    <Root>
      <LeftSection>
        <Logo>
          <Typography variant="h4">DT Money</Typography>
        </Logo>
        <Typography variant="h5">Recuperar senha</Typography>
        <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
          Para recuperar a sua senha preencha o campo abaixo com seu email ou seu número de celular.
        </Typography>
        <Input
          variant="outlined"
          placeholder="Digite seu email ou número de celular"
        />
        <StyledButton>Enviar</StyledButton>
        <StyledLink href="#">Voltar</StyledLink>
      </LeftSection>
      <RightSection />
    </Root>
  );
};

