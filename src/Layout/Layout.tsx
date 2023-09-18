import { FC, ReactNode } from "react"
import { FooterOrganism, HeaderOrganism } from "../components/organisms"

type LayoutProps = {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderOrganism />
      <main>{children}</main>
      <FooterOrganism />
    </>
  )
}

export default Layout
