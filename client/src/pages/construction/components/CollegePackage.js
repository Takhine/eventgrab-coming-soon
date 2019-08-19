import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Card, Row, Col, Button, InputNumber, Tabs, Radio, Switch    } from 'antd';
import '../../../static/css/construction/Package.scss';
import PackageLayout from '../../../components/PackageLayout';
import phone from '../../../static/images/icons/phone-icon.svg';
import service from '../../../static/images/service.svg';
import delivery from '../../../static/images/delivery.svg';
import quality from '../../../static/images/quality.svg';

import Box from '@material-ui/core/Box';
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
							<Radio></Radio>
						</Card>
				</Col>
			))}
		</Row>
	);
}

function Includes() {
	return (
		<div>
			<p>1 selected</p>
			<Items />
		</div>
	);
}
function Offers() {
	return (
		<div style={{marginLeft:'20px'}}>
			<h2>Offers</h2>
		</div>
	)
}
function Faqs() {
	return (
		<div style={{marginLeft:'30px'}}>
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
function PackageSummary() {
	return (
		<div className="package-big">
			<h1 className="package-header">College Package</h1>
			<p className="package-message">Colleges across Mumbai hosting some of the best fests,
				 workshops and other such event experiences. To help you make your college event stand out,
				  book this package now!</p>
			<div className="package-button-row">
				<Button className="package-call-button"><img className="package-call-icon" src={phone} width="18" alt="Phone"/> Book now</Button>
			</div>
			<div style={{marginTop:'40px'}}>
				<Row>
					<Col xs={8} sm={6}>
				<img src={service} alt="Customer Care Person"/>
					</Col>
					<Col xs={16} sm={18}>
					<p>Colleges across Mumbai hosting some of the best fests,
				 workshops and other such event experiences.</p>
					</Col>
				</Row>
				<Row style={{marginTop:'40px'}}>
					<Col xs={8} sm={6}>
				<img src={delivery} alt="Delivery Truck"/>
					</Col>
					<Col xs={16} sm={18}>
					<p>Colleges across Mumbai hosting some of the best fests,
				 workshops and other such event experiences.</p>
					</Col>
				</Row>
				<Row style={{marginTop:'40px'}}>
					<Col xs={8} sm={6}>
				<img src={quality} alt="5 Star Tool"/>
					</Col>
					<Col xs={16} sm={18}>
					<p>Colleges across Mumbai hosting some of the best fests,
				 workshops and other such event experiences.</p>
					</Col>
				</Row>
			</div>
		</div>
	);
}
class CollegePackage extends React.Component {
	render() {
		return (
			<PackageLayout>
				<div className="package-page-wrapper">
					<div className="package-wrapper">
						<Row gutter={8} style={{marginRight:'0'}}>
							<Col xs={24} md={12} lg={14} className="package-details-wrapper">
							<Box className="package-small-wrapper">
									<PackageSummary />
								</Box>
								<div className="package-details">
									<Tabs defaultActiveKey="0">
										<TabPane tab="Includes" key="0">
											<Includes />
										</TabPane>
										<TabPane tab="Offers" key="1">
											<Offers />
										</TabPane>
										<TabPane tab="FAQs" key="2">
											<Faqs />
										</TabPane>
									</Tabs>

								</div>
							</Col>
							<Col xs={0} md={12} lg={10} className="package-big-wrapper">
								<PackageSummary />
							</Col>
						</Row>
					</div>
				</div>
			</PackageLayout>
		);
	}
}

export default CollegePackage;