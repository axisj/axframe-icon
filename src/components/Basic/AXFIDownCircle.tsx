import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const AXFIDownCircle: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="axf-icon"
    data-axf-i-color-controllable="true"
    {...props}
  >
    <path
      d="M15.4676 9.36913L11.9955 12.8412L8.52349 9.36913C8.1745 9.02013 7.61074 9.02013 7.26174 9.36913C6.91275 9.71812 6.91275 10.2819 7.26174 10.6309L11.3691 14.7383C11.7181 15.0872 12.2819 15.0872 12.6309 14.7383L16.7383 10.6309C17.0872 10.2819 17.0872 9.71812 16.7383 9.36913C16.3893 9.02908 15.8166 9.02013 15.4676 9.36913Z"
      fill="#C7CED9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20.2C16.5287 20.2 20.2 16.5287 20.2 12C20.2 7.47126 16.5287 3.8 12 3.8C7.47126 3.8 3.8 7.47126 3.8 12C3.8 16.5287 7.47126 20.2 12 20.2ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
