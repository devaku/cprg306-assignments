'use client';
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [category, setCategory] = useState('produce');

	function makeId(length) {
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
		}
		return result;
	}

	function handleSubmit(e) {
		e.preventDefault();

		let uniqueString = makeId(20);
		let item = {
			// id: uniqueString,
			name: name,
			quantity: quantity,
			category: category,
		};

		onAddItem(item);

		// setName('');
		// setQuantity(0);
		// setCategory('Produce');
	}

	function handleOnClick(e) {
		e.preventDefault();
		if (e.target.name == 'decrement') {
			if (quantity <= 1) {
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
		<div className="bg-sky-400 p-2 text-black rounded-sm">
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
									(quantity <= 1
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
							<option defaultChecked value="produce">
								Produce
							</option>
							<option value="dairy">Dairy</option>
							<option value="bakery">Bakery</option>
							<option value="meat">Meat</option>
							<option value="frozen foods">Frozen Foods</option>
							<option value="canned goods">Canned Goods</option>
							<option value="dry goods">Dry Goods</option>
							<option value="beverages">Beverages</option>
							<option value="snacks">Snacks</option>
							<option value="household">Household</option>
							<option value="other">Other</option>
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
