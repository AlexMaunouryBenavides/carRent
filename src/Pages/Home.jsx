import CarCards from '../Components/CarCards';
import CardHero from '../Components/CardHero';
import Collapses from '../Components/Collapses';
import Swap from '../assets/Hero/Arrow-swap.png';
import CarsData from '../Data/CarsData';

function Home() {
	const popularCars = CarsData.filter((car) => car.popularity >= 1);
	const getRandomElementsFromArray = (array, numElements) =>
		array.sort(() => Math.random() - 0.5).slice(0, numElements);
	const numberOfCars = CarsData.length;

	return (
		<div className=" md:px-[64px] px-[24px]">
			<section className="flex flex-col  text-white ">
				<CardHero />

				<div className="flex flex-col justify-between items-center xl:flex-row">
					<Collapses mainTitle={'Pick-Up'} />
					<div className="bg-[#3563e9] p-[18px] rounded-xl">
						<img src={Swap} alt="fleche haut-bas" />
					</div>
					<Collapses mainTitle={'Drop-Off'} />
				</div>
			</section>
			<section className="lg:pt-[46px]">
				<div className="flex items-center justify-between lg:pb-[20px]">
					<h3 className="text-gray-500 text-[14px] lg:text-[16px] font-semibold p-5 ">Popular Cars</h3>
					<p className="text-[#3563e9] text-[12px] lg:text-[16px] font-semibold cursor-pointer">
						View All
					</p>
				</div>
				<div className="flex lg:flex-row flex-col items-center justify-center gap-10">
					<CarCards cars={popularCars} />
				</div>
			</section>
			<section className="lg:pt-[46px]">
				<div className=" lg:pb-[20px]">
					<h3 className="text-gray-500 text-[14px] lg:text-[16px] font-semibold p-5 ">
						Recommended cars
					</h3>
				</div>
				<div className="flex lg:flex-row flex-col flex-wrap items-center justify-center gap-10">
					<CarCards cars={getRandomElementsFromArray(CarsData)} />
				</div>
			</section>
			<div className="flex items-center justify-between lg:pl-[43vw] py-20">
				<button className=" py-[10px] px-[20px] bg-[#3563E9] text-[16px] text-white font-semibold rounded-md ">
					Show more car
				</button>
				<p>{numberOfCars} car</p>
			</div>
		</div>
	);
}

export default Home;
