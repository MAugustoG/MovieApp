// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import SearchIcon from '@mui/icons-material/Search';
import { InputBaseProps } from '@mui/material/InputBase';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Search, SearchIconWrapper, StyledInputBase } from './styles';

type SearchInputProps = Omit<InputBaseProps, 'inputProps'>;

export const SearchInput = ({ ...rest }: SearchInputProps) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase {...rest} inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
};
