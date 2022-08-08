import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIArrowDown: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      d="M15.4625 9.29249L11.5825 13.1725L7.7025 9.29249C7.3125 8.90249 6.6825 8.90249 6.2925 9.29249C5.9025 9.68249 5.9025 10.3125 6.2925 10.7025L10.8825 15.2925C11.2725 15.6825 11.9025 15.6825 12.2925 15.2925L16.8825 10.7025C17.2725 10.3125 17.2725 9.68249 16.8825 9.29249C16.4925 8.91249 15.8525 8.90249 15.4625 9.29249Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
