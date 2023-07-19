import React, { useEffect, useState } from 'react';

const CurrentTime = ({ tag: Tag = 'p' }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const year = date.getFullYear() % 100;
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const formattedTime = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year < 10 ? '0' + year : year}.${hours < 10 ? '0' + hours : hours}.${minutes < 10 ? '0' + minutes : minutes}.${seconds < 10 ? '0' + seconds : seconds}`;

      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Tag className="fade-in-2">{currentTime}</Tag>
  );
};

export default CurrentTime;
