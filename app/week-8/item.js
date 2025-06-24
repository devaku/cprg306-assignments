export default function Item({ name, quantity, category, handleClick }) {
	return (
		<li
			onClick={() => handleClick(name, category)}
			className="bg-sky-900 text-yellow-200 rounded-xl hover:bg-sky-700 select-none cursor-pointer"
		>
			<h1 className="font-bold m-2 text-2xl">{name}</h1>
			<p className="mx-2 mb-2">
				Buy {quantity} in {category}
			</p>
		</li>
	);
}
