
const getSecondsOfThisYearUntilNow = () =>
{
    const thisYear = (new Date()).getFullYear()
    const startDate = new Date(thisYear, 0, 1)
    const endDate = new Date(thisYear, 8-1, 31)
    return Math.round((endDate.getTime() - startDate.getTime()) / 1000)
}


export default getSecondsOfThisYearUntilNow;
