import React, { useState, useEffect } from 'react';

const Countdown = ({ date, className }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(date) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <div className={`flex gap-2 ${className}`}>
            <span>{timeLeft.days}</span>
            <span>:</span>
            <span>{timeLeft.hours}</span>
            <span>:</span>
            <span>{timeLeft.minutes}</span>
            <span>:</span>
            <span>{timeLeft.seconds}</span>
        </div>
    );
};

export default Countdown;
