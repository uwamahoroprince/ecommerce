// import React, { useState } from "react";
// import { Link, withRouter } from "react-router-dom";

// //IMPORTING MUDELS
// import DrawerToggleBotton from "../../components/Core/DrawerToogleButton";

// import { MenuItems } from "./MenuItems";
// import "./navbar.css";

// //IMPORTING COMPONENTS
// import { signout, isAuth } from "../../../src/authenticate/index";
// import { itemtotal } from "./CartOperations";

// const isActive = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "#ffffff" };
//   } else {
//     return { color: "#000000" };
//   }
// };

// const Navbar = ({ history }, props) => {
//   return (
//     <React.Fragment>
//       <header className="toolbar">
//         <nav className="tool-navigation">
//           <div>
//             <DrawerToggleBotton click={props.drawerClickHander} />
//           </div>
//           <div className="toolbar-logo">
//             <a href="/">logo</a>
//           </div>
//           <div className="spacer" />
//           <div className="toolbar-navigation-item">
//             <ul>
//               {MenuItems.map((items, index) => {
//                 return (
//                   <li>
//                     <Link
//                       className={items.cName}
//                       key={index}
//                       style={isActive(history, `/${items.url}`)}
//                       to={`/${items.url}`}
//                     >
//                       <i className={items.icon}></i>
//                       {items.title}
//                       {/* <span className="sr-only">(current)</span> */}
//                     </Link>
//                   </li>
//                 );
//               })}
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   style={isActive(history, "/productCart")}
//                   to="/productCart"
//                 >
//                   <i className="fas fa-cart-plus"></i>
//                   <sup>
//                     <small
//                       className="cart-badge badge-info"
//                       style={{
//                         borderRadius: "50%",
//                         padding: "2px",
//                         fontSize: "12px",
//                         fontStyle: "bold",
//                         fontFamily: "sans-serif",
//                       }}
//                     >
//                       {itemtotal()}
//                     </small>
//                   </sup>
//                 </Link>
//               </li>
//               {isAuth() && isAuth().user.role === "1" && (
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     style={isActive(history, "/admin/dashboard")}
//                     to="/admin/dashboard"
//                   >
//                     <i class="fas fa-columns"></i> Dashboard
//                   </Link>
//                 </li>
//               )}
//               {isAuth() && isAuth().user.role === "0" && (
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     style={isActive(history, "/user/dashboard")}
//                     to="/user/dashboard"
//                   >
//                     Dashboard
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>

//           {!isAuth() && (
//             <React.Fragment>
//               <div className="auth">
//                 <p
//                   className="my-md-4 header-links"
//                   style={{
//                     position: "fixed",
//                     left: "83%",
//                     top: 0,
//                   }}
//                 >
//                   <Link
//                     className=""
//                     style={
//                       (isActive(history, "/signin"),
//                       { textDecoration: "none", color: "#000000" })
//                     }
//                     to="/signin"
//                   >
//                     LogIn <i class="fas fa-sign-in-alt"></i>
//                   </Link>
//                   <Link
//                     className=""
//                     style={
//                       (isActive(history, "/signup"),
//                       { textDecoration: "none", color: "#000000" })
//                     }
//                     to="/signup"
//                   >
//                     SignUp <i class="fas fa-user-plus"></i>
//                   </Link>
//                 </p>
//               </div>
//             </React.Fragment>
//           )}
//           {isAuth() && (
//             <div className="col-md-4 col-12 ">
//               <p
//                 className="my-md-1 header-links"
//                 style={{
//                   position: "fixed",
//                   left: "83%",
//                   top: 0,
//                 }}
//               >
//                 <span
//                   className="nav-link"
//                   style={{
//                     cursor: "pointer",
//                     color: "#ffffff",
//                     fontSize: "1em",
//                   }}
//                   onClick={() =>
//                     signout(() => {
//                       history.push("/");
//                     })
//                   }
//                 >
//                   SignOut <i class="fas fa-sign-out-alt"></i>
//                 </span>
//               </p>
//             </div>
//           )}
//         </nav>
//       </header>
//       <div className="spacer"></div>
//     </React.Fragment>
//   );
// };
// export default withRouter(Navbar);

{
  /* <section>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" className="d-block w-100" alt="...">
            </div>
            <div className="carousel-item">
                <img src="https://pbs.twimg.com/media/EGHYvtkUcAAuc8T?format=jpg&name=large" className="d-block w-100" alt="...">
            </div>
            <div className="carousel-item">
                <img src="https://pbs.twimg.com/media/EGHYvtjU0AAO8w1?format=jpg&name=large" className="d-block w-100" alt="...">
            </div>
          
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
</section>




<section className="search-sec">
    <div className="container">
        <form action="#" method="post" novalidate="novalidate" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" className="form-control search-slt" placeholder="Enter Pickup City">
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" className="form-control search-slt" placeholder="Enter Drop City" onChange={handleChange("search")}>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select className="form-control search-slt" id="exampleFormControlSelect1"  onChange={handleChange("category")}>
                                <option  value="All">All</option>
                                {categories.map((cat, index) => (
                  <option key={index} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
                            </select>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="submit" className="btn btn-danger wrn-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section> */
}

// import React, { useState } from "react";
// import { Link, withRouter } from "react-router-dom";
// //IMPORTING MUDELS
// import DrawerToggleBotton from "../../components/Core/DrawerToogleButton";
// import "./responsive.css";
// import "./mainStyles.css";

// import { MenuItems } from "./MenuItems";
// import "./navbar.css";

// //IMPORTING COMPONENTS
// import { signout, isAuth } from "../../../src/authenticate/index";
// import { itemtotal } from "./CartOperations";

// // const isActive = (history, path) => {
// //   if (history.location.pathname === path) {
// //     return { color: "#ffffff" };
// //   } else {
// //     return { color: "#000000" };
// //   }
// // };

// const Navbar = (props) => {
//   return (
//     <React.Fragment>
//       <header className="header">
//         <div className="header_overlay"></div>
//         <div className="header_content d-flex flex-row align-items-center justify-content-start">
//           <div className="logo">
//             <a href="#">
//               <div className="d-flex flex-row align-items-center justify-content-start">
//                 <div>
//                   <img src="images/logo_1.png" alt="" />
//                 </div>
//                 <div>IZINA</div>
//               </div>
//             </a>
//           </div>
//           <div className="hamburger">
//             <i className="fa fa-bars" aria-hidden="true"></i>
//           </div>
//           <nav className="main_nav">
//             <ul className="d-flex flex-row align-items-start justify-content-start">
//               {MenuItems.map((items, index) => {
//                 return (
//                   <li>
//                     <Link
//                       className={items.cName}
//                       key={index}
//                       // style={isActive(history, `/${items.url}`)}
//                       to={`/${items.url}`}
//                     >
//                       <i className={items.icon}></i>
//                       {items.title}
//                       {/* <span className="sr-only">(current)</span> */}
//                     </Link>
//                   </li>
//                 );
//               })}
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   // style={isActive(history, "/productCart")}
//                   to="/productCart"
//                 >
//                   <i className="fas fa-cart-plus"></i>
//                   <sup>
//                     <small
//                       className="cart-badge badge-info"
//                       style={{
//                         borderRadius: "50%",
//                         padding: "2px",
//                         fontSize: "12px",
//                         fontStyle: "bold",
//                         fontFamily: "sans-serif",
//                       }}
//                     >
//                       {itemtotal()}
//                     </small>
//                   </sup>
//                 </Link>
//               </li>
//               {isAuth() && isAuth().user.role === "1" && (
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     // style={isActive(history, "/admin/dashboard")}
//                     to="/admin/dashboard"
//                   >
//                     <i class="fas fa-columns"></i> Dashboard
//                   </Link>
//                 </li>
//               )}
//               {isAuth() && isAuth().user.role === "0" && (
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     // style={isActive(history, "/user/dashboard")}
//                     to="/user/dashboard"
//                   >
//                     Dashboard
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </nav>
//           <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
//             <div className="header_search">
//               <form action="#" id="header_search_form">
//                 <input
//                   type="text"
//                   className="search_input"
//                   placeholder="Search Item"
//                   required="required"
//                 />
//                 <button className="header_search_button">
//                   <img src="images/search.png" alt="" />
//                 </button>
//               </form>
//             </div>

//             {!isAuth() && (
//               <React.Fragment>
//                 <div className="user">
//                   <p
//                     className="my-md-4 header-links"
//                     style={{
//                       position: "fixed",
//                       left: "83%",
//                       top: 0,
//                     }}
//                   >
//                     <Link
//                       className=""
//                       // style={
//                       //   (isActive(history, "/signin"),
//                       //   { textDecoration: "none", color: "#000000" })
//                       // }
//                       style={{ textDecoration: "none", color: "#000000" }}
//                       to="/signin"
//                     >
//                       LogIn <i class="fas fa-sign-in-alt"></i>
//                     </Link>
//                     <Link
//                       className=""
//                       // style={
//                       //   (isActive(history, "/signup"),
//                       //   { textDecoration: "none", color: "#000000" })
//                       // }
//                       style={{ textDecoration: "none", color: "#000000" }}
//                       to="/signup"
//                     >
//                       SignUp <i class="fas fa-user-plus"></i>
//                     </Link>
//                   </p>
//                 </div>
//               </React.Fragment>
//             )}
//             {isAuth() && (
//               <div className="col-md-4 col-12 auth1">
//                 <p
//                   className="my-md-1 header-links"
//                   style={{
//                     position: "fixed",
//                     left: "83%",
//                     top: 0,
//                   }}
//                 >
//                   <a
//                     href="/signin"
//                     className="nav-link"
//                     style={{
//                       cursor: "pointer",
//                       color: "#ffffff",
//                       fontSize: "1em",
//                       textDecoration: "none",
//                     }}
//                     onClick={() => signout()}
//                   >
//                     SignOut <i class="fas fa-sign-out-alt"></i>
//                   </a>
//                 </p>
//               </div>
//             )}

//             <div className="header_phone d-flex flex-row align-items-center justify-content-start">
//               <div>
//                 <div>
//                   <img src="images/phone.svg" />
//                 </div>
//               </div>
//               <div>+250 789312195</div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div className="spacer"></div>
//     </React.Fragment>
//   );
// };
// export default withRouter(Navbar);

{
  /* <section
          style={{
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
          }}
        >
          <div className="container">
            <form onSubmit={handleSubmit} class="form-inline ">
              <span className="input-group-text">
                <div className="input-group">
                  <select className="btn " onChange={handleChange("category")}>
                    <option className="text" value="All">
                      All
                    </option>
                    {categories.map((cat, index) => (
                      <option key={index} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  class="form-control  mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleChange("search")}
                />
                <button class="btn btn-outline-info my-2 my-sm-0" type="submit">
                  Search
                </button>
              </span>
            </form>
          </div>
        </section> */
}

{
  /* <div class="header_search">
<form action="#" id="header_search_form" onSubmit={handleSubmit}>
<select className="btn " onChange={handleChange("category")}>
                    <option className="text" value="All">
                      All
                    </option>
                    {categories.map((cat, index) => (
                      <option key={index} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
  <input
    type="text"
    class="search_input"
    placeholder="Search Item"
    required="required"
    onChange={handleChange("search")}
  />
  <button class="header_search_button">
  <i class="fas fa-search"></i>
  </button>
</form>
</div> */
}
