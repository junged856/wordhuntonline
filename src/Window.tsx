import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

// will use later

function Window(props: Props) {
	return <div>{props.children}</div>;
}
