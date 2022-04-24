const Card = (content) => {
  let cardElement = document.createElement('div')
  cardElement.classList.add('card')
  cardElement.innerHTML = content
  // console.log(cardElement)
  return cardElement
}

export default Card
