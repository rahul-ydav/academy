import React from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

function NavbarWithButtons() {
	const navigate = useNavigate();

	const handleClick = (page) => {
		navigate(`/${page.key}`);
	};

	return (
		<Layout>
			<Header style={{ position: 'static', zIndex: 1, width: '100%', background: '#1677ff' }}>
				<div style={{ float: 'left', color: 'white', fontWeight: 'bold', fontSize: 20, marginRight: 32 }}>
					Dashboard
				</div>
				<Menu
					theme="dark"
					mode="horizontal"
					onClick={handleClick}
					selectable={false}
					style={{ lineHeight: '64px', float: 'right', background: '#1677ff' }}
				>
					<Menu.Item key="FrontPage">Profile</Menu.Item>
					<Menu.Item key="Lessons">Topics</Menu.Item>
					<Menu.Item key="Progress">Progress</Menu.Item>
					<Menu.Item key="Logout">Logout</Menu.Item>
				</Menu>
			</Header>
		</Layout>
	);
}

export default NavbarWithButtons;
