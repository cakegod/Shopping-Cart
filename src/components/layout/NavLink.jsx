import Link from 'next/link';
import { memo, useMemo } from 'react';

function NavLink({ icon, children, url, title, classStyle }) {
	const LinkMemo = useMemo(() => {
		return <Link href={url}>{title}</Link>;
	}, [title, url]);

	return (
		<div
			className={classStyle === null ? 'flex items-center gap-1' : classStyle}>
			{icon}
			{LinkMemo}
			{children}
		</div>
	);
}

export default memo(NavLink);
