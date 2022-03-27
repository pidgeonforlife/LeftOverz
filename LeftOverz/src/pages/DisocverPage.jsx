import React from "react";
import Footer1 from "../components/Footer/Footer1";
import '../App.css'
import DiscoverLocal from "../components/Discover/DiscoverLocal";


function DiscoverPage() {
    return (
        <div className="OnBoarding">
        <DiscoverLocal />
        <Footer1 />
        </div>
    );
}

export default DiscoverPage;