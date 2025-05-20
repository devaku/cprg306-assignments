import ItemList from './item-list';
export default function Page() {
	return (
		<main className="flex flex-col mx-10 my-5">
			<h1 className="text-4xl font-bold mb-2">Shopping List</h1>
			<ItemList></ItemList>
		</main>
	);
}
