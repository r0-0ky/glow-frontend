import { FC, SVGProps } from 'react';

export const Cursor: FC<{
  fillColor?: string
} & SVGProps<SVGSVGElement>> = ({
  fillColor,
  ...props
}
) => (
  <svg
    width="179"
    height="179"
    viewBox="0 0 179 179"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M47.3552 53.506C45.4987 48.6646 50.2431 43.9066 55.0898 45.7494L164.556 87.3707C169.015 89.066 169.808 95.0349 165.947 97.8358L163.15 99.865C162.675 100.209 162.153 100.482 161.6 100.674L120.677 114.928C118.945 115.532 117.584 116.895 116.982 118.628L100.935 164.884C98.986 169.844 91.9569 169.815 90.0488 164.839L47.3552 53.506Z"
      fill="black"
    />
    <path
      d="M95.2868 156.689L56.0716 54.0556L158.766 93.1019L113.626 108.702C112.318 109.154 111.291 110.183 110.84 111.491L95.2868 156.689Z"
      fill={fillColor ? fillColor : "#3DFF50"}
      stroke="white"
      strokeWidth="5"
    />
  </svg>
);
