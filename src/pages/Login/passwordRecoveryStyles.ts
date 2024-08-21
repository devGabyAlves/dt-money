import { styled } from '@mui/system';
import { Box, Button, TextField, Link } from '@mui/material';
import loginBackground from '../../assets/login_background.png';

export const Root = styled(Box)({
  display: 'flex',
  height: '100vh',
});

export const LeftSection = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  padding: '0 20px',
});

export const RightSection = styled(Box)({
  flex: 1,
  backgroundImage: `url(${loginBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '@media (max-width: 768px)': {
    display: 'none',  
  },
});

export const Logo = styled('img')({
  width: '150px',
  marginBottom: '2rem',
  '@media (max-width: 768px)': {
    width: '120px',
    marginBottom: '1.5rem',
  },
});

export const Input = styled(TextField)({
  margin: '20px 0',
  width: '30%', 
  '& .MuiInputBase-root': {
    backgroundColor: '#333',
    borderRadius: '25px',  
    padding: '10px 20px',  
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#444',
    borderRadius: '25px',  
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#888',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#4CAF50',
  },
  '& .MuiInputLabel-root': {
    color: '#aaa',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#4CAF50',
  },
  '& .MuiInputBase-input': {
    color: '#fff',  
  },
});

export const StyledButton = styled(Button)({
  marginTop: '20px',
  width: '10%',  
  backgroundColor: '#4CAF50',
  color: '#ffffff',
  borderRadius: '25px',  
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

export const StyledLink = styled(Link)({
  marginTop: '30px',
  color: '#ffffff',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});
