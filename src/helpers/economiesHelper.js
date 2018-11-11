const getTotalEconomies = economies => ({
	value: economies.reduce((accumulated, current) => (
		accumulated + current.value
	), 0)
})

export default { getTotalEconomies }