import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import { Container } from '@mui/material';
import CustomizedMenus from './LinkMenu';
type Anchor = 'left';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState<{ [key in Anchor]: boolean }>({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };


  return (
    <div>
      <Container><Box sx={{ display: 'flex', justifyContent:"space-between" }}>
      {/* Menu component on the left */}
      <Menu  />
      {/* Button to open the drawer */}
      <Button  sx={{ display: { xs: 'block', md: 'block' , lg :"none" } }} onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </Button>
      <CustomizedMenus/>

      {/* Drawer for the menu on the left */}
    </Box></Container>
    
  </div>
  );
}
