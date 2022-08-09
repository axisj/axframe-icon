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
      d="M8.5875 8.41749L12.4675 12.2975L8.5875 16.1775C8.1975 16.5675 8.1975 17.1975 8.5875 17.5875C8.9775 17.9775 9.6075 17.9775 9.9975 17.5875L14.5875 12.9975C14.9775 12.6075 14.9775 11.9775 14.5875 11.5875L9.9975 6.99749C9.6075 6.60749 8.9775 6.60749 8.5875 6.99749C8.2075 7.38749 8.1975 8.02749 8.5875 8.41749Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
