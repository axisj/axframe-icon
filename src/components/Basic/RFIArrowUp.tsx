import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIArrowUp: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      d="M7.7125 15.2925L11.5925 11.4125L15.4725 15.2925C15.8625 15.6825 16.4925 15.6825 16.8825 15.2925C17.2725 14.9025 17.2725 14.2725 16.8825 13.8825L12.2925 9.2925C11.9025 8.9025 11.2725 8.9025 10.8825 9.2925L6.2925 13.8825C5.9025 14.2725 5.9025 14.9025 6.2925 15.2925C6.6825 15.6725 7.3225 15.6825 7.7125 15.2925Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
