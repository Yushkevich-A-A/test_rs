import setsBanknotes from "../../../DB/setsBanknotes";

const initState = {
    banknotes: setsBanknotes[0],
}

export const serviceBanknotesReducer = (state = initState, action) => {
    switch (action.type) {
        default: 
            return {...state};
    }
}