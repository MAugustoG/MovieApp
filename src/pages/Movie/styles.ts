// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';

export const StyledGrid = styled(Grid)`
  padding: 2rem;
`;

interface StyledBannerProps {
  url: string;
}

export const StyledBanner = styled(Grid)<StyledBannerProps>`
  height: 50vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.25;
    content: '';
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ url }) => `url(${url})`};
  }

  &::after {
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 100px;
    position: absolute;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;
