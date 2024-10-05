"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Button } from '@mui/material';

interface props {
  onClick: () => void;
}

export const Header: React.FC<props> = (props) => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'gray' }}>
      <Toolbar>
          Header
      </Toolbar>
      <Button onClick={props.onClick}>Open drawer</Button>
    </AppBar>
  );
};
