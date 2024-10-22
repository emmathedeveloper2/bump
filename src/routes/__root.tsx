import { createRootRoute, Outlet } from '@tanstack/react-router'
import Nav from '../components/nav'
import Footer from '../components/footer'

export const Route = createRootRoute({
  meta: () => [
    {title: 'Bump'},
    {description: 'Get homes and condos suited to your needs'},
  ],
  component: () => (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  ),
})