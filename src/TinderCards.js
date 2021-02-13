import React, { useState } from 'react'
import TinderCard from 'react-tinder-card' // 이전에 설치한것
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name : 'Elon Musk',
            url
            :'https://nypost.com/wp-content/uploads/sites/2/2018/07/tesla-debt_1.jpg?quality=80&strip=all',
        },
        {
            name : 'Jeff Bezoz',
            url
            : 'https://api.time.com/wp-content/uploads/2020/07/jeff-bezos.jpg'
        },
    ]);


    const swiped = (direction, nameToDelete) =>{
        console.log("removing " + nameToDelete)
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    };
    return (
        <div className='tinderCards'>
          <div className='tinderCards__cardContainer'>   
          {people.map((person) => (
            <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up','down']}
                onSwipe={(dir)=> swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
            >
                    <div
                    style={{ backgroundImage: 'url(' + person.url + ')' }}  //skip inline styling
                    className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>

            </TinderCard>
          ))}  
          </div>
        </div>
    )
}

export default TinderCards
