import React, {useState} from "react";

const Card = () => {
  const cardData = [
    {id: 1,
    front: "猫",
    back: "ねこ | neko | cat"},
    {id: 2,
    front: "犬",
    back: "いぬ | inu | dog"},
    {id: 3,
    front: "雨",
    back: "あめ | ame | rain"},
    {id: 4,
    front: "家",
    back: "いえ | ie | house"},
    {id: 5,
    front: "お母さん",
    back: "おかあさん | okāsan | mother"},
    {id: 6,
    front: "お父さん",
    back: "おとうさん | otōsan | father"},
    {id: 7,
    front: "雷",
    back: "かみなり | kaminari | lightning"},
    {id: 8,
    front: "電話",
    back: "でんわ | denwa | phone"},
    {id: 9,
    front: "車",
    back: "くるま | kuruma | car"},
    {id: 10,
    front: "机",
    back: "つくえ | tsukue | desk"},
  ]


  function handleFlip() {
    setFlipped(!flipped);
  }
  
  const [flipped, setFlipped] = useState(false);

  function handleNext() {
    if (index < cardData.length - 1) {
      setIndex(index + 1);
    }
    setFlipped(false);
  }

  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
    setFlipped(false);
  }

  function handleRandom() {
    setIndex(Math.floor(Math.random() * 10));
    setFlipped(false);
  }

  const [index, setIndex] = useState(0);

  let card = cardData[index];
  
  return(
    <div className="container">
      <div className="Card" onClick={handleFlip}>
        <p>{flipped ? card.back : card.front}</p>
      </div>
      <div className="arrowButtons">
        <button id="prevArrow" onClick={handlePrev}>←</button>
        <button id="nextArrow" onClick={handleNext}>→</button>
        <button id="randomArrow" onClick={handleRandom}>Random</button>
      </div>
    </div>
  )
}

export default Card;