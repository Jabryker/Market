import { FC, ReactNode } from "react"
import { FooterOrganism, HeaderOrganism, SubHeaderOrganism } from "../components/organisms"

type LayoutProps = {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SubHeaderOrganism />
      <HeaderOrganism />
      <main>{children}</main>
      <FooterOrganism />
    </>
  )
}

export default Layout
