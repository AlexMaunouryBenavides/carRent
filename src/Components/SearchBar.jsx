import Filter from '../assets/Header/Search/filter.png';
import Search from '../assets/Header/Search/search.png';

function SearchBar() {
	return (
		<div className=" flex justify-between items-center p-3 border-[1px] rounded-[30px] max-w-[490px] m-auto ">
			<img src={Search} alt="icone recherche" />
			<input
				className="text-[14px] lg:pr-[235px] pl-[20px] outline-none "
				type="text"
				placeholder="Search something here"
			/>
			<img src={Filter} alt="icone filtres" />
		</div>
	);
}

export default SearchBar;
