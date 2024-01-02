import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import moment from 'moment';
import { dummyHL7Messages } from './DummyHL7Messages';

const MessageCountLineChart = ({ messages }) => {
  // Process the dataset to get data suitable for the line chart
  const data = messages.reduce((accumulator, message) => {
    const timestamp = moment(message.timestamp).format('YYYY-MM-DD HH:mm:ss');
    const existingEntry = accumulator.find((entry) => entry.timestamp === timestamp);

    if (existingEntry) {
      existingEntry[message.host] = (existingEntry[message.host] || 0) + 1;
    } else {
      const newEntry = { timestamp, [message.host]: 1 };
      accumulator.push(newEntry);
    }

    return accumulator;
  }, []);

  // Get unique hosts
  const uniqueHosts = Array.from(new Set(messages.map((message) => message.host)));

  // Find timestamps when a host was "off" (no message received)
  const offTimestamps = messages.reduce((timestamps, message) => {
    if (!timestamps[message.host]) {
      timestamps[message.host] = [];
    }

    timestamps[message.host].push(moment(message.timestamp).format('YYYY-MM-DD HH:mm:ss'));
    return timestamps;
  }, {});

  // Create a separate line for each host
  const lines = uniqueHosts.map((host, index) => {
    const lineData = data.map((entry) => ({
      timestamp: entry.timestamp,
      [host]: entry[host] || 0,
    }));

    // Add points for downtime (when the host was "off")
    if (offTimestamps[host]) {
      offTimestamps[host].forEach((timestamp) => {
        if (!lineData.find((entry) => entry.timestamp === timestamp)) {
          lineData.push({ timestamp, [host]: 0 });
        }
      });
    }

    // Sort the data by timestamp
    lineData.sort((a, b) => moment(a.timestamp) - moment(b.timestamp));

    return (
      <Line
        key={index}
        type="monotone"
        dataKey={host}
        stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        dot={false} // Do not show dots on the line for downtime points
      />
    );
  });

  return (
    <LineChart width={1500} height={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      {lines}
    </LineChart>
  );
};

const GraphDesign = () => {
  return (
    <div>
      <MessageCountLineChart messages={dummyHL7Messages} />
    </div>
  );
};

export default GraphDesign;
