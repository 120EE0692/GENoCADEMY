import React from 'react';
import { useTheme } from '@mui/material/styles';

// Libraries
import useMediaQuery from '@mui/material/useMediaQuery';

// Components
import DesktopNavbar from './Navbar';
import MobileNavbar from './MobNav';


const Nav = () => {
    const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return matches ? <DesktopNavbar /> : <MobileNavbar />;
};
export default Nav;
