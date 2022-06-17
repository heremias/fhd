import React from "react"
import "../../styles/main.css"
import { Link } from "../link"
import Header from "./header"

const Layout = ({ children } :any) => {

  return (
    <>
      <div className="bar topbar"></div>
      <main className="pageStyles">
        <title>Home Page</title>
        <Link to="/" className="headingStyles">
          <Header />
        </Link>
        {children}
      </main>
    </>
  )
}

export { Layout };
