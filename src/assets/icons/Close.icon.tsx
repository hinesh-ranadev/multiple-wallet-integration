import React, { ReactElement } from "react";

import { IconProps } from ".";

export const CloseIcon = (props: IconProps): ReactElement => (
  <svg
    width={22}
    height={22}
    fill="none"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.412 1.588L1.588 20.412M1.588 1.588l18.824 18.824"
      stroke="#000"
      strokeWidth={1.2}
      strokeLinecap="square"
    />
  </svg>
);
