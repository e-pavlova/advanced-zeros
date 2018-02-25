module.exports = function getZerosCount(number, base)
{
    let numbOfZeros = number;
    let numbBase = base;

    for (let i = 2; i <= base; i ++)
    {
        if (numbBase % i === 0)
        {
            let powerOfNumber = 0;

            while (numbBase % i === 0)
            {
                powerOfNumber += 1;
                numbBase = numbBase / i;
            }

            let countOfPr = 0;
            let currNumbPow = i;
            let initNumber = number;

            while ((number / currNumbPow) > 0)
            {
                countOfPr += Math.floor(initNumber / currNumbPow);
                currNumbPow *= i;
            }

            let countToPow = countOfPr / powerOfNumber;

            numbOfZeros = Math.min(numbOfZeros, countToPow);
        }
    }
    return Math.floor(numbOfZeros);
}