const formatMoney = money => (
	money.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
)

export default { formatMoney }