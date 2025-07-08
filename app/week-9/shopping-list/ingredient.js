export default function Ingredient({ meal_profile }) {
	let ingredientList = [];
	let counter = 1;

	// LOL
	while (meal_profile[`strIngredient${counter}`] != null) {
		console.log(meal_profile[`strIngredient${counter}`]);
		ingredientList.push(meal_profile[`strIngredient${counter}`]);
		counter += 1;
	}

	return (
		<div className="text-left text-xs ml-2">
			<p>Ingredients needed:</p>
			<div className="ml-2">
				{ingredientList.map((item) => {
					return <p key={(counter += 1)}>{item}</p>;
				})}
			</div>
		</div>
	);
}
