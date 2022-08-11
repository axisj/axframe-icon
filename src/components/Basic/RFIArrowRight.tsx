import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIArrowRight: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      d="M8.11678 7.14541L12.9776 12.0063L8.11678 16.8671C7.62819 17.3557 7.62819 18.145 8.11678 18.6336C8.60537 19.1221 9.39463 19.1221 9.88322 18.6336L15.6336 12.8832C16.1221 12.3946 16.1221 11.6054 15.6336 11.1168L9.88322 5.36644C9.39463 4.87785 8.60537 4.87785 8.11678 5.36644C7.64072 5.85503 7.62819 6.65682 8.11678 7.14541Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
