import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import TableReports from '../TableReports';

interface IProps {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
}

export default function AnchorTemporaryDrawer({isOpen, setIsOpen}: IProps) {
  const closeDrawer = () => setIsOpen(false)

  return (
    <div>
          <Drawer
            anchor={'right'}
            open={isOpen}
            onClose={closeDrawer}
          >
           <TableReports />
          </Drawer>
    </div>
  );
}