// @flow 
import { SwipeableDrawer } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios.js';
export const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();
    }, []);


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