import { StyleSheet, Dimensions } from 'react-native'
import colors from 'values/colors'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
	goals: {
		paddingBottom: width / 10
	},
	title: {
		paddingHorizontal: width / 10,
		paddingTop: width / 10,
		fontSize: width / 13,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	goalWrapper: {
		marginLeft: width / 15,
		borderBottomColor: colors.grey,
		borderBottomWidth: height / 1000
	},
	goal: {
		paddingTop: width / 15,
		paddingRight: width / 15,
		paddingBottom: width / 15
	},
	description: {
		fontWeight: 'bold',
		fontSize: width / 15
	},
	bar: {
		height: 8,
		marginVertical: height / 80,
		backgroundColor: colors.grey
	},
	barPercentage: {
		height: '100%',
		backgroundColor: colors.green
	},
	values: {
		alignSelf: 'flex-end'
	},
	newGoal: {
		flex: 1,
	    flexDirection: 'column',
	    justifyContent: 'flex-start',
	    borderColor: colors.grey,
	    borderStyle: 'dotted',
	    borderWidth: 2,
	    borderRadius: 1,
	    position: 'relative',
	    padding: width / 15
	},
	newGoalLabel: {
		fontSize: width / 20,
		color: colors.grey,
		textAlign: 'center'
	}
})

export default style