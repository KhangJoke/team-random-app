import { List } from "antd";
import React from "react";

export default function TeamDisplay({ team }) {
  const data = team.map((name, index) => ({ name: name, id: index + 1 }));

  return (
    <div className="backdrop-opacity-20 backdrop-invert bg-white/30 rounded-md">
      <List
        itemLayout="horizontal"
        dataSource={data}
        bordered={true}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <div className="font-semibold">{item.name}</div>
          </List.Item>
        )}
      />
    </div>
  );
}
