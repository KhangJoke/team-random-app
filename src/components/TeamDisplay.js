import { List } from "antd";
import React from "react";

export default function TeamDisplay({team}) {

    const data = team.map((name, index) => ({name: name , id: index + 1}) )

    return(
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                bordered = {true}
                renderItem={(item) => (
                <List.Item key = {item.id}>
                    <div>{item.name}</div>
                </List.Item>
                )}
            />
        </div>
    )
}