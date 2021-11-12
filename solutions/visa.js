const checkVisa = cardNumber => {
    const cardNumberRegex = /^4\d{15}$/;
    return cardNumber.match(cardNumberRegex) ? true : false;
}

export default checkVisa;