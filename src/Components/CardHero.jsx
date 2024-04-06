import heroCardData from '../Data/heroDataCard';

function CardHero() {
	return (
		<>
			<div className=" hidden xl:flex justify-center items-center p-[32px] gap-[32px]">
				{heroCardData.map((item) => (
					<div
						key={item.id}
						className="w-[640px] h-[360px] relative rounded-xl"
						style={{ backgroundImage: `url(${item.bgImage})`, backgroundColor: `${item.bgColor}` }}>
						<div className="p-[24px] max-w-[350px]">
							<h2 className="text-[32px] leading-relaxed "> {item.title}</h2>
							<p className="text-[16px] pt-[16px] pb-[20px] ">{item.description}</p>
							<button className={`py-[10px] px-[20px] bg-[${item.btnColor}] text-[16px] rounded-md`}>
								Rental Car
							</button>
						</div>
						<img className="absolute bottom-1 left-[135px]" src={item.image} alt="" />
					</div>
				))}
			</div>
			<div className=" xl:hidden flex justify-center items-center py-[32px] ">
				{heroCardData.slice(0, 1).map((item) => (
					<div
						key={item.id}
						className="relative rounded-xl"
						style={{ backgroundImage: `url(${item.bgImage})`, backgroundColor: `${item.bgColor}` }}>
						<div className="p-[24px]">
							<h2 className="text-[16px] "> {item.title}</h2>
							<p className="text-[12px] pt-[16px] pb-[20px] ">{item.description}</p>
							<button className="py-[10px] px-[20px] bg-[#3563E9] text-[12px] rounded-md   ">
								Rental Car
							</button>
						</div>
						<img className="" src={item.image} alt="" />
					</div>
				))}
			</div>
		</>
	);
}

export default CardHero;
