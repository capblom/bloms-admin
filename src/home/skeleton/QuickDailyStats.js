import React from "react";
import QdsNum from "./QdsNum";
import QdsAvg from "./QdsAvg";
import QdsMedian from "./QdsMedian";
import QdsTotal from "./QdsTotal";
import './HomeUpperMain.css';

const QuickDailyStats = () => {
    return (
        <div className="qds-container fade-in">

            <QdsNum></QdsNum>

            <QdsAvg></QdsAvg>

            <QdsMedian></QdsMedian>

            <QdsTotal></QdsTotal>

        </div>
    )
}

export default QuickDailyStats