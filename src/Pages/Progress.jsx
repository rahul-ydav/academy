
import { useState, useEffect } from 'react';
import { ProgressAPI } from '../apis/ProgressAPI';

function Progress() {
	const [easy, setEasy] = useState(0);
	const [medium, setMedium] = useState(0);
	const [hard, setHard] = useState(0);

	useEffect(() => {
		const fetchProgress = async () => {
			try {
				const response = await ProgressAPI.get();
				const { easy, medium, hard } = response;
				setEasy(easy);
				setMedium(medium);
				setHard(hard);
			} catch (error) {
				console.error('Error fetching progress:', error);
			}
		};

		fetchProgress();
	}, []);


	return (
		<section className='section'>
			<div id="Progress">
				<h2>Progress Report</h2>
				<div>Easy: {easy}%</div>
				<div>Medium: {medium}%</div>
				<div>Hard: {hard}%</div>
			</div>
		</section>
	);
}

export default Progress;