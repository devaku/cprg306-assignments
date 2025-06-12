import { useState } from 'react';
import Ingredient from './ingredient';
import * as mealApi from '../_services/mealapi';

export default function MealCard({ meal_obj, meal_name }) {
	const [showIngredient, setShowIngredient] = useState(false);
	const [mealProfile, setMealProfile] = useState({});

	async function handleShowIngredient() {
		let data = await mealApi.readMeal(meal_obj.idMeal);
		data = data.meals[0];

		setMealProfile(data);
		setShowIngredient(!showIngredient);
	}

	return (
		<div
			onClick={handleShowIngredient}
			className="bg-teal-900 rounded text-center hover:bg-teal-600 cursor-pointer select-none"
		>
			<p>{meal_name}</p>

			{showIngredient ? (
				<Ingredient meal_profile={mealProfile}></Ingredient>
			) : (
				''
			)}
		</div>
	);
}
