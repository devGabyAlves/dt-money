import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Logo, StyledButton, StyledLink, LeftSection, RightSection, Root, Input } from './registerStyles';
import logo from '../../assets/symbol.png';

export const Register: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Root>
          <LeftSection>
            <Logo src={logo} alt="DT Money" />
            <Typography variant="h5" style={{ color: '#4CAF50' }}>Cadastre-se</Typography>
            <Input
              variant="outlined"
              placeholder="Nome Completo"
            />
            <Input
              variant="outlined"
              placeholder="CPF"
            />
            <Input
              variant="outlined"
              placeholder="Celular"
            />
            <Input
              variant="outlined"
              placeholder="Digite seu e-mail"
            />
            <Input
              variant="outlined"
              placeholder="Digite sua senha"
            />
            <Input
              variant="outlined"
              placeholder="Confirme sua senha"
            />
            <StyledButton>Cadastrar</StyledButton>
            <StyledLink href="#" onClick={() => navigate('/login')}>Voltar</StyledLink>
          </LeftSection>
          <RightSection />
        </Root>
      );
}
