import moment from 'moment'

const isGoalValid = goal => (
	goal.description &&
	goal.value &&
	goal.date &&
	sparesAreEnoughToSaveUp(goal.expenses, goal.value, goal.salary, goal.date)
)

const sparesAreEnoughToSaveUp = (expenses, value, salary, date) => {
	return getNewEconomies(salary, expenses, date) > getNecessarySavings(value, date)
}

const getNewEconomies = (salary, expenses, date) => {
	return (salary - expenses.reduce((a, b) => a + b.changedValue || b.value, 0)) * getMonthDifference(date)
}

const getNecessarySavings = (value, date) => {
	return value / getMonthDifference(date)
}

const getMonthDifference = date => {
	let { year, month, day } = date
	return parseInt(moment(new Date(year, month, day)).diff(new Date(), 'months', true))
}

const getSavingsDifference = goal => (
	goal.description &&
	goal.value &&
	goal.date &&
	getNecessarySavings(goal.value, goal.date) - getNewEconomies(goal.salary, goal.expenses, goal.date)
)

export default { isGoalValid, getSavingsDifference }