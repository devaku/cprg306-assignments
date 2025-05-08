'use client';
import { useState } from 'react';

export default function NewItem() {
	const [quantity, setQuantity] = useState(0);

	function handleOnClick(e) {
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
		<div className="bg-sky-400 mx-auto p-2 w-1/5 text-black rounded-sm">
			<div className="flex">
				<div className="flex-grow">{quantity}</div>
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
		</div>
	);
}
