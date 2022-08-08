import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIHome: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4188 5.18627C11.7665 4.93791 12.2335 4.93791 12.5812 5.18627L19.5812 10.1863C20.0307 10.5073 20.1347 11.1318 19.8137 11.5812C19.4927 12.0307 18.8682 12.1347 18.4188 11.8137L18 11.5146V16C18 17.6569 16.6569 19 15 19H9C7.34316 19 6 17.6569 6 16V11.5146L5.58124 11.8137C5.13183 12.1347 4.50728 12.0307 4.18627 11.5812C3.86526 11.1318 3.96935 10.5073 4.41876 10.1863L11.4188 5.18627ZM8 10.086V16C8 16.5523 8.44771 17 9 17H15C15.5523 17 16 16.5523 16 16V10.086L12 7.2289L8 10.086Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
