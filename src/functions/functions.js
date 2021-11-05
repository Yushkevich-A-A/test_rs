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
    // const currentBanknotes = {...currentBanknotes};


    const fifty = 50;
    const hundred = 100;
    const twoHundred = 200;
    const fiveHundred = 500;
    const thousand = 1000;
    const twoThousand = 2000;
    const fiveThousand = 5000;

    let remains = value;
    
    if (remains >= fiveThousand) {
        console.log(fiveThousand);
        const { remainsValue, banknotesCount } = getAmountBanknotesAndRemains(remains, fiveThousand, currentBanknotes.fiveThousand );
        remains = remainsValue;
        requiredBanknotes.fiveThousand = banknotesCount;
        console.log('зашли в функцию')
    }

    if (remains >= twoThousand) {
        const { remainsValue, banknotesCount } = getAmountBanknotesAndRemains(remains, twoThousand, currentBanknotes.twoThousand );
        remains = remainsValue;
        requiredBanknotes.twoThousand = banknotesCount;
    }

    if (remains >= thousand) {
        const { remainsValue, banknotesCount } = getAmountBanknotesAndRemains(remains, thousand, currentBanknotes.thousand );
        remains = remainsValue;
        requiredBanknotes.thousand = banknotesCount;
    }

    if (remains >= fiveHundred) {
        const { remainsValue, banknotesCount } = getAmountBanknotesAndRemains(remains, fiveHundred, currentBanknotes.fiveHundred );
        remains = remainsValue;
        requiredBanknotes.fiveHundred = banknotesCount;
    }

    if (remains >= twoHundred) {
        const { remainsValue, banknotesCount } = getAmountBanknotesAndRemains(remains, twoHundred, currentBanknotes.twoHundred );
        remains = remainsValue;
        requiredBanknotes.twoHundred = banknotesCount;
    }

    if (remains >= hundred) {
        const { remainsValue, banknotesCount } = getAmountBanknotesAndRemains(remains, hundred, currentBanknotes.hundred );
        remains = remainsValue;
        requiredBanknotes.hundred = banknotesCount;
    }

    if (remains >= fifty) {
        const { remainsValue, banknotesCount } = getAmountBanknotesAndRemains(remains, fifty, currentBanknotes.fifty );
        remains = remainsValue;
        requiredBanknotes.fifty = banknotesCount;
    }
    return { requiredBanknotes, remains }
}   

const getAmountBanknotesAndRemains = (value, banknote, avaliableBanknotes) => {
    console.log()
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