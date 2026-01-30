
import Footer from '../COMPONENTS/Footer';
import Navbar from '../COMPONENTS/Navbar';
import { Outlet } from 'react-router';


const Layout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;