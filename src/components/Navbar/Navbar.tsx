import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import FavoriteTable from './FavoriteTable';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {

    const stateFavorites = useSelector((store: AppStore) => store.favorites);

    const handleIconClick = () => {
        dialogOpenSubject$.setSubject = true;
    }

    return (
        <>
            <CustomDialog>                
                <FavoriteTable />
            </CustomDialog>
            <AppBar position="fixed">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    React App
                </Typography>
                <Button color="inherit">Login</Button>
                <IconButton color="secondary" aria-label="favorites" component='label' onClick={handleIconClick}>
                    <FavoriteIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
        </>)
};

export default Navbar;
