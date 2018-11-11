import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import style from './goalsStyle'

import Goal from './components/goal'
import NewGoalCall from './components/newGoalCall'

import colors from 'values/colors'
import GoalsService from 'services/goalsService'

export default class Goals extends React.Component {

	state = {}

	componentDidMount() {
		GoalsService.getGoals().then(goals => {
			this.setState({ goals })
		})
	}

	getGoals() {
		return this.state.goals
			? (
				<FlatList
					data={ this.state.goals }
					keyExtractor={ (item) => item.description }
					renderItem={({ item }) => <Goal { ...item } /> }
				/>
			)
			: (
				<ActivityIndicator
					size="large"
					color={ colors.green }
				/>
			)
	}

	render() {
		return (
			<View style={ style.goals }>
				<Text style={ style.title }>OBJETIVOS</Text>
				<NewGoalCall onPress={ this.props.onNewGoalCall } />
				{ this.getGoals() }
			</View>
		)
	}
}