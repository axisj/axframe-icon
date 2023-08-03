import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const AXFINumber: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="axf-icon"
    data-axf-i-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.375 13.625H14.625V9.375H10.375V13.625ZM21 9.375V7.25H16.75V3H14.625V7.25H10.375V3H8.25V7.25H4V9.375H8.25V13.625H4V15.75H8.25V20H10.375V15.75H14.625V20H16.75V15.75H21V13.625H16.75V9.375H21Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
