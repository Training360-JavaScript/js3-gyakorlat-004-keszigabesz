const checkVisa = cardNumber => {
    const cardNumberRegex = /^4\d{15}$/;
    return cardNumberRegex.test(cardNumber);
}

export default checkVisa;