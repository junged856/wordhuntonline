import { useState } from "react";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

function Window(props: Props) {
	

	

	return <div>{props.children}</div>;
}
