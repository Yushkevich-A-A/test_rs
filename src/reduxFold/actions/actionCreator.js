export const changeSetBanknotes = (id) => {
    return { type: 'CHANGE_SET_BUNKNOTES', payload: {id} };
}

export const inputRequestSum = (inputSum, requiredBanknotes, cancelleAmount) => {
    return { type: 'INPUT_REQUEST_SUM', payload: {inputSum, requiredBanknotes, cancelleAmount} };
}