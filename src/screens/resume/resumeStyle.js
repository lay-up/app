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
	}
})

export default style