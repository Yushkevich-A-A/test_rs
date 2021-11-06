export function parserBanknotes(value, currentBanknotes) {
    const requiredBanknotes = {
        fifty: 0,
        hundred: 0,
        twoHundred: 0,
        fiveHundred: 0,
        thousand: 0,
        twoThousand: 0,
        fiveThousand: 0,
    };

    const arrayBanknotes = [5000, 2000, 1000, 500, 200, 100, 50];
    const arrayKeysInObject = Object.keys(requiredBanknotes).reverse();
    const sumInBank = arrayBanknotes.map(
        (item, ind) => item * currentBanknotes[arrayKeysInObject[ind]]
        ).reduce( (sum, acc) => sum + acc, 0 );
    if ( sumInBank <= value) {
        const remains = value - sumInBank;;
        const requiredBanknotes = {...currentBanknotes};
        return { requiredBanknotes, remains };
    }

    let remains = value;

    arrayBanknotes.forEach( (item, index) => {
        if (remains >= item ) {
            const textNameBanknotes = arrayKeysInObject[index];
            const { remainsValue, banknotesCount } = getAmountBanknotesAndRemains(remains, item, currentBanknotes[textNameBanknotes] );
            remains = remainsValue;
            requiredBanknotes[textNameBanknotes] = banknotesCount;
        }
    } );
        return { requiredBanknotes, remains }
}   

// при использовании алгоритма где в равной степени расходуются купюры, эта функция бесполезна

const getAmountBanknotesAndRemains = (value, banknote, avaliableBanknotes) => {
    let banknotesCount = null;
    let remainsValue = value % banknote;
    const resultAmount = (value - remainsValue) / banknote;
    if (avaliableBanknotes < resultAmount) {
        remainsValue = (resultAmount - avaliableBanknotes) * banknote + remainsValue;
        banknotesCount = avaliableBanknotes;
    } else {
        banknotesCount = resultAmount;
    }
    return { remainsValue, banknotesCount }
}