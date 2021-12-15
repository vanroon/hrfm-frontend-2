import React from 'react'
import {NavLink} from "react-router-dom";
import logo from "../images/devoteam_logo_small.png";

class NavBar extends React.Component {

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light justify-content-between' style={{
                'backgroundColor': '#f7485e'
            }}>
            <NavLink to='/' className='navbar-brand'>
                <img src={logo}
                    width='50'
                    height='50'
                    className='d-inline-block align-top'
                    alt='Logo'/>
                <span style={{
                    'paddingLeft': '1rem'
                }}>Test app</span>
            </NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                {/* {profile !== undefined && ( */}
                <div className='ml-auto d-flex justify-content-center'>
                    <NavLink to='/' className='navbar-brand'>
                        <span className='navbar-text'>Home</span>
                    </NavLink>
                    <NavLink to='/books' className='navbar-brand'>
                        <span className='navbar-text'>Books</span>
                    </NavLink>
                    <div className='p-2'>
                        {/* <span className='navbar-text'>Welcome, {profile.name}</span> */}
                        <span className='navbar-text'>Welcome, Erik</span>
                    </div>
                    {/* <div className='p-2'>
                        <form className="form-inline my-2 my-lg-0 ">
                                <button className='btn btn-dark'
                                        type='button'
                                        onClick={() => this.handleLogoutClick()}>
                                    Logout
                                </button>
                            </form>
                        </div> */}
                </div>
                {/* )} */}
            </div>
            </nav>
        )
    }
}

function mapStateToProps({authentication}) {
    return {
        token: authentication.token,
        profile: authentication.profile
    }
}

// export default connect(mapStateToProps)(NavBar)
export default NavBar;
