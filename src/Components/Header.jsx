import NaveBar from './NaveBar';
import SearchBar from './SearchBar';

function Header() {
	return (
		<div className="bg-white lg:flex  items-center lg:h-[125px] py-5 shadow-innerCustom  ">
			<h1 className="text-[32px] px-[60px] text-center font-bold text-[#3563E9]">MORENT</h1>
			<div className=" flex flex-col lg:flex-row gap-5 justify-between  items-cente w-full px-[30px] ">
				<SearchBar />
				<NaveBar />
			</div>
		</div>
	);
}

export default Header;
