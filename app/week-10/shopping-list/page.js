'use client';
import ItemList from './item-list';
import NewItem from './new-item';
import MealList from './meal-list';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import * as mealApi from '../../_services/mealapi';
import {
	addItem,
	getItems,
	deleteItem,
} from '../_services/shopping-list-service';

import { useUserAuth } from '../_utils/auth-context';

export default function Page() {
	const [items, setItems] = useState([]);
	const [ingredient, setIngredient] = useState('');
	const [meals, setMeals] = useState([]);
	const { user, firebaseSignOut } = useUserAuth();

	// Redirect to login page if not signed in
	useEffect(() => {
		if (!user) {
			redirect('/week-10');
		}
	});

	// Scroll to top of page on fetch of meals
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [meals]);

	// Fetch the items of the user from Firestore
	useEffect(() => {
		loadItems();
	}, []);

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

	async function loadItems() {
		let retreivedItems = await getItems(user.uid);

		setItems([...retreivedItems]);
	}

	async function handleLogoutClick(e) {
		try {
			// Sign out of Firebase
			await firebaseSignOut();

			// redirect('/');
		} catch (e) {
			// console.log(JSON.stringify(e));
		}
	}

	async function handleDebug() {
		let id = await addItem(user.uid, {
			name: 'FOOD',
			quantity: 1,
			category: 'produce',
		});
		await loadItems();
	}

	async function handleAddItem(newItem) {
		let id = await addItem(user.uid, newItem);
		await loadItems();
	}

	async function handleDeleteItem(itemId) {
		await deleteItem(user.uid, itemId);
		await loadItems();
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
				{/* <button
					onClick={handleDebug}
					className="bg-red-800 p-1 rounded"
				>
					DEBUG
				</button> */}
				<NewItem onAddItem={handleAddItem}></NewItem>
				<ItemList
					items={items}
					handleClick={handleFetchMeals}
					handleDeleteItem={handleDeleteItem}
				></ItemList>
			</div>
			<MealList ingredient={ingredient} meals={meals}></MealList>
		</main>
	);
}
