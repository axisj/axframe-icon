import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIGraph: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3C12.5523 3 13 3.44772 13 4V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V4C11 3.44772 11.4477 3 12 3ZM17 5C17.5523 5 18 5.44772 18 6V16C18 16.5523 17.5523 17 17 17C16.4477 17 16 16.5523 16 16V6C16 5.44772 16.4477 5 17 5ZM7 7C7.55229 7 8 7.44772 8 8V16C8 16.5523 7.55228 17 7 17C6.44772 17 6 16.5523 6 16L6 8C6 7.44772 6.44772 7 7 7ZM2 20C2 19.4477 2.44772 19 3 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
