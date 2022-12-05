// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import Logo from '../../../../assets/images/logo.svg';
import { SearchInput } from '../../../../shared/components/SearchInput';

export const Header = () => {
  const navigate = useNavigate();

  const handleOnChangeSearchValue = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    const { value } = event.currentTarget;

    if (value.trim().length < 1) {
      navigate(`/`);
      return;
    }

    navigate(`/search?q=${value}`, { replace: true });
  };

  return (
    <AppBar
      elevation={0}
      position='sticky'
      variant='outlined'
      sx={{ padding: '1rem' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'space',
          justifyContent: 'space-between',
        }}
      >
        <Link to='/'>
          <Box
            src={Logo}
            alt='tmdb-logo'
            component='img'
            sx={{ height: 50, width: 100 }}
          />
        </Link>
        <SearchInput
          placeholder='Search Movie…'
          onChange={handleOnChangeSearchValue}
        />
      </Toolbar>
    </AppBar>
  );
};
