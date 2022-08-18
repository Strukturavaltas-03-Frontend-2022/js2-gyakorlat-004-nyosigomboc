const isWorkDay = (d) => d.getDay() >= 1 && d.getDay() <= 5;

const countOfWorkingDaysBetween = (start, end) => {
  let count = 0;
  for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
    count += isWorkDay(d) + 0; // convert to num
  }
  return count;
};

/* // It looks like tail recursion isn't optimized away in JS. Just dies.
const countOfWorkingDaysBetweenRecursive = (start, end, workDaysSoFar = 0) => (
  (start > end) ? 0 : countOfWorkingDaysBetweenRecursive(
    new Date(start.getFullYear, start.getMonth(), start.getDate() + 1),
    end,
    workDaysSoFar + (isWorkDay(start) + 0),
  )
);
*/

const countOfWorkingDays = () => {
  const thisYear = (new Date()).getFullYear();
  const startDate = new Date(thisYear, 0, 1);
  const endDate = new Date(thisYear, 8 - 1, 31);
  return countOfWorkingDaysBetween(startDate, endDate);
};

export default countOfWorkingDays;
