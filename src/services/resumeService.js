import EconomiesHelper from 'helpers/economiesHelper'
import RequestHelper from 'helpers/requestHelper'

const getTotals = () => (
	RequestHelper.get('/transactions/totals').then(expenses => [
		...expenses, EconomiesHelper.getTotalEconomies(expenses)
	])
)

export default { getTotals }