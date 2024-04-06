import ArrowDown from '../assets/Hero/arrow-down.png';
import Dot from '../assets/Hero/mark.png';
function Collapses({ mainTitle }) {
	return (
		<div className="text-black bg-white w-fit py-[24px] lg:px-[48px] px-[24px] rounded-[10px]">
			<div className="flex items-center gap-[8px]">
				<img src={Dot} alt="" />
				<h4 className="font-bold text-[16px]">{mainTitle}</h4>
			</div>
			<div className="flex pt-[16px]">
				<div className="border-r-[1px] lg:pr-[24px] ">
					<h5 className="font-bold text-[14px] lg:text-[16px] text-center lg:text-left">Locations</h5>
					<div className="flex items-center pt-[8px]">
						<input
							className="bg-transparent max-w-[50px] lg:max-w-full"
							type="text"
							placeholder="Select your city"
						/>
						<img src={ArrowDown} alt="icone fleche liste" />
					</div>
				</div>
				<div className="border-r-[1px] lg:pr-[24px] text-center lg:text-left ">
					<h5 className="font-bold text-[14px] lg:text-[16px]">Date</h5>
					<div className="flex items-center pt-[8px]">
						<input className="bg-transparent max-w-[40px] lg:max-w-full" type="text" placeholder="Date" />
						<img src={ArrowDown} alt="icone fleche liste" />
					</div>
				</div>
				<div className=" lg:pl-[48px] text-center lg:text-left ">
					<h5 className="font-bold text-[14px] lg:text-[16px] ">Time</h5>
					<div className="flex items-center pt-[8px]">
						<input
							className="bg-transparent  max-w-[50px] lg:max-w-full"
							type="text"
							placeholder="Time"
						/>
						<img src={ArrowDown} alt="icone fleche liste" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Collapses;
