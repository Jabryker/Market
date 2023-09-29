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
      <main className="mx-10">{children}</main>
      <FooterOrganism />
    </>
  )
}

export default Layout
