export default function Item({
	itemId,
	name,
	quantity,
	category,
	handleClick,
	handleDeleteItem,
}) {
	return (
		<li className="bg-sky-900 text-yellow-200 rounded-xl ">
			<h1 className="font-bold m-2 text-2xl">{name}</h1>
			<p className="mx-2 mb-2">
				Buy {quantity} in {category}
			</p>
			<div className="flex justify-center gap-2 m-2">
				<button
					onClick={() => handleClick(name, category)}
					className="bg-green-600 hover:bg-green-900 text-white p-1 w-full select-none cursor-pointer"
				>
					Search Recipes
				</button>
				<button
					onClick={() => handleDeleteItem(itemId)}
					className="bg-red-700 hover:bg-red-900 text-white p-1 select-none cursor-pointer"
				>
					Remove
				</button>
			</div>
		</li>
	);
}
