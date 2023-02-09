import React from "react";
import Header from "@components/header";
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Container fluid>
                <div className="layout">
                    {props.children}
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Layout;