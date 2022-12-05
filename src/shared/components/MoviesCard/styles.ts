// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import styled from '@emotion/styled';
import Card from '@mui/material/Card';

export const StyledCard = styled(Card)`
  background: transparent;
  transition: transform 0.35s;

  &:hover {
    transform: scale(1.05);
  }
`;
