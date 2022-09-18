import { MantineThemeOverride } from '@mantine/core'

export const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  breakpoints: {
    // match tailwind breakpoints
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
}
