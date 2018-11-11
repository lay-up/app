const getTotals = () => (
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{
					month: 'setembro',
					value: 2535.12
				},
				{
					month: 'outubro',
					value: 3512.12
				}
			])
		}, 3000)
	})
)

export default { getTotals }