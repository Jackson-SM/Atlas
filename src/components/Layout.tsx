import { Navbar } from './navbar'

export const Layout = ({ children, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <Navbar /> <main>{children}</main>
    </div>
  )
}
