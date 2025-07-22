'use client';

import Item from './item';
import { useState } from 'react';
export default function ItemList({
	items: itemContents,
	handleClick,
	handleDeleteItem,
}) {
	const [sortBy, setSortBy] = useState('name');
	let jsonContents = itemContents;
	let sortedArray;
	let html = '';
	if (sortBy == 'name' || sortBy == 'category') {
		sortedArray = itemContents.sort((a, b) => {
			if (a[sortBy] < b[sortBy]) {
				return -1;
			}
			if (a[sortBy] > b[sortBy]) {
				return 1;
			}
			return 0;
		});

		jsonContents = sortedArray;
		html = renderItemsNormal();
	} else {
		html = renderItemsGroupBy();
	}

	function renderItemsNormal() {
		return (
			<ul className="flex flex-col gap-2">
				{jsonContents.map((item1) => {
					return (
						<Item
							key={item1.id}
							itemId={item1.id}
							name={item1.name}
							quantity={item1.quantity}
							category={item1.category}
							handleDeleteItem={handleDeleteItem}
							handleClick={handleClick}
						></Item>
					);
				})}
			</ul>
		);
	}

	function renderItemsGroupBy() {
		let groupedItems = Object.groupBy(itemContents, (item) => {
			return item.category;
		});
		let keys = Object.keys(groupedItems).sort();

		return (
			<ul className="flex flex-col gap-2">
				{keys.map((givenKey) => {
					return (
						<div key={givenKey}>
							<p className="capitalize font-bold">{givenKey}</p>
							{groupedItems[givenKey].map((item1) => {
								return (
									<Item
										key={item1.id}
										itemId={item1.id}
										name={item1.name}
										handleDeleteItem={handleDeleteItem}
										quantity={item1.quantity}
										category={item1.category}
									></Item>
								);
							})}
						</div>
					);
				})}
			</ul>
		);
	}

	return (
		<div>
			<div>
				<input
					className="bg-red-700 text-white p-4 m-2"
					onClick={() => setSortBy('name')}
					type="button"
					value="Sort By Name"
				/>
				<input
					className="bg-red-700 text-white p-4 m-2"
					onClick={() => setSortBy('category')}
					type="button"
					value="Sort By Category"
				/>
				<input
					className="bg-red-700 text-white p-4 m-2"
					onClick={() => setSortBy('group_category')}
					type="button"
					value="Group Sort"
				/>
			</div>
			{html}
		</div>
	);
}
