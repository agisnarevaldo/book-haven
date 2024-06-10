import { Icon } from "@iconify/react";

interface Props {
	children: React.ReactNode;
}

export default function Panel({ children }: Props) {
	return (
		<div className="bg-[#CCDCF3] px-8 py-4 mx-2 rounded-2xl">
			{children}
			<div className="flex mt-4 gap-3 items-center text-text-dark">
				<p>Show</p>
				<select name="entries" id="endtries" className="px-3 rounded-lg">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<p>entries</p>
			</div>
		</div>
	);
}
