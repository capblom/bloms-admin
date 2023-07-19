import React from "react";
import './Skeleton.css';
import './HomeUpperMain.css';
import LiveOrderTable from "./LiveOrderTable";
import CurrentTime from "../../utilities/CurrentTime";
import QuickDailyStats from "./QuickDailyStats";

const HomeUpperMain = () => {
    return (
        <div className="skeleton-upper-main">
            <div className="lot-container">

            </div>

            <div className="upper-main-heading fade-in">
                <h1>BLOMS BULBS   <CurrentTime tag="span"></CurrentTime></h1>
            </div>

            <QuickDailyStats></QuickDailyStats>
                

        </div>
    )
}

export default HomeUpperMain;
