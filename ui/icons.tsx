const iconSizeClassnames = {
  small: 'w-6 h-6',
  medium: 'w-8 h-8',
  large: 'w-12 h-12',
  xxlarge: 'w-16 h-16',
}

const PRIMARY_COLOR = '#4DABF7'

export interface IconProps {
  size?: keyof typeof iconSizeClassnames
  color?: string
}

export const ApplicationBracketsIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M9.5,8.5L11,10L8,13L11,16L9.5,17.5L5,13L9.5,8.5M14.5,17.5L13,16L16,13L13,10L14.5,8.5L19,13L14.5,17.5M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M21,20H3V6H21V20Z"
    />
  </svg>
)

export const VectorCircleIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M9,2V4.06C6.72,4.92 4.92,6.72 4.05,9H2V15H4.06C4.92,17.28 6.72,19.09 9,19.95V22H15V19.94C17.28,19.08 19.09,17.28 19.95,15H22V9H19.94C19.08,6.72 17.28,4.92 15,4.05V2M11,4H13V6H11M9,6.25V8H15V6.25C16.18,6.86 17.14,7.82 17.75,9H16V15H17.75C17.14,16.18 16.18,17.14 15,17.75V16H9V17.75C7.82,17.14 6.86,16.18 6.25,15H8V9H6.25C6.86,7.82 7.82,6.86 9,6.25M4,11H6V13H4M18,11H20V13H18M11,18H13V20H11"
    />
  </svg>
)

export const HumanMaleBoardIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M20,17A2,2 0 0,0 22,15V4A2,2 0 0,0 20,2H9.46C9.81,2.61 10,3.3 10,4H20V15H11V17M15,7V9H9V22H7V16H5V22H3V14H1.5V9A2,2 0 0,1 3.5,7H15M8,4A2,2 0 0,1 6,6A2,2 0 0,1 4,4A2,2 0 0,1 6,2A2,2 0 0,1 8,4Z"
    />
  </svg>
)

export const ArrowExpandAllIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M9.5,13.09L10.91,14.5L6.41,19H10V21H3V14H5V17.59L9.5,13.09M10.91,9.5L9.5,10.91L5,6.41V10H3V3H10V5H6.41L10.91,9.5M14.5,13.09L19,17.59V14H21V21H14V19H17.59L13.09,14.5L14.5,13.09M13.09,9.5L17.59,5H14V3H21V10H19V6.41L14.5,10.91L13.09,9.5Z"
    />
  </svg>
)

export const DumbbellIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z"
    />
  </svg>
)

export const BrainIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M21.33,12.91C21.42,14.46 20.71,15.95 19.44,16.86L20.21,18.35C20.44,18.8 20.47,19.33 20.27,19.8C20.08,20.27 19.69,20.64 19.21,20.8L18.42,21.05C18.25,21.11 18.06,21.14 17.88,21.14C17.37,21.14 16.89,20.91 16.56,20.5L14.44,18C13.55,17.85 12.71,17.47 12,16.9C11.5,17.05 11,17.13 10.5,17.13C9.62,17.13 8.74,16.86 8,16.34C7.47,16.5 6.93,16.57 6.38,16.56C5.59,16.57 4.81,16.41 4.08,16.11C2.65,15.47 1.7,14.07 1.65,12.5C1.57,11.78 1.69,11.05 2,10.39C1.71,9.64 1.68,8.82 1.93,8.06C2.3,7.11 3,6.32 3.87,5.82C4.45,4.13 6.08,3 7.87,3.12C9.47,1.62 11.92,1.46 13.7,2.75C14.12,2.64 14.56,2.58 15,2.58C16.36,2.55 17.65,3.15 18.5,4.22C20.54,4.75 22,6.57 22.08,8.69C22.13,9.8 21.83,10.89 21.22,11.82C21.29,12.18 21.33,12.54 21.33,12.91M16.33,11.5C16.9,11.57 17.35,12 17.35,12.57A1,1 0 0,1 16.35,13.57H15.72C15.4,14.47 14.84,15.26 14.1,15.86C14.35,15.95 14.61,16 14.87,16.07C20,16 19.4,12.87 19.4,12.82C19.34,11.39 18.14,10.27 16.71,10.33A1,1 0 0,1 15.71,9.33A1,1 0 0,1 16.71,8.33C17.94,8.36 19.12,8.82 20.04,9.63C20.09,9.34 20.12,9.04 20.12,8.74C20.06,7.5 19.5,6.42 17.25,6.21C16,3.25 12.85,4.89 12.85,5.81V5.81C12.82,6.04 13.06,6.53 13.1,6.56A1,1 0 0,1 14.1,7.56C14.1,8.11 13.65,8.56 13.1,8.56V8.56C12.57,8.54 12.07,8.34 11.67,8C11.19,8.31 10.64,8.5 10.07,8.56V8.56C9.5,8.61 9.03,8.21 9,7.66C8.92,7.1 9.33,6.61 9.88,6.56C10.04,6.54 10.82,6.42 10.82,5.79V5.79C10.82,5.13 11.07,4.5 11.5,4C10.58,3.75 9.59,4.08 8.59,5.29C6.75,5 6,5.25 5.45,7.2C4.5,7.67 4,8 3.78,9C4.86,8.78 5.97,8.87 7,9.25C7.5,9.44 7.78,10 7.59,10.54C7.4,11.06 6.82,11.32 6.3,11.13C5.57,10.81 4.75,10.79 4,11.07C3.68,11.34 3.68,11.9 3.68,12.34C3.68,13.08 4.05,13.77 4.68,14.17C5.21,14.44 5.8,14.58 6.39,14.57C6.24,14.31 6.11,14.04 6,13.76C5.81,13.22 6.1,12.63 6.64,12.44C7.18,12.25 7.77,12.54 7.96,13.08C8.36,14.22 9.38,15 10.58,15.13C11.95,15.06 13.17,14.25 13.77,13C14,11.62 15.11,11.5 16.33,11.5M18.33,18.97L17.71,17.67L17,17.83L18,19.08L18.33,18.97M13.68,10.36C13.7,9.83 13.3,9.38 12.77,9.33C12.06,9.29 11.37,9.53 10.84,10C10.27,10.58 9.97,11.38 10,12.19A1,1 0 0,0 11,13.19C11.57,13.19 12,12.74 12,12.19C12,11.92 12.07,11.65 12.23,11.43C12.35,11.33 12.5,11.28 12.66,11.28C13.21,11.31 13.68,10.9 13.68,10.36Z"
    />
  </svg>
)

export const CocktailIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z"
    />
  </svg>
)

export const LanguageIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M11 1H3C1.9 1 1 1.9 1 3V15L4 12H9V11C9 8.8 10.79 7 13 7V3C13 1.9 12.1 1 11 1M11 4L9.5 4C9.16 5.19 8.54 6.3 7.68 7.26L7.66 7.28L8.92 8.53L8.55 9.54L7 8L4.5 10.5L3.81 9.77L6.34 7.28C5.72 6.59 5.22 5.82 4.86 5H5.85C6.16 5.6 6.54 6.17 7 6.68C7.72 5.88 8.24 4.97 8.57 4L3 4V3H6.5V2H7.5V3H11V4M21 9H13C11.9 9 11 9.9 11 11V18C11 19.1 11.9 20 13 20H20L23 23V11C23 9.9 22.1 9 21 9M19.63 19L18.78 16.75H15.22L14.38 19H12.88L16.25 10H17.75L21.13 19H19.63M17 12L18.22 15.25H15.79L17 12Z"
    />
  </svg>
)

export const CalendarIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M15 13H9V11L6 14L9 17V15H15V17L18 14L15 11V13M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5Z"
    />
  </svg>
)

export const ClockIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V13H7V11.5H11V7H12.5Z"
    />
  </svg>
)

export const LocationIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
    />
  </svg>
)

export const AccountMultipleIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z"
    />
  </svg>
)

export const AppleIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
    />
  </svg>
)

export const LaptopIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"
    />
  </svg>
)

export const PhoneIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"
    />
  </svg>
)

export const WatchIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12M20,12C20,9.45 18.81,7.19 16.95,5.73L16,0H8L7.05,5.73C5.19,7.19 4,9.45 4,12C4,14.54 5.19,16.81 7.05,18.27L8,24H16L16.95,18.27C18.81,16.81 20,14.54 20,12Z"
    />
  </svg>
)

export const EarbudsIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M5 3C3 3 2 5 2 6V11C2 12 3 14 5 14C5.61 14 6.32 13.72 7 13.27V20C7 20.55 7.45 21 8 21H9C9.55 21 10 20.55 10 20V8C10 6 7 3 5 3M8 10.23L5.91 11.6C5.4 11.93 5.08 12 5 12C4.3 12 4 11.08 4 11L4 6.03C4 5.92 4.3 5 5 5C5.9 5 8 7.1 8 8V10.23M16.5 15C17.2 15 17.87 14.89 18.5 14.68V20C18.5 20.55 18.05 21 17.5 21H15.5C14.95 21 14.5 20.55 14.5 20V14.68C15.13 14.89 15.8 15 16.5 15M16.5 3C13.46 3 11 5.46 11 8.5S13.46 14 16.5 14 22 11.54 22 8.5 19.54 3 16.5 3M16.5 12C14.57 12 13 10.43 13 8.5S14.57 5 16.5 5 20 6.57 20 8.5 18.43 12 16.5 12Z"
    />
  </svg>
)

export const KeyboardIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M4,5A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7A2,2 0 0,0 20,5H4M4,7H20V17H4V7M5,8V10H7V8H5M8,8V10H10V8H8M11,8V10H13V8H11M14,8V10H16V8H14M17,8V10H19V8H17M5,11V13H7V11H5M8,11V13H10V11H8M11,11V13H13V11H11M14,11V13H16V11H14M17,11V13H19V11H17M8,14V16H16V14H8Z"
    />
  </svg>
)

export const MouseIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M11,1.07C7.05,1.56 4,4.92 4,9H11M4,15A8,8 0 0,0 12,23A8,8 0 0,0 20,15V11H4M13,1.07V9H20C20,4.92 16.94,1.56 13,1.07Z"
    />
  </svg>
)

export const GithubIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>
)

export const LinkedinIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
    />
  </svg>
)

export const VscIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M17,16.47V7.39L11,11.93M2.22,9.19C1.92,8.87 1.91,8.37 2.2,8.04L3.4,6.93C3.6,6.75 4.09,6.67 4.45,6.93L7.87,9.54L15.8,2.29C16.12,1.97 16.67,1.84 17.3,2.17L21.3,4.08C21.66,4.29 22,4.62 22,5.23V18.73C22,19.13 21.71,19.56 21.4,19.73L17,21.83C16.68,21.96 16.08,21.84 15.87,21.63L7.85,14.33L4.45,16.93C4.07,17.19 3.6,17.12 3.4,16.93L2.2,15.83C1.88,15.5 1.92,14.96 2.25,14.63L5.25,11.93"
    />
  </svg>
)

export const ChromeIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M12,20L15.46,14H15.45C15.79,13.4 16,12.73 16,12C16,10.8 15.46,9.73 14.62,9H19.41C19.79,9.93 20,10.94 20,12A8,8 0 0,1 12,20M4,12C4,10.54 4.39,9.18 5.07,8L8.54,14H8.55C9.24,15.19 10.5,16 12,16C12.45,16 12.88,15.91 13.29,15.77L10.89,19.91C7,19.37 4,16.04 4,12M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12M12,4C14.96,4 17.54,5.61 18.92,8H12C10.06,8 8.45,9.38 8.08,11.21L5.7,7.08C7.16,5.21 9.44,4 12,4M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>
)

export const MailIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
    />
  </svg>
)

export const TodoIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z"
    />
  </svg>
)

export const PencilIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
    />
  </svg>
)

export const IcloudIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path
      fill={color}
      d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
    />
  </svg>
)

export const MenuIcon = ({
  size = 'small',
  color = PRIMARY_COLOR,
}: IconProps) => (
  <svg viewBox="0 0 24 24" className={iconSizeClassnames[size]}>
    <path fill={color} d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </svg>
)
