import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFICalendarEvent: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <g clipPath="url(#clip0_114_33)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.95 2C8.44706 2 8.85 2.40294 8.85 2.9V4.025H15.15V2.9C15.15 2.40294 15.5529 2 16.05 2C16.5471 2 16.95 2.40294 16.95 2.9V4.025H18.075C19.6904 4.025 21 5.33457 21 6.95V19.1C21 20.7154 19.6904 22.025 18.075 22.025H5.925C4.30957 22.025 3 20.7154 3 19.1V6.95C3 5.33457 4.30957 4.025 5.925 4.025H7.05V2.9C7.05 2.40294 7.45294 2 7.95 2ZM7.05 5.825H5.925C5.30368 5.825 4.8 6.32868 4.8 6.95V10.1H19.2V6.95C19.2 6.32868 18.6963 5.825 18.075 5.825H16.95V6.95C16.95 7.44706 16.5471 7.85 16.05 7.85C15.5529 7.85 15.15 7.44706 15.15 6.95V5.825H8.85V6.95C8.85 7.44706 8.44706 7.85 7.95 7.85C7.45294 7.85 7.05 7.44706 7.05 6.95V5.825ZM19.2 11.9H4.8V19.1C4.8 19.7213 5.30368 20.225 5.925 20.225H18.075C18.6963 20.225 19.2 19.7213 19.2 19.1V11.9ZM7.05 15.05C7.05 14.5529 7.45294 14.15 7.95 14.15H9.975C10.4721 14.15 10.875 14.5529 10.875 15.05V17.075C10.875 17.5721 10.4721 17.975 9.975 17.975H7.95C7.45294 17.975 7.05 17.5721 7.05 17.075V15.05ZM8.85 15.95V16.175H9.075V15.95H8.85Z"
        fill="#C7CED9"
      />
    </g>
    <defs>
      <clipPath id="clip0_114_33">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </SvgComponent>
);
