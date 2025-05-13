'use client';
import { useState } from 'react';

export default function NewItem() {
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [category, setCategory] = useState('Produce');

	function handleSubmit(e) {
		e.preventDefault();
		let item = {
			name: name,
			quantity: quantity,
			category: category,
		};

		console.log(item);
		alert('Item object: ' + JSON.stringify(item));

		setName('');
		setQuantity(0);
		setCategory('Produce');
	}

	function handleOnClick(e) {
		e.preventDefault();
		if (e.target.name == 'decrement') {
			if (quantity <= 0) {
				// Do nothing
				return;
			} else {
				setQuantity(quantity - 1);
			}
		} else {
			setQuantity(quantity + 1);
		}
	}

	return (
		<div className="bg-sky-400 mx-auto p-2 w-1/4 text-black rounded-sm">
			<form
				className="w-full flex flex-col gap-5"
				action=""
				method="post"
			>
				{/* Name */}
				<div className="m-1">
					<input
						type="text"
						className="w-full p-1 bg-white rounded-sm"
						placeholder="Item Name"
						name="name"
						id=""
						onChange={(e) => setName(e.target.value)}
						value={name}
						required
					/>
				</div>
				<div className="flex justify-around">
					{/* Quantity */}
					<div className="flex w-full">
						<div className="w-10 text-center">{quantity}</div>
						<div className="flex justify-evenly text-white gap-2 w-24">
							<button
								onClick={handleOnClick}
								name="decrement"
								className={
									(quantity <= 0
										? 'bg-gray-500 cursor-not-allowed '
										: 'bg-red-900 cursor-pointer ') +
									'w-full rounded-md '
								}
							>
								-
							</button>
							<button
								onClick={handleOnClick}
								name="increment"
								className="bg-red-900 w-full rounded-md cursor-pointer"
							>
								+
							</button>
						</div>
					</div>
					{/* Category */}
					<div className="">
						<select
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							name=""
							id=""
						>
							<option defaultChecked value="Produce">
								Produce
							</option>
							<option value="Dairy">Dairy</option>
							<option value="Bakery">Bakery</option>
							<option value="Meat">Meat</option>
							<option value="Frozen Foods">Frozen Foods</option>
							<option value="Canned Goods">Canned Goods</option>
							<option value="Dry Goods">Dry Goods</option>
							<option value="Beverages">Beverages</option>
							<option value="Snacks">Snacks</option>
							<option value="Household">Household</option>
							<option value="Oter">Other</option>
						</select>
					</div>
				</div>

				<div>
					<button
						onClick={handleSubmit}
						className="bg-red-900 w-full text-white"
						type="submit"
					>
						+
					</button>
				</div>
			</form>
		</div>
	);
}
