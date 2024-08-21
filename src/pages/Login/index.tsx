import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, Typography, Link, Box } from '@mui/material';
import { Background, LeftPanel, RightPanel, StyledTextField, Logo } from './styles';
import logo from '../../assets/symbol.png';

export const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleForgotPasswordClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate('/password-recovery');
    };

    const handleRegisterClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate('/register');
    };

    return (
        <Background>
            <LeftPanel>
                <Logo src={logo} alt="DT Money" />
                <Typography variant="h4" component="h1" sx={{ color: '#358f4b', marginBottom: '2rem' }}>
                    Login
                </Typography>
                <form noValidate autoComplete="off">
                    <StyledTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Digite seu email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <StyledTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Digite sua senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label={<Typography sx={{ color: '#ffffff' }}>Lembrar de mim</Typography>}
                        />
                        <Link href="#" variant="body2" sx={{ color: '#358f4b', textDecoration: 'none' }} onClick={handleForgotPasswordClick}>
                            Esqueci minha senha
                        </Link>
                    </Box>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#389c50', color: '#000000', '&:hover': { backgroundColor: '#358f4b' } }}>
                        Entrar
                    </Button>
                    <Typography variant="body2" sx={{ color: '#ffffff', display: 'inline' }}>
                        Ainda não possui uma conta?{' '}
                    </Typography>
                    <Link href="#" variant="body2" sx={{ color: '#358f4b', display: 'inline', textDecoration: 'none' }} onClick={handleRegisterClick}>
                        Cadastre-se
                    </Link>
                </form>
            </LeftPanel>
            <RightPanel />
        </Background>
    );
};
