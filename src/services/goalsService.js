const getGoals = () => (
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{
					description: 'Viajar para Acapulco',
					spared: 5000,
					value: 10000
				},
				{
					description: 'Viajar para Tijuana sem passaporte e ficar loiro',
					spared: 7600,
					value: 8000
				}
			])
		}, 500)
	})
)

export default { getGoals }