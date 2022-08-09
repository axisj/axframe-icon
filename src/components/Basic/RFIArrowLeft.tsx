import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIArrowLeft: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      d="M14.5875 16.1675L10.7075 12.2875L14.5875 8.4075C14.9775 8.0175 14.9775 7.3875 14.5875 6.9975C14.1975 6.6075 13.5675 6.6075 13.1775 6.9975L8.5875 11.5875C8.1975 11.9775 8.1975 12.6075 8.5875 12.9975L13.1775 17.5875C13.5675 17.9775 14.1975 17.9775 14.5875 17.5875C14.9675 17.1975 14.9775 16.5575 14.5875 16.1675Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
