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
      d="M7.14541 15.8832L12.0063 11.0224L16.8671 15.8832C17.3557 16.3718 18.145 16.3718 18.6336 15.8832C19.1221 15.3946 19.1221 14.6054 18.6336 14.1168L12.8832 8.36644C12.3946 7.87785 11.6054 7.87785 11.1168 8.36644L5.36644 14.1168C4.87785 14.6054 4.87785 15.3946 5.36644 15.8832C5.85503 16.3593 6.65682 16.3718 7.14541 15.8832Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
