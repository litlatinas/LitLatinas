import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const menuItems = [
  'Podcasts',
  'Resources',
  'Books',
  'Team',
  'Contact Us',
];


export default function MenuDropDown() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuList = menuItems.map((item, i) => {
    return (
      <MenuItem onClick={handleClose} key={i}>
        <a href={`#${item.toLowerCase()}`}>
          {item}
        </a>
      </MenuItem>
    );
  });

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuList}
      </Menu>
    </div>
  );
}
