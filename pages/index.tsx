import type { NextPage } from 'next'
import Head from 'next/head'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import React, { useRef, useState } from 'react'
import lottieAnimation from '../public/lottie-animation.json'

const styles = {
	button: 'text-white font-bold cursor-pointer py-2 px-4 rounded',
}

const Home: NextPage = () => {
	const [direction, setDirection] = useState<1 | -1>(1)
	const [speed, setSpeed] = useState<number>(1)

	const lottieRef = useRef<LottieRefCurrentProps | null>(null)

	return (
		<div className="min-h-screen flex flex-col space-y-4 justify-center items-center">
			<Head>
				<title>Lottie Animation</title>
			</Head>

			<div className="h-[32rem] w-[32rem] bg-yellow-300/10">
				<Lottie lottieRef={lottieRef} animationData={lottieAnimation} />
			</div>
			<button
				onClick={() => {
					lottieRef.current?.play()
				}}
				className={`${styles.button} bg-blue-500 hover:bg-blue-700`}
			>
				Play
			</button>
			<button
				onClick={() => {
					lottieRef.current?.pause()
				}}
				className={`${styles.button} bg-red-500 hover:bg-red-700`}
			>
				Pause
			</button>
			<button
				onClick={() => {
					setDirection(direction === 1 ? -1 : 1)
					lottieRef.current?.setDirection(direction)
				}}
				className={`${styles.button} bg-yellow-500 hover:bg-yellow-700`}
			>
				Update direction
			</button>
			<button
				onClick={() => {
					setSpeed((speed) => (speed < 2 ? speed + 0.25 : 1))
					lottieRef.current?.setSpeed(speed)
				}}
				className={`${styles.button} bg-green-500 hover:bg-green-700`}
			>
				Update speed
			</button>
		</div>
	)
}

export default Home
