import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const Background = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#1e1e1e',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
});

export const LeftPanel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '40%',
  padding: '2rem',
  '@media (max-width: 768px)': {
    width: '100%',
    padding: '1rem',
    alignItems: 'center',
  },
});

export const Logo = styled('img')({
  width: '150px',
  marginBottom: '2rem',
});

export const RightPanel = styled('div')({
  flex: 1,
  backgroundImage: 'url(https://i.ibb.co/zJMQqV1/image-dt-money.png)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

export const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#ffffff',
    backgroundColor: '#444343',
    borderRadius: '4px',
    padding: '10px',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '4px',
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      backgroundColor: '#444343',
      borderRadius: '4px',
    },
  },
});