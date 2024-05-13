import { ThemeCustomizer } from './themes/theme-customizer'

export const Navbar = () => {
  return (
    <header>
      <h1 className="text-primary">Atlas</h1>
      <ThemeCustomizer />
    </header>
  )
}
