import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const AXFIFile: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="axf-icon"
    data-axf-i-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 18.1702C19.0007 19.7329 17.7341 21 16.1714 21L7.4818 21C5.91962 21 4.65323 19.7336 4.65323 18.1714L4.65323 5.82857C4.65323 4.26639 5.91962 3 7.4818 3L12.1916 3C12.9418 3 13.6613 3.29801 14.1917 3.82847L18.168 7.80474C18.6982 8.3349 18.9961 9.05387 18.9965 9.80364L19 18.1702ZM16.1714 19.4571C16.8817 19.4571 17.4574 18.8812 17.4571 18.1709L17.4536 9.80429C17.4535 9.46349 17.318 9.13669 17.077 8.8957L13.1008 4.91943C12.8596 4.67832 12.5326 4.54286 12.1916 4.54286L7.4818 4.54286C6.77172 4.54286 6.19608 5.11849 6.19608 5.82857L6.19608 18.1714C6.19608 18.8815 6.77172 19.4571 7.4818 19.4571L16.1714 19.4571Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
