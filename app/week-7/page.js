'use client';
import itemsData from './item.json';
import ItemList from './item-list';
import NewItem from './new-item';
import { useState } from 'react';

export default function Page() {
	const [items, setItems] = useState(itemsData);

	function handleAddItem(newItem) {
		let oldItems = items;
		oldItems = [...items, newItem];
		setItems(oldItems);
	}

	return (
		<main className="flex flex-col mx-10 my-5">
			<h1 className="text-4xl font-bold mb-2">Shopping List</h1>
			<NewItem onAddItem={handleAddItem}></NewItem>
			<ItemList items={items}></ItemList>
		</main>
	);
}
