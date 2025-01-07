import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { checkAuthenticated } from "./actions/auth";
import { loaduser } from './actions/profile';

const Layout = ({ children, checkAuthenticated, loaduser }) => {
    
    useEffect(() => {
        checkAuthenticated();
        loaduser();
    }, []);
    
    return (
        <Fragment>
            {children}
        </Fragment>
    );
};

export default connect(null, { checkAuthenticated, loaduser })(Layout);