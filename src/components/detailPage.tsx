export const DetailPage = ({
	title,
	description,
	children,
}: {
	title: string;
	description: string;
	children?: React.ReactNode;
}) => (
	<div className="relative w-full min-h-[100dvh] border-y border-light-pageBorder dark:border-dark-pageBorder py-12 sm:py-14">
		<div className="flex flex-col gap-1 px-10 sm:px-14">
			<p className="font-HSSanTokki20 text-3xl">{title}</p>
			<p className="text-xl">{description}</p>
		</div>
		{children}
	</div>
);
