import CarsData from '../Data/CarsData.jsx';
import heart from '../assets/CardsIcones/heart.svg';
import gas from '../assets/CardsIcones/gas-station.svg';
import people from '../assets/CardsIcones/icone-people.svg';
import volant from '../assets/CardsIcones/icone-volant.svg';
function CarCards({ cars }) {
	return (
		<>
			{cars.map((item) => (
				<div key={item.id} className="bg-white w-fit p-6 rounded-xl">
					<div className="pb-16">
						<div className="flex justify-between items-center">
							<h3 className="text-[16px] lg:text-[20px]">{item.name}</h3>
							<img src={heart} alt="Coeur" />
						</div>
						<p className="text-[12px] lg:text-[14px] text-gray-400 ">{item.type}</p>
					</div>

					<div className="pb-16 flex justify-center">
						<img src={item.carImage} alt="voiture a louer" />
					</div>

					<div>
						<div className="text-gray-400 flex items-center gap-4 justify-between pb-6">
							<div className="flex items-center gap-2 ">
								<img src={gas} alt="" />
								<p>{item.gasLiter}L</p>
							</div>
							<div className="flex items-center gap-2 ">
								<img src={volant} alt="" />
								<p>{item.change}</p>
							</div>
							<div className="flex items-center gap-2 ">
								<img src={people} alt="" />
								<p>{item.sites} people</p>
							</div>
						</div>

						<div className="flex justify-between items-center pb-6">
							<p className="text-[20px]">
								${item.price} / <span className="text-[14px] text-gray-400">day</span>
							</p>
							<button className="text-[12px] lg:text-[16px] font-semibold text-white bg-[#3563e9] py-[10px] px-[20px] rounded-md ">
								Rent Now
							</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default CarCards;
