import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIFile: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7491 17.9988C18.7498 19.5181 17.5184 20.75 15.9991 20.75L7.55089 20.75C6.03211 20.75 4.80089 19.5188 4.80089 18L4.80089 6C4.80089 4.48122 6.03211 3.25 7.55089 3.25L12.1299 3.25C12.8592 3.25 13.5587 3.53973 14.0744 4.05546L17.9403 7.92127C18.4557 8.43671 18.7454 9.13571 18.7457 9.86465L18.7491 17.9988ZM15.9991 19.25C16.6897 19.25 17.2494 18.69 17.2491 17.9995L17.2457 9.86529C17.2456 9.53395 17.1139 9.21622 16.8796 8.98193L13.0138 5.11612C12.7794 4.8817 12.4614 4.75 12.1299 4.75L7.55089 4.75C6.86054 4.75 6.30089 5.30964 6.30089 6L6.30089 18C6.30089 18.6904 6.86054 19.25 7.55089 19.25L15.9991 19.25Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
