import WhiteCar from '../assets/Hero/white-car.png';
import GrayCar from '../assets/Hero/gray-car.png';
import bgDarkBlue from '../assets/Hero/bgHeroDarkBlue.svg';
import bgLightBlue from '../assets/Hero/bgHeroLightBlue.svg';

const heroCardData = [
	{
		id: 1,
		title: 'The Best Platform for Car Rental',
		description: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
		image: WhiteCar,
		bgImage: bgLightBlue,
		bgColor: '#54a6ff',
		btnColor: '#3563e9',
	},
	{
		id: 2,
		title: 'Easy way to rent a car at a low price',
		description: 'Providing cheap car rental services and safe and comfortable facilities.',
		image: GrayCar,
		bgImage: bgDarkBlue,
		bgColor: '#3563e9',
		btnColor: '#54a6ff',
	},
];

export default heroCardData;
