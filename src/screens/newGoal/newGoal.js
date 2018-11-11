import React from 'react'
import { Modal, View, Text, TextInput, DatePickerAndroid, TouchableOpacity, ScrollView } from 'react-native'
import style from './newGoalStyle'

import Sliders from './components/sliders'

import GoalsHelper from 'helpers/goalsHelper'

export default class NewGoal extends React.Component {

	state = {
		description: '',
		value: '',
		expenses: [
			{
				name: 'Alimentação',
				value: 300
			},
			{
				name: 'Charuto',
				value: 150
			},
			{
				name: 'Meretrizes',
				value: 500
			}
		],
		salary: 2500
	}

	openDatePicker() {
		DatePickerAndroid.open({ date: new Date() }).then(({ action, year, month, day }) => {
			if(action === DatePickerAndroid.dismissedAction) return
			this.setState({ date: { day, month, year } })
		})
	}

	bindSlider(index, value) {
		let { expenses } = this.state
		expenses[index].changedValue = value

		this.setState({ expenses })
	}

	submit() {
		console.error(this.state)
	}

	render() {
		return (
			<Modal
				animationType="slide"
          		transparent={ true }
				visible={ this.props.active }
				onRequestClose={ this.props.onRequestClose }
			>
				<View style={ style.container }>
					<View style={ style.contentWrapper }>
						<ScrollView showsVerticalScrollIndicator={ false }>
							<View style={ style.content }>
								<Text style={ style.title }>NOVO OBJETIVO</Text>
								<TextInput
									placeholder="Descrição"
									onChangeText={ description => this.setState({ description }) }
									value={ this.state.description }
								/>
								<View style={ style.bottomInputs }>
									<TextInput
										style={ style.valueInput }
										placeholder="Valor"
										onChangeText={ value => this.setState({ value }) }
										value={ this.state.value }
									/>
									<TouchableOpacity onPress={ () => this.openDatePicker() }>
										<Text style={ style.dateInput }>{
											this.state.date
												? `${ this.state.date.day }/${ this.state.date.month + 1 }/${ this.state.date.year }`
												: 'Prazo'
										}</Text>
									</TouchableOpacity>
								</View>
								<View style={{
									display: (
										!GoalsHelper.getSavingsDifference(this.state) ||
										GoalsHelper.getSavingsDifference(this.state) < 0
									) ? 'none' : undefined
								}}>
									<Text>Necessário Diminuir:</Text>
									<Text>{ GoalsHelper.getSavingsDifference(this.state) }</Text>
								</View>
								<Sliders
									sliders={ this.state.expenses }
									bind={ (name, value) => this.bindSlider(name, value) }
								/>
							</View>
							<TouchableOpacity
								disabled={ !GoalsHelper.isGoalValid(this.state) }
								onPress={ () => this.submit() }
							>
								<Text style={ style.submit }>
									VAMOS LÁ
								</Text>
							</TouchableOpacity>
						</ScrollView>
					</View>
				</View>
			</Modal>
		)
	}
}