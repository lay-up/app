import { StyleSheet, Dimensions, PixelRatio, NativeModules, Platform } from 'react-native'
import { Header } from 'react-navigation'
import colors from 'values/colors'

const { width, height } = Dimensions.get('window')

const style = StyleSheet.create({
	resume: {
		height: height - (
			Platform.OS === 'ios' ? 20 : NativeModules.StatusBarManager.HEIGHT
		) - Header.HEIGHT,
		backgroundColor: colors.green
	},
	sky: { 
		flex: 0.618
	},
	skyContainer: {
		height: height * 0.618,
		alignItems: 'center',
		justifyContent: 'center'
	},
	house: {
		flex: 0.382,
		position: 'relative',
		borderBottomColor: '#333333',
		borderBottomWidth: 12 / PixelRatio.get()
	},
	background: {
		flex: 1
	},
	house: {
		position: 'absolute',
		bottom: 0,
		width: width,
		height: height * 0.382
	},
	info: {
		position: 'relative',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	infoText: {
		fontSize: width / 16,
		color: colors.white,
	},
	infoBoldText: {
		fontWeight: 'bold',
		color: colors.orange
	},
	infoValuePrefix: {
		alignSelf: 'flex-start'
	},
	infoValueWrapper: {
		display: 'flex',
		flexDirection: 'row'
	},
	infoValue: {
		fontSize: width / 6,
		lineHeight: width / 5.5,
		marginTop: height / -500
	},
	infoValueLabel: {
		marginTop: height / -60,
		alignSelf: 'flex-end'
	},
	borderWrapper: {
		position: 'relative',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '100%',
		marginTop: height / 10,
		height: 2 / PixelRatio.get(),
	},
	lastBorder: {
		backgroundColor: colors.white,
		height: '100%',
		width: '50%',
		alignSelf: 'flex-start'
	},
	middleBorder: {
		backgroundColor: colors.white,
		height: '100%',
		width: '100%'
	},
	point: {
		position: 'absolute',
		left: '50%',
		width: height / 30,
		height: height / 30,
		backgroundColor: colors.white,
		borderRadius: height / 15,
		transform: [
			{ translateX: height / -60 }
		]
	}
})

export default style