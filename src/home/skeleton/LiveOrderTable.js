import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import moment from "moment";

import './HomeUpperMain.css';

const LiveOrderTable = () => {
    const [orders, setOrders] = useState([]);
    const [displayOrders, setDisplayOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchOrders = useCallback(async () => {
        const consumerKey = 'ck_0bb0c1a16e735059f4a2c00644ad4af42285a69c';
        const consumerSecret = 'cs_e103c56e7fc70262b03bfb34fea7e198a1b44731';

        const config = {
            method: 'get',
            url: 'https://blomsbulbs.com/wp-json/wc/v3/orders?per_page=100&order=desc&orderby=date&after=' + moment().startOf('day').toISOString(),
            auth: {
                username: consumerKey,
                password: consumerSecret,
            },
        };

        try {
            const response = await axios(config);
            setOrders(formatOrders(response.data));
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching order data: ', error);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (orders.length > 4) {
                setOrders((prevOrders) => [...prevOrders.slice(1), prevOrders[0]]);
            }
        }, 1500);
        return () => clearInterval(timer);
    }, [orders]);

    useEffect(() => {
        setDisplayOrders(orders.slice(0, 4));
    }, [orders]);

    const formatOrders = (orders) => {
        return orders.map((order) => {
            return {
                id: order.id,
                date: moment(order.date_created).format('DD.MM.YY.HH.mm'),
                surname: order.billing.last_name,
                total: order.total
            };
        });
    }

    if (isLoading) {
        return (
            <div className="order-table">
                <div className='blinking-text'>
                <h2>ACCESSING AND RETRIEVING ORDER DATA</h2>
                </div>
            </div>
        );
    }

    if (orders.length === 0) {
        return (
            <div className="order-table fade-in">
                <h2 id="no-orders">THERE ARE NO ORDERS TO DISPLAY</h2>
            </div>
        );
    }

    return (
        <div className="order-table fade-in">
            <h2>LIVE ORDER RETRIEVAL</h2>
            <table>
                <thead>
                    <tr>
                        <th>NUMBER</th>
                        <th>TIME</th>
                        <th id="th-name">NAME</th>
                        <th id="th-amount">AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    {displayOrders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.surname}</td>
                            <td>{`£${order.total}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LiveOrderTable;
