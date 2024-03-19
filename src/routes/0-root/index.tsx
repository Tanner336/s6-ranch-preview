import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../1-header";
import { Footer } from "../3-footer";
import { useEffect } from "react";
import ReactGA from 'react-ga';

export function Root() {
    const loc = useLocation();

    useEffect(() => {
        console.log('loc', loc);
        ReactGA.pageview(location.pathname + location.search, undefined, "0-root-title");
        
        ReactGA.event({
            category: 'Page Click',
            action: 'Clicked on Buy Now',
            label: 'Product Page',
          });

    }, [loc.pathname]);
        
    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>);
}