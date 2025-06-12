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
				<Link href="/week-5" className="hover:text-cyan-300">
					Week-5
				</Link>
				<Link href="/week-6" className="hover:text-cyan-300">
					Week-6
				</Link>
				<Link href="/week-7" className="hover:text-cyan-300">
					Week-7
				</Link>
				<Link href="/week-8" className="hover:text-cyan-300">
					Week-8
				</Link>
				<Link href="/week-9" className="hover:text-cyan-300">
					Week-9
				</Link>
			</div>
		</div>
	);
}
