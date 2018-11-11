import React from 'react'
import { View, Text, FlatList } from 'react-native'
import style from './goalsStyle'

import Goal from './components/goal'

export default class Goals extends React.Component {
	render() {
		return (
			<View>
				<Text style={ style.title }>OBJETIVOS</Text>
				<Goal
					description="Viajar para Acapulco"
					spared={ 5000 }
					toSpare={ 10000 }
				/>
			</View>
		)
	}
}