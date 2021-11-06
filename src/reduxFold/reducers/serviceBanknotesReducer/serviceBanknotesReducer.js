import setsBanknotes from "../../../DB/setsBanknotes";

const initSet = {...setsBanknotes[0]}

const initState = {
    banknotes: initSet,
    amountSets: setsBanknotes.length,
    sumToIssue: 0,
    cancelleAmount: 0,
    inputSum: 0,
    requiredBanknotes: {
        fifty: 0,
        hundred: 0,
        twoHundred: 0,
        fiveHundred: 0,
        thousand: 0,
        twoThousand: 0,
        fiveThousand: 0,
    },
}

export const serviceBanknotesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_SET_BUNKNOTES': 
            const { id } = action.payload;
            return {...initState, banknotes: {...setsBanknotes[id]}};
        case 'INPUT_REQUEST_SUM':
            const { inputSum, requiredBanknotes, cancelleAmount } = action.payload;
            const sumToIssue = inputSum - cancelleAmount;
            return {...state, inputSum, requiredBanknotes, cancelleAmount, sumToIssue };
        case 'WITHDRAWAL_OF_THE_AMOUNT':
            const requiredBanknotesCount = {};
            const banknotesArray = Object.keys(state.banknotes);
            banknotesArray.forEach( item => requiredBanknotesCount[item] = state.banknotes[item] - state.requiredBanknotes[item])
            return {...initState, banknotes: {...requiredBanknotesCount}};
        default: 
            return {...state};
    }
}