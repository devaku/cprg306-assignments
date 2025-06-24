const baseUrl = `https://www.themealdb.com/api/json/v1/1`;

export async function readByIngredient(ingredient) {
	try {
		const url = `${baseUrl}/filter.php?i=${ingredient}`;

		const response = await fetch(url, {
			method: 'GET',
		})
			.then((res) => res.json())
			.catch((e) => {
				console.error(e.message);
			});
		return response;
	} catch (error) {
		console.error(error.message);
	}
}

export async function readMeal(meal_id) {
	try {
		const url = `${baseUrl}/lookup.php?i=${meal_id}`;

		const response = await fetch(url, {
			method: 'GET',
		})
			.then((res) => res.json())
			.catch((e) => {
				console.error(e.message);
			});
		return response;
	} catch (error) {
		console.error(error.message);
	}
}
