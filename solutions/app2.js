
const isWorkDay = d => 1 <= d.getDay() && d.getDay() <=5

const countOfWorkingDaysBetween = (start, end) =>
{
    let count = 0
    for(let d=start; d<=end; d.setDate(d.getDate() + 1))
        count += isWorkDay(d) + 0
    return count
}

const countOfWorkingDays = () =>
{
    const thisYear = (new Date()).getFullYear()
    const startDate = new Date(thisYear, 0, 1)
    const endDate =new Date(thisYear, 8-1, 31)
    return countOfWorkingDaysBetween(startDate, endDate)
}

export default countOfWorkingDays;
