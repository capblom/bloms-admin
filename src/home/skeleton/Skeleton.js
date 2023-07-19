import React from "react";
import './Skeleton.css';
import CustomersBlock from "./CustomersBlock";
import ResourcesBlock from "./ResourcesBlock";
import DebtorsBlock from "./DebtorsBlock";
import DispatchBlock from "./DispatchBlock";
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