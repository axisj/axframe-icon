import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const AXFIArrowDown: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="axf-icon"
    data-axf-i-color-controllable="true"
    {...props}
  >
    <path
      d="M16.8546 8.11678L11.9937 12.9776L7.13288 8.11678C6.64429 7.62819 5.85503 7.62819 5.36644 8.11678C4.87785 8.60537 4.87785 9.39463 5.36644 9.88322L11.1168 15.6336C11.6054 16.1221 12.3946 16.1221 12.8832 15.6336L18.6336 9.88322C19.1221 9.39463 19.1221 8.60537 18.6336 8.11678C18.145 7.64072 17.3432 7.62819 16.8546 8.11678Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
