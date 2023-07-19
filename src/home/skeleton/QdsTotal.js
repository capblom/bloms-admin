import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import './HomeUpperMain.css';

const QdsTotal = () => {
    const [stats, setStats] = useState({
        totalOrderValue: 0,
        isLoading: true,
    });

    const fetchOrders = useCallback(async () => {
        setStats(prevStats => ({ ...prevStats, isLoading: true }));
        
        const consumerKey = 'ck_0bb0c1a16e735059f4a2c00644ad4af42285a69c';
        const consumerSecret = 'cs_e103c56e7fc70262b03bfb34fea7e198a1b44731';

        const currentDay = new Date();
        currentDay.setHours(0, 0, 0, 0);
        const currentDayISOString = currentDay.toISOString();

        let totalOrderValue = 0;
        let page = 1;

        while (true) {
            const config = {
                method: 'get',
                url: `https://blomsbulbs.com/wp-json/wc/v3/orders?per_page=100&page=${page}&after=${encodeURIComponent(currentDayISOString)}&order=desc&orderby=date`,
                auth: {
                    username: consumerKey,
                    password: consumerSecret,
                },
            };

            try {
                const response = await axios(config);
                const data = response.data;

                totalOrderValue += data.reduce((total, order) => total + parseFloat(order.total), 0);

                // If there's a next page, continue fetching
                if (response.headers.link && response.headers.link.includes('rel="next"')) {
                    page++;
                } else {
                    break;
                }
            } catch (error) {
                console.error("Error fetching orders: ", error);
                break;
            }
        }

        setStats({
            totalOrderValue: totalOrderValue.toFixed(2),
            isLoading: false,
        });
    }, []);

    useEffect(() => {
        fetchOrders();

        // Set up interval to fetch orders every 180 seconds (3 minutes)
        const intervalId = setInterval(fetchOrders, 180 * 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [fetchOrders]);

    return (
        <div className="qds-display">
            <div className="qds-button" id="qdsb2" onClick={fetchOrders}>
            </div>
            <div className="qds-data" id="qdsd2">
                {stats.isLoading ? (
                    <h3 className="blinking-text">RETRIEVING</h3>
                ) : stats.totalOrderValue === "0.00" ? (
                    <h3 className="blinking-text" style={{ color: "#dc143c" }}>THERE ARE NO ORDERS</h3>
                ) : (
                    <div className="fade-in">
                        <h5>TOTAL ORDER VALUE</h5>
                        <p>£{stats.totalOrderValue}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QdsTotal;
