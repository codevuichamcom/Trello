import { DownOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, Row } from "antd";
import React from 'react';
import logo from '../../assets/images/logo.svg';
import './header.css';
import menu  from '../../components/menu';




const HeaderComponent = () => {
    return (
        <Row className='header'>
            <Col span={18}>
                <img src={logo} />
                <Button>Trello</Button>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <Button>
                    Workspaces <DownOutlined />
                    </Button>
                </Dropdown>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <Button>
                    Recent <DownOutlined />
                    </Button>
                </Dropdown>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <Button>
                    Started <DownOutlined />
                    </Button>
                </Dropdown>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <Button>
                    Template <DownOutlined />
                    </Button>
                </Dropdown>
                <Button>Create</Button>
            </Col>
            <Col span={6}>
                5
            </Col>
        </Row>
    );
};

export default HeaderComponent;