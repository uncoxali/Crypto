import React, { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const Layout = ({ children }: { children?: React.ReactNode }) => {
    return <main>{children}</main>;
};

export default Layout;
