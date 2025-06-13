'use client';
import itemsData from './item.json';
import ItemList from './item-list';
import NewItem from './new-item';
import MealList from './meal-list';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import * as mealApi from '../../_services/mealapi';

import { useUserAuth } from '../_utils/auth-context';

export default function Page() {
	const [items, setItems] = useState(itemsData);
	const [ingredient, setIngredient] = useState('');
	const [meals, setMeals] = useState([]);
	const { user, firebaseSignOut } = useUserAuth();

	useEffect(() => {
		if (!user) {
			redirect('/week-9');
		}
	});

	// Scroll to top of page on fetch of meals
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [meals]);

	async function handleFetchMeals(params, category) {
		if (category == 'household') {
			setIngredient('');
			setMeals([]);
			return;
		}

		// Remove the emoji
		// 🥛🍞🥚🍌🥦🍗
		let ingredient = params.split(' ')[0];
		ingredient = ingredient.replace(/([^\w\s]+)/g, '');

		let data = await mealApi.readByIngredient(ingredient);

		// If null
		data = data.meals ? data.meals : [];
		setIngredient(params);
		setMeals(data);
	}

	async function handleLogoutClick(e) {
		try {
			// Sign out of Firebase
			await firebaseSignOut();
			// redirect('/');
		} catch (e) {
			console.log(JSON.stringify(e));
		}
	}

	function handleAddItem(newItem) {
		let oldItems = items;
		oldItems = [...items, newItem];
		setItems(oldItems);
	}

	return (
		<main className="grid grid-cols-2">
			<div className="flex flex-col items-center my-5">
				<h1 className="text-4xl font-bold mb-2">Shopping List</h1>
				<button
					onClick={handleLogoutClick}
					className="bg-red-800 p-1 rounded"
				>
					Logout
				</button>
				<NewItem onAddItem={handleAddItem}></NewItem>
				<ItemList
					items={items}
					handleClick={handleFetchMeals}
				></ItemList>
			</div>
			<MealList ingredient={ingredient} meals={meals}></MealList>
		</main>
	);
}
