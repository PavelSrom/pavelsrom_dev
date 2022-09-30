import { MantineThemeOverride } from '@mantine/core'

export const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: 'Noto Sans, sans-serif',
  breakpoints: {
    // match tailwind breakpoints
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  components: {
    Button: {
      defaultProps: {
        radius: 8,
      },
    },
    TextInput: {
      defaultProps: {
        radius: 8,
        size: 'lg',
      },
    },
    Textarea: {
      defaultProps: {
        radius: 8,
        size: 'lg',
      },
    },
  },
}
