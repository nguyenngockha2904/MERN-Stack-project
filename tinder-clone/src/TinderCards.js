// @flow 
import { SwipeableDrawer } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
export const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            name: "Jeff Bezoz",
            url: "https://images.pexels.com/photos/3310693/pexels-photo-3310693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            name: "Jessica Rose",
            url: "https://images.pexels.com/photos/1006265/pexels-photo-1006265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            name: "Kevins Jess",
            url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            name: "Justin Safir",
            url: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
    ]);
    const swiped = useCallback((director, nameToDelete) => {
        console.log("removing: " + nameToDelete);

    }, []);
    const outOfFrame = useCallback((name) => {
        console.log(name + "left the screen");
    }, []);
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {
                    people.map((person, index) => (
                        <TinderCard className="swipe"
                            key={person.name}
                            preventSwipe={["Up", "Down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div className="card" style={{ backgroundImage: `url(${[person.url]})` }}>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    );
};