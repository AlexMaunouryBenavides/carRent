import koenigsegg from '../assets/Cars/koenigsegg.svg';
import AllNewRush from '../assets/Cars/AllNewRush.png';
import AllNewTeriosBlue from '../assets/Cars/AllNewTeriosBlue.png';
import CRVBlack from '../assets/Cars/CRVBlack.png';
import CRVBrown from '../assets/Cars/CRVBrown.png';
import MGZXExcite from '../assets/Cars/MGZXExcite.png';
import MGZXExclusive from '../assets/Cars/MGZXExclusive.png';
import NewMGZSGray from '../assets/Cars/NewMGZSGray.png';
import NewMGZSWhite from '../assets/Cars/NewMGZSWhite.png';
import nissanGTR from '../assets/Cars/nissanGTR.png';
import nissanGTR2 from '../assets/Cars/nissanGTR2.png';
import rolls from '../assets/Cars/rolls.png';

const CarsData = [
	{
		id: 1,
		name: 'Koenigsegg',
		type: 'Sport',
		carImage: koenigsegg,
		gasLiter: 90,
		change: 'manual',
		sites: 2,
		price: 99,
		isLiked: false,
		popularity: 1,
	},
	{
		id: 2,
		name: 'Nissan GT-R',
		type: 'Sport',
		carImage: nissanGTR,
		gasLiter: 80,
		change: 'manual',
		sites: 2,
		price: 80,
		isLiked: false,
		popularity: 1,
	},
	{
		id: 3,
		name: 'Rolls-Royce',
		type: 'Sedan',
		carImage: rolls,
		gasLiter: 70,
		change: 'manual',
		sites: 4,
		price: 96,
		isLiked: false,
		popularity: 1,
	},
	{
		id: 4,
		name: 'Nissan GT-R',
		type: 'Sport',
		carImage: nissanGTR2,
		gasLiter: 80,
		change: 'manual',
		sites: 2,
		price: 80,
		isLiked: false,
		popularity: 1,
	},
	{
		id: 5,
		name: 'All New Rush',
		type: 'SUV',
		carImage: AllNewRush,
		gasLiter: 70,
		change: 'manual',
		sites: 6,
		price: 72,
		isLiked: false,
	},
	{
		id: 6,
		name: 'CR-V',
		type: 'SUV',
		carImage: CRVBrown,
		gasLiter: 80,
		change: 'manual',
		sites: 6,
		price: 80,
		isLiked: false,
	},
	{
		id: 7,
		name: 'All New Terios',
		type: 'SUV',
		carImage: AllNewTeriosBlue,
		gasLiter: 90,
		change: 'manual',
		sites: 6,
		price: 74,
		isLiked: false,
	},
	{
		id: 8,
		name: 'CR-V',
		type: 'SUV',
		carImage: CRVBlack,
		gasLiter: 80,
		change: 'manual',
		sites: 6,
		price: 80,
		isLiked: false,
	},
	{
		id: 9,
		name: 'MG ZX Exclusive',
		type: 'Hatchback',
		carImage: MGZXExclusive,
		gasLiter: 70,
		change: 'manual',
		sites: 4,
		price: 76,
		isLiked: false,
	},
	{
		id: 10,
		name: 'New MG ZS',
		type: 'SUV',
		carImage: NewMGZSWhite,
		gasLiter: 80,
		change: 'manual',
		sites: 6,
		price: 80,
		isLiked: false,
	},
	{
		id: 11,
		name: 'MG ZX Excite',
		type: 'Hatchback',
		carImage: MGZXExcite,
		gasLiter: 90,
		change: 'manual',
		sites: 4,
		price: 74,
		isLiked: false,
	},
	{
		id: 12,
		name: 'New MG ZS',
		type: 'SUV',
		carImage: NewMGZSGray,
		gasLiter: 80,
		change: 'manual',
		sites: 6,
		price: 80,
		isLiked: false,
	},
];

export default CarsData;
