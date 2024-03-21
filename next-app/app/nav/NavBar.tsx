import NavBarItem from "./NavBarItem";
import "./nav.css"

const menuItems = [
  {
    pageTitle : "Home",
    pageRoute: "/",
    pageIcon: "/nav/Home.png"
  },
  {
    pageTitle : "Convert",
    pageRoute: "/convert",
    pageIcon: "/nav/Convert.png"
  },
  {
    pageTitle : "Wallet",
    pageRoute: "/wallet",
    pageIcon: "/nav/Wallet.png"
  }
]

export default function NavBar () {
  let navBarItems = []
  for (let i=0; i<menuItems.length; i++) {
    navBarItems.push(<NavBarItem pageTitle={menuItems[i].pageTitle} pageRoute={menuItems[i].pageRoute} pageIcon={menuItems[i].pageIcon} key={`NavBarItem${i}`}/>)
  }
  return (
    <nav className="nav-bar horizontal-center flex-row flex-center">
      {navBarItems}
    </nav>
  )
}