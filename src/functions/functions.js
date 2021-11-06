export function parserBanknotes(value, avaliableBanknotesInput) {
    const requiredBanknotes = {
        fifty: 0,
        hundred: 0,
        twoHundred: 0,
        fiveHundred: 0,
        thousand: 0,
        twoThousand: 0,
        fiveThousand: 0,
    };

    const avaliableBanknotes = {...avaliableBanknotesInput};

    const arrayBanknotes = {
        fifty: 50,
        hundred: 100,
        twoHundred: 200,
        fiveHundred: 500,
        thousand: 1000,
        twoThousand: 2000,
        fiveThousand: 5000,
    };


    const arrayKeysInObject = Object.keys(requiredBanknotes).reverse();

    const sumInBank = arrayKeysInObject.map(
        (item) => arrayBanknotes[item] * avaliableBanknotes[item]
        ).reduce( (sum, acc) => sum + acc, 0 );

    // Получаю процентное соотношение сумм разных купюр в банке
    const percentagesOfBanknotesInBank = {}
    arrayKeysInObject.forEach( (item) => {
        percentagesOfBanknotesInBank[item] = (Math.floor(avaliableBanknotes[item] * arrayBanknotes[item] / sumInBank * 10) / 10) || 0;
    } )

    console.log('проценты',percentagesOfBanknotesInBank);

    // Проверка запрошенной суммы в банке. Если сумма в банке меньше запрошенной, то сразу возвращаем результат,

    if ( sumInBank <= value) {
        const remains = value - sumInBank;;
        const requiredBanknotes = {...avaliableBanknotes};
        return { requiredBanknotes, remains };
    }

    // Проверка суммы доступной к выдаче

    let remains = value;

    if (remains >= 10000) {
        const arraySum = []

        arrayKeysInObject.forEach((item) => {
            const valueOfPercendage = remains * percentagesOfBanknotesInBank[item];
            const remainsOfPercantageValue = valueOfPercendage % arrayBanknotes[item];

            const countOfBanknotes = (valueOfPercendage - remainsOfPercantageValue) / arrayBanknotes[item];

            requiredBanknotes[item] += (countOfBanknotes >= avaliableBanknotes[item]) ? avaliableBanknotes[item]: countOfBanknotes;
            arraySum.push(requiredBanknotes[item] * arrayBanknotes[item]);
        })
        remains = remains - arraySum.reduce((sum, acc) => sum + acc, 0);
        if (remains < 0) {
            debugger;
        }
    }

    // обновляю буфер доступных купюр

    arrayKeysInObject.forEach( item => avaliableBanknotes[item] -= requiredBanknotes[item]);
    
    // Получение процентного соотношения купюр в банке
        arrayKeysInObject.forEach( (item) => {
            if (remains >= arrayBanknotes[item] ) {
                const { remainsValue, banknotesCount } = getAmountBanknotesAndRemains(remains, arrayBanknotes[item], avaliableBanknotes[item] );
                remains = remainsValue;
                requiredBanknotes[item] += banknotesCount;
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
