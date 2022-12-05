// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
  width: '100%',
  marginLeft: 0,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    marginLeft: theme.spacing(1),
  },

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  pointerEvents: 'none',
  justifyContent: 'center',
  padding: theme.spacing(0, 2),
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',

  '& .MuiInputBase-input': {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,

    [theme.breakpoints.up('sm')]: {
      width: '12ch',

      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
