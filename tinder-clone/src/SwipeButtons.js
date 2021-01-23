
import React from 'react';
import "./SwipeButtons.css";
import RelayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
export const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <RelayIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="inherit" />
            </IconButton>
        </div>
    );
};