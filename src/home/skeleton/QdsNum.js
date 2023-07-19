import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import './HomeUpperMain.css';

const QdsNum = () => {
    const [stats, setStats] = useState({
        totalOrders: 0,
        averageOrderValue: 0,
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

        let totalOrders = 0;
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

                totalOrders += data.length;
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

        const averageOrderValue = (totalOrders > 0 ? totalOrderValue / totalOrders : 0).toFixed(2);

        setStats({
            totalOrders,
            averageOrderValue,
            totalOrderValue: totalOrderValue.toFixed(2),
            isLoading: false,
        });
    }, []);

    useEffect(() => {
        fetchOrders();
        const intervalId = setInterval(fetchOrders, 180 * 1000); // 180000 milliseconds = 3 minutes

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [fetchOrders]);

    return (
        <div className="qds-display">
            <div className="qds-button" id="qdsb1" onClick={fetchOrders}>
            </div>
            <div className="qds-data" id="qdsd1">
                {stats.isLoading ? (
                    <h3 className="blinking-text">RETRIEVING</h3>
                ) : stats.totalOrders === 0 ? (
                    <h3 className="blinking-text" style={{ color: "#dc143c" }}>THERE ARE NO ORDERS</h3>
                ) : (
                    <div className="fade-in">
                        <h5>TOTAL ORDERS</h5>
                        <p>{stats.totalOrders}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QdsNum;
