import React from "react";
import './HeaderBar.css'

function HeaderBar(){


    return(
       


        


<div>

     <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <span className="navbar-brand mb-0 h1">My Keep List</span>
<div className="row">

    {/* layout */}
    <div >


    <div className="navbar-nav">
        <div className="nav-item cssD">
          <h6 className="nav-link" to="/"> Home</h6>
        </div>

        <div className="nav-item">
          <h6  className="nav-link" to="/about"> About</h6>
        </div>
       
        

      </div>


    </div>

    
    

</div>
      
    </nav>

    </div>


    );




}

export default HeaderBar;