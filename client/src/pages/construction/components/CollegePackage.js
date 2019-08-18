import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Card, Row, Col, Button, Tooltip, Tabs} from 'antd';
import PackageLayout from '../../../components/PackageLayout';
const { TabPane } = Tabs;
const { Meta } = Card;

const itemList = [
	{
		id: 1,
		title: 'Chair',
		price: '12 INR | unit',
	},
	{
		id: 2,
		title: 'Smoke Machine',
		price: '500 INR | unit',
	},
	{
		id: 3,
		title: 'Table',
		price: '200 INR | unit',
	},
	{
		id: 4,
		title: 'PS4',
		price: '650 INR | unit',
	}
];

function Items() {
	return (
		<Row gutter={8}>
			{itemList.map(item => (
				<Col
					xs={24}
					sm={12}
					md={24}
					lg={8}
					className="gutter-row"
					key={item.id}
				>
						<Card
							className="item-card"
							cover={
								<img
									alt={item.title}
									src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
								/>
							}
						>
							<Meta
								title={item.title}
								description={item.price}
							/>
						</Card>
				</Col>
			))}
		</Row>
	);
}
function Faqs(){
    return(
		<div>
			<h2>The Process</h2>
			<h3>Question 1</h3>
			<p>Answer</p>
			<h3>Question 2</h3>
			<p>Answer</p>
			<h3>Question 3</h3>
			<p>Answer</p>
			<h3>Question 4</h3>
			<p>Answer</p>
			<h3>Question 5</h3>
			<p>Answer</p>
		</div>
	)
}
function Addons(){
    return (
		<div>
			<Row gutter={24} style={{marginBottom:'10px'}}>
				<Col xs={24} sm={12} md={24} lg={12}>
				<h2>Essentials</h2>
				<p>Essentials are items that go really well with the main equipment that you rent out</p>
				</Col>
				<Col xs={24} sm={12} md={24} lg={12}>
				<Paper style={{padding:'20px'}}>
					<Row gutter={24}>
						<Col xs={12}>
						<h4>Select all</h4>
						<p>Avail 10% discount!</p>
						</Col>
						<Col xs={12}>
						Select
						</Col>
					</Row>
				</Paper>
				</Col>
			</Row>
            <Items/>
		</div>
	)
}
export default function CollegePackage  (){
    return(
        <PackageLayout>
        <div className="header-construction-page">
                <div className="product-wrapper">
                        <Row gutter={8}>
                            <Col xs={24} md={12} lg={8} className="package-details-wrapper">
                                <div className="package-image-wrapper">
                                    <img
                                        width="100%"
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                </div>
                                <Box className="package-small-wrapper">
                                    <div className="package-small">
                                    <h1 style={{ marginBottom: '20px' }}>College Package</h1>
                                    <p>In this era of festivities, colleges around Mumbai are leading the country in some of the best events, fests and workshops ever hosted. If you think you have 
                                    a desire to make your college event incredible book this package and let us help you become an incredible host!</p>
                                    <div className="button-row">
                                        <Row
                                            gutter={16}
                                        >
                                            <Col
                                                xs={24}
                                                className="gutter-row"
                                            >  <Tooltip title="Grab it now!" trigger="hover">
                                                    <Button>Book Now</Button>
                                                </Tooltip>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                </Box>
                                <div className="product-details">
                                    <Tabs type="card">
                                        <TabPane tab="Details" key="1">
                                            <h2>Equipment Details</h2>
                                            description
                                            <h2>Features</h2>
                                            <ul>
                                                <li>Feature</li>
                                                <li>Feature</li>
                                                <li>Feature</li>
                                                <li>Feature</li>
                                            </ul>
                                        </TabPane>
                                        <TabPane tab="Add ons" key="2">
                                            <Addons/>
                                    </TabPane>
                                        <TabPane tab="FAQs" key="3">
                                            <Faqs/>
                                    </TabPane>
                                    </Tabs>

                                </div>
                            </Col>
                            <Col xs={0} md={12} lg={12} className="package-big-wrapper">
                                <div className="package-big">
                                    <h1 style={{ marginBottom: '20px' }}>College Package</h1>
                                    <p>In this era of festivities, colleges around Mumbai are leading the country in some of the best events, fests and workshops ever hosted. If you think you have 
                                    a desire to make your college event incredible book this package and let us help you become an incredible host!</p>
                                    <div className="button-row">
                                        <Row
                                            gutter={16}
                                        >
                                            <Col
                                                xs={24}
                                                className="gutter-row"
                                            >  <Tooltip title="Grab it now!" trigger="hover">
                                                    <Button>Book Now</Button>
                                                </Tooltip>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
        </div>
        </PackageLayout>
    )
}