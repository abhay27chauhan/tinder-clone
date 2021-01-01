import React, { useEffect, useMemo, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from '../../axios';

function TinderCards() {
    const [monsters, setMonsters] = useState([]);
    const [lastDirection, setLastDirection] = useState()

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/card');

            setMonsters(req.data);
        }

        fetchData(); 
    }, [])

    let charactersState = monsters

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        setLastDirection(direction);
    }

    const outOfFrame = name => {
        console.log(name + " left the screen");
        charactersState = charactersState.filter(character => character.name !== name);
        setMonsters(charactersState);
    }

    return (
        <div className="tinderCards">
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
            <div className="tinderCards__cardContainer">
                {
                    monsters.map((monster) => (
                        <TinderCard 
                            className="swipe"
                            key={monster.id}
                            preventSwipe={["up", "down"]}
                            onSwipe={dir => swiped(dir, monster.name)}
                            onCardLeftScreen={() => outOfFrame(monster.name)}
                        >
                            <div
                                style={{backgroundImage: `url(https://robohash.org/${monster.id}?set=set2&size=220x220)`}}
                                className="card"
                            >
                                <h3>{monster.name}</h3>
                            </div>
                        </TinderCard>))
                }
            </div>
            <div className="tinderCards__textContainer">
                {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card to get started!</h2>}
            </div> 
        </div>
    )
}

export default TinderCards;
