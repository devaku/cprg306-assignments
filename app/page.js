import Link from 'next/link';
export default function Home() {
	return (
		<div className="flex flex-col w-1/4 mx-auto mt-10 gap-2">
			<h1>CPRG 306: Web Development 2 - Assignments</h1>
			<div className="flex flex-col w-full">
				<Link href="/week-2" className="hover:text-cyan-300">
					Week-2
				</Link>
				<Link href="/week-3" className="hover:text-cyan-300">
					Week-3
				</Link>
				<Link href="/week-4" className="hover:text-cyan-300">
					Week-4
				</Link>
			</div>
		</div>
	);
}
