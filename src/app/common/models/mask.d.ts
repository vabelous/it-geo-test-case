declare interface InputMask {
	mask: (string | RegExp)[];
	showMask?: boolean;
	keepCharPositions?: boolean;
	guide?: boolean;
	charPos?: number;
}
