import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from '../goalsStyle'

const NewGoalCall = props => (
	<TouchableOpacity onPress={ props.onPress }>
		<View style={ style.goalWrapper }>
			<View style={ style.goal }>
				<View style={ style.newGoal }>
					<Text style={ style.newGoalLabel }>+ Novo Objetivo</Text>
				</View>
			</View>
		</View>
	</TouchableOpacity>
)

export default NewGoalCall