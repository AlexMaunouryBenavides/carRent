import navLinks from '../Data/navList';
import Profil from '../assets/Header/Navbar/Profil.png';

function NaveBar() {
	return (
		<div className="flex gap-5 items-center m-auto">
			{navLinks.map((item) => (
				<ul key={item.id}>
					<li>
						<img className="p-[10px] border-[1px] rounded-3xl" src={item.image} alt={item.alt} />
					</li>
				</ul>
			))}
			<img className="object-cover" src={Profil} alt="Photo de profil" />
		</div>
	);
}

export default NaveBar;
