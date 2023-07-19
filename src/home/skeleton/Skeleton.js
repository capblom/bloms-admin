import React from "react";
import './Skeleton.css';
import ResourcesBlock from "./ResourcesBlock";
import HomeBlock from "./HomeBlock";
import HomeUpperMain from "./HomeUpperMain";

const Skeleton = () => {
    return (
        <div className="skeleton-container fade-in">

            <HomeBlock></HomeBlock>

            <div className="skeleton-upper-curve">

            </div>



            <HomeUpperMain></HomeUpperMain>

            <div className="skeleton-lower-curve">

            </div>

            <div className="skeleton-lower-main">

            </div>


            <ResourcesBlock></ResourcesBlock>


        </div>
    )
}

export default Skeleton