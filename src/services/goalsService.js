import RequestHelper from 'helpers/requestHelper'

const getGoals = () => (
	RequestHelper.get('/goals')
)

export default { getGoals }