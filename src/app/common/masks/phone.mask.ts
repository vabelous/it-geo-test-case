export const PHONE_MASK: InputMask = {
  mask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
  showMask: false,
  keepCharPositions: true,
  guide: true,
  charPos: 4
};
