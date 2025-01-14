import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import cardsArr from '../resources/cards'

const ProjectsBar = () => {
  const [cards, setCards] = useState([]);


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cards'));
    if (items) {
     setCards(items);
    }
    else{
      localStorage.setItem('cards', JSON.stringify(cardsArr));
      setCards(cardsArr);
    }
  }, []);


  useEffect(()=>{
    if (cards.length > 0){
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  }, [cards]);


  // this function is passed as a prop to the Card component
  const handleButtonClick = (card, i) => {
    console.log(`card is : ${card.heading}`);
    let temp = [...cards];
    temp[i].liked = !temp[i].liked;
    setCards(temp);
  };


  return (
    <div>
      <div className='projects-card-container'>
        {cards.map((card, idx)=> 
            <Card card={card} i={idx} onButtonClick={handleButtonClick}/>
        )}
      </div>

      <br/>
      <br/>
    </div>
  )
}

export default ProjectsBar
