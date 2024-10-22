import { createRootRoute, Outlet } from '@tanstack/react-router'
import Nav from '../components/nav'
import Footer from '../components/footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  ),
})