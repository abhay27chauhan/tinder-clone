import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from '../../axios';

function TinderCards() {
    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/card');

            setMonsters(req.data);
        }

        fetchData(); 
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = name => {
        console.log(name + " left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {
                    monsters.map(monster => (
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
        </div>
    )
}

export default TinderCards;
