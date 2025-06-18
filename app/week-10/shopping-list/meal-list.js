import MealCard from './meal-card';

export default function MealList({ ingredient, meals }) {
	return (
		<>
			{ingredient ? (
				<div className="my-5 flex flex-col items-center">
					{meals.length > 0 ? (
						<div>
							<h2>Meal Ideas</h2>
							<p>Here are some ideas using {ingredient}</p>
						</div>
					) : (
						<div>
							<p>There are no meals available for {ingredient}</p>
						</div>
					)}

					<div className="w-3xs flex flex-col gap-2 mt-2">
						{meals.map((item) => {
							return (
								<MealCard
									key={item.idMeal}
									meal_name={item.strMeal}
									meal_obj={item}
								></MealCard>
							);
						})}
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
}
