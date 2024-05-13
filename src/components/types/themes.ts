export interface cssVars {
  light: {
    primary: string
  }
  dark: {
    primary: string
  }
}

export interface Themes {
  name: string
  label: string
  cssVars: cssVars
}
