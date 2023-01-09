import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth0, User } from "@auth0/auth0-react";

export default function Navbar() {


        const { loginWithRedirect,logout,isAuthenticated,isLoading,user} = useAuth0();

        if (isLoading) {
            return <div>Loading ...</div>;
          }
       

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid text-white">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink className="navbar-brand text-info" to="#"><img className="h-10 w-10"
                            src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg" height="20" alt="img" /><small>NEwGRaphs</small></NavLink>
                        <ul className="navbar-nav mr-auto justify-content-around h6">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/" >Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">Areagraph</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="bargraph">BarGraph</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="graphs">Piechart</NavLink>
                            </li>
                        </ul>

                        <div className="buttons d-flex flex-row justify-content-center mt-12 navbar-nav ">
                            <li className='mt-2 mr-2'>{
                                isAuthenticated ? 
                                <div className='d-flex flex-row'><p className='mr-2'>{User.name}</p>
                                     <p>{user.email}</p>
                                </div>
                                 : ""}</li>
                            {
                                isAuthenticated ? 
                                <button className="btn btn-outline-light text-white ms-2 em" onClick={() => logout({ returnTo: window.location.origin })}>
                                <span className='ml-1 text-white'>LogOut
                                  </span>
                              </button>
                            : 
                           
                             <button className="btn btn-outline-light text-white mr-2 me-2">
                             <NavLink className="text-white fa fa-sign-in" onClick={() => loginWithRedirect()}>
                                 <span className='ml-1 text-white'>Login
                                 </span>
                             </NavLink>
                         </button>
                            }
                         
                            
                         
                            
                        </div>

                    </div>
                </div>
            </nav>

        </div>

    )
}
