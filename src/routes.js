import { lazy } from "react"
const Home = lazy(() => import("./page/home/Home"))
const About = lazy(() => import("./page/about/About"))
const Project = lazy(() => import("./page/project/Project"))
const Contact = lazy(() => import("./page/contact/Contact"))

export const PublicRouter = [
   {
    path: '/',
    element: <Home />
   },
   {
    path: '/about',
    element: <About />
   },
   {
    path: '/project',
    element: <Project />
   },
   {
    path: '/contact',
    element: <Contact />
   },
]