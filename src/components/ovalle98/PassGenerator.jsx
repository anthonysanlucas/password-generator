import React, { useEffect, useState } from 'react'
import generatePass from './utils/generatePass'
import createNotification from './utils/notification'
import NewPassBnt from './NewPassBnt'
import SliderPass from './SliderPass'
import ShowPass from './ShowPass'
import './css/style.css'

const PassGenerator = () => {
	const [password, setPassword] = useState('')
	const [range, setRange] = useState(10)
	const [isCopiedPass, setIsCopiedPass] = useState(false)
	const MAX = 19
	const MIN = 6

	useEffect(() => {
		setPassword(generatePass())
	}, [])

	const handlePass = () => {
		setPassword(generatePass(range))
		setIsCopiedPass(false)
	}

	const copiedPass = () => {
		if (!isCopiedPass) {
			setIsCopiedPass(true)
			navigator.clipboard.writeText(password)
			createNotification()
		}
	}

	return (
		<main className='column-center pd-main'>
			<div className='column-center pg-card'>
				<h1>Password generator</h1>
				<ShowPass password={password} copiedPass={copiedPass}/>
				<div id='msj'></div>
				<div className='pg-generator'>
					<span>Password length: {range}</span>
					<SliderPass MIN={MIN} MAX={MAX} range={range} setRange={setRange}/>
					<NewPassBnt handlePass={handlePass}/>
				</div>
			</div>
		</main>
	)
}

export default PassGenerator