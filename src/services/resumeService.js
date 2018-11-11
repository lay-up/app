import EconomiesHelper from 'helpers/economiesHelper'

const getTotals = () => (
	new Promise((resolve, reject) => {
		setTimeout(() => {
			let totalPerMonth = [
				{
					month: 'setembro',
					value: 2535.12
				},
				{
					month: 'outubro',
					value: 3512.12
				}
			]

			resolve([...totalPerMonth, EconomiesHelper.getTotalEconomies(totalPerMonth)])
		}, 500)
	})
)

export default { getTotals }