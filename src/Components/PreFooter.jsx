import dataFooter from '../Data/preFooterData.jsx';
function PreFooter() {
	return (
		<>
			<div className="lg:flex justify-between lg:px-20 px-5">
				<div className="py-12">
					<h3 className="text-blue-500 text-[24px] lg:text-[32px] font-semibold ">MORENT</h3>
					<p className="text-[12px] lg:text-[16px] pt-4">
						Our vision is to provide convenience and help increase your sales business.
					</p>
				</div>
				<div className="flex flex-wrap items-center gap-5 lg:gap-48">
					{dataFooter.map((item) => (
						<div>
							<h4 className="text-[20px] font-semibold pb-6">{item.title}</h4>
							<ul>
								{item.list.map((li) => (
									<li className="text-[16px] text-gray-500 pb-6">{li}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default PreFooter;
