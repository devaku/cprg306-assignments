export default function Item({ name, quantity, category }) {
	return (
		<li class="bg-sky-900 w-1/4 text-yellow-200 rounded-xl">
			<h1 className="font-bold m-2 text-2xl">{name}</h1>
			<p className="mx-2 mb-2">
				Buy {quantity} in {category}
			</p>
		</li>
	);
}
