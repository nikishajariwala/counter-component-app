import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return (  <nav class="navbar bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            Navbar{" "}
        <span className="badge bg-pill bg-secondary">
            {totalCounters}</span></a>
    </div>
</nav>
);
}
 
export default NavBar;
// class NavBar extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <nav class="navbar bg-light">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#">Navbar
//                 <span className="badge bg-pill bg-secondary">{this.props.totalCounters}</span></a>
//             </div>
//         </nav>
//         );
//     }
// }
 
// export default NavBar;