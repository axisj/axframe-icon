import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIArrowLogOut: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5611 8.33892C14.8649 8.03518 15.3573 8.03518 15.6611 8.33892L18.7722 11.45C19.0759 11.7538 19.0759 12.2462 18.7722 12.55L15.6611 15.6611C15.3573 15.9648 14.8649 15.9648 14.5611 15.6611C14.2574 15.3573 14.2574 14.8649 14.5611 14.5611L16.3445 12.7778H9.92593C9.49637 12.7778 9.14815 12.4296 9.14815 12C9.14815 11.5704 9.49637 11.2222 9.92593 11.2222H16.3445L14.5611 9.43886C14.2574 9.13512 14.2574 8.64266 14.5611 8.33892Z"
      fill="#C7CED9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5.77778C5 5.34822 5.34822 5 5.77778 5H12C12.4296 5 12.7778 5.34822 12.7778 5.77778C12.7778 6.20733 12.4296 6.55556 12 6.55556H6.55556V17.4444H12C12.4296 17.4444 12.7778 17.7927 12.7778 18.2222C12.7778 18.6518 12.4296 19 12 19H5.77778C5.34822 19 5 18.6518 5 18.2222V5.77778Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
