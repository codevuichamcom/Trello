import { UserOutlined } from '@ant-design/icons';
import { Menu } from "antd";

const menu = (
    <Menu>
        <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
        </Menu.Item>
    </Menu>
);
export default menu;