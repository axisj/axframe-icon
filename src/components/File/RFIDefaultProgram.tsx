import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const RFIDefaultProgram: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 24 24"
    role="rfi-icon"
    data-rfi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3853 1.24876C12.1806 1.24743 13.017 1.41198 13.6926 1.7821L13.6968 1.78441L18.694 4.56377C18.6943 4.56389 18.6938 4.56364 18.694 4.56377C19.4051 4.9577 20.0083 5.61837 20.4312 6.33544C20.8541 7.05268 21.14 7.89939 21.14 8.71131V13.9999C21.14 14.8118 20.8541 15.6586 20.4312 16.3758C20.0083 17.0929 19.4058 17.7532 18.6947 18.1471C18.6945 18.1472 18.695 18.147 18.6947 18.1471L13.6968 20.9268L13.6951 20.9278C13.0224 21.2995 12.1848 21.4637 11.39 21.4637C10.5952 21.4637 9.75764 21.2995 9.08497 20.9278L4.08599 18.1475C4.08576 18.1473 4.08621 18.1476 4.08599 18.1475C3.37493 17.7535 2.7717 17.0929 2.34888 16.3758C1.92596 15.6586 1.64001 14.8118 1.64001 13.9999V8.71131C1.64001 7.89939 1.92596 7.05268 2.34888 6.33544C2.77178 5.61824 3.37448 4.95783 4.08569 4.56393L9.08247 1.79418C9.75538 1.41697 10.591 1.25008 11.3853 1.24876ZM11.3878 2.74875C10.7763 2.74977 10.2087 2.88211 9.81489 3.10321L9.81135 3.1052L4.8129 5.87586C4.50304 6.04744 4.18986 6.33069 3.9173 6.68678L11.3851 11.0085L18.8576 6.68008C18.5862 6.32714 18.2753 6.04652 17.9674 5.87602L17.9662 5.87534L12.97 3.09657C12.5693 2.87762 11.9978 2.74774 11.3878 2.74875ZM19.5372 8.01989L12.1353 12.3074V19.8969C12.4546 19.8377 12.7409 19.7411 12.9685 19.6155C12.9688 19.6153 12.9692 19.6151 12.9695 19.6149L17.9662 16.8359L17.9674 16.8352C18.3887 16.602 18.8155 16.1626 19.139 15.6139C19.4626 15.0652 19.64 14.4797 19.64 13.9999V8.71131C19.64 8.4976 19.6048 8.26294 19.5372 8.01989ZM10.6353 19.8951V12.3076L3.24054 8.0282C3.17441 8.26828 3.14001 8.50004 3.14001 8.71131V13.9999C3.14001 14.4797 3.31741 15.0652 3.64098 15.6139C3.96451 16.1626 4.39135 16.602 4.81261 16.8352L4.81384 16.8359L9.8105 19.6149C9.81068 19.615 9.81032 19.6148 9.8105 19.6149C10.0359 19.7394 10.3195 19.8357 10.6353 19.8951Z"
      fill="#C7CED9"
    />
  </SvgComponent>
);
