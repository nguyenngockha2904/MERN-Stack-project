// @flow 
import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from '@material-ui/core';
import tinderIcon from './assets/images/tinder.png'
export const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="inherit" className="header__icon" />
            </IconButton>

            <img src={tinderIcon} alt="tinderIcon" className="header__logo" />
            <IconButton>
                <ForumIcon fontSize="inherit" className="header__icon" />
            </IconButton>
        </div>
    );
};