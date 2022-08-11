import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIAdd: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 3C12.1706 3 12.7143 3.54365 12.7143 4.21429V10.2857L18.7857 10.2857C19.4563 10.2857 20 10.8294 20 11.5C20 12.1706 19.4563 12.7143 18.7857 12.7143L12.7143 12.7143V18.7857C12.7143 19.4563 12.1706 20 11.5 20C10.8294 20 10.2857 19.4563 10.2857 18.7857V12.7143H4.21429C3.54365 12.7143 3 12.1706 3 11.5C3 10.8294 3.54365 10.2857 4.21429 10.2857H10.2857V4.21429C10.2857 3.54365 10.8294 3 11.5 3Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
