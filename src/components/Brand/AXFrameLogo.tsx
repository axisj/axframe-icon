import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const AXFrameLogo: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="axf-icon"
    data-axf-i-color-controllable="false"
    {...props}
  >
    <path
      d="M4.41328 2C2.58535 2 1.42301 3.95716 2.29613 5.56422L10.5503 20.7495C10.9695 21.5203 11.7756 21.9999 12.6522 21.9999H12.6528C13.5288 21.9999 14.3355 21.5203 14.7541 20.7495C15.1545 20.0139 15.1545 19.126 14.7541 18.3904L6.5299 3.2593C6.10776 2.48313 5.29581 2 4.41328 2Z"
      fill="#EC5959"
    />
    <path
      d="M18.8243 10.7384L21.637 5.56428C22.5107 3.95722 21.3477 2.00006 19.5204 2.00006C18.6373 2.00006 17.8253 2.48319 17.4032 3.25936C16.5789 4.77576 16.5789 6.60697 17.4032 8.12396L18.8243 10.7384Z"
      fill="#EC5959"
    />
    <path
      d="M5.10889 13.2617L2.2961 18.4358C1.42304 20.0428 2.58538 22 4.41331 22C5.29584 22 6.10779 21.5169 6.52993 20.7408C7.35422 19.2244 7.35422 17.3931 6.52993 15.8761L5.10889 13.2617Z"
      fill="#276093"
    />
    <path
      d="M11.3587 2C9.53078 2 8.36844 3.95716 9.24214 5.56422L17.4957 20.7495C17.9149 21.5203 18.7216 21.9999 19.5982 21.9999C20.4749 21.9999 21.2809 21.5203 21.7001 20.7495C22.1 20.0139 22.1 19.126 21.7001 18.3904L13.4753 3.2593C13.0538 2.48313 12.2412 2 11.3587 2Z"
      fill="#276093"
    />
  </SvgComponent>
);