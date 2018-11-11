import React from 'react'
import { ScrollView } from 'react-native'

import Resume from 'resume/resume'
import Goals from 'goals/goals'

const Home = () => (
	<ScrollView>
		<Resume/>
		<Goals/>
	</ScrollView>
)

export default Home