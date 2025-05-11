import {React , useEffect} from "react";
import {Outlet, Link} from "react-router";

export default function Home() {
  useEffect(() => {
    document.title = "Rangka Empat Studio | We Design. We Code. We Deliver. We Care."; // Quick solution
  }, []);

  return (
    <>
      {/* <Link> </Link> for different pages */}
      <Link to="/">Home</Link>

      <div>Hello</div>

      <Outlet />
    </>
  )
}