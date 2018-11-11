import React from 'react'
import { ScrollView } from 'react-native'

import Resume from 'resume/resume'
import Goals from 'goals/goals'
import NewGoal from 'newGoal/newGoal'

export default class Home extends React.Component {

	state = {
		goalRegisterOpened: false
	}

	setGoalRegisterOpened(goalRegisterOpened) {
		this.setState({ goalRegisterOpened }) 
	}

	render() {
		return (
			<ScrollView>
				<Resume/>
				<Goals 
					onNewGoalCall={ () => this.setGoalRegisterOpened(true) }
				/>
				<NewGoal 
					active={ this.state.goalRegisterOpened }
					onRequestClose={ () => this.setGoalRegisterOpened(false) }
				/>
			</ScrollView>
		)
	}
}