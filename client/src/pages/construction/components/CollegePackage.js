import React from 'react';
import { Row, Col, Button, Tabs } from 'antd';
import '../../../static/css/construction/Package.scss';
import PackageLayout from '../../../components/PackageLayout';
// import phone from '../../../static/images/icons/phone-icon.svg';
// import service from '../../../static/images/service.svg';
// import delivery from '../../../static/images/delivery.svg';
// import quality from '../../../static/images/quality.svg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from './Slider.js';
import Fade from 'react-fade-in';
const { TabPane } = Tabs;

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
					className="gutter-row"
					key={item.id}
				>
					<Card className="cart-card">
						<CardContent className="cart-card-content">
							<Grid container spacing={2} item xs={12} className="cart-item-body">
								<Grid
									item
									xs={4}
									lg={3}
									style={{ paddingLeft: '10px', textAlign: 'center', maxWidth: '200px' }}
								>
									<img
										className="cart-item-thumbnail"
										alt={item.title}
										width="100%"
										src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
									/>
								</Grid>
								<Grid
									item
									xs={8}
									lg={9}
									style={{ paddingRight: '10px' }}
								>
									<h2>{item.title}</h2>
								</Grid>
							</Grid>
							<div className="cart-item-footer">
								<p style={{ textAlign: 'right' }} className="item-total-price">{item.price}</p>
							</div>
						</CardContent>
					</Card>
				</Col>
			))}
		</Row>
	);
}

function Includes() {
	return (
		<div>
			<Items />
		</div>
	);
}
function Offers() {
	return (
		<div style={{ marginLeft: '20px' }}>
			<h2>Offers</h2>
		</div>
	)
}
function Faqs() {
	return (
		<div style={{ marginLeft: '30px' }}>
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
			<Fade delay={1000}>
				<h1 className="package-header">College Package</h1>
			</Fade>
			<Fade delay={1000}>
				<p className="package-message">Colleges across Mumbai hosting some of the best fests,
					 workshops and other such event experiences. To help you make your college event stand out,
				  book this package now!</p>
			</Fade>
			<Fade delay={1000}>
				<div className="package-button-row">
					<Button className="package-call-button">Send Quote</Button>
				</div>
			</Fade>
			<Fade delay={1000}>
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
			</Fade>
		</div>
	);
}
class CollegePackage extends React.Component {
	render() {
		return (
			<PackageLayout>
				<div className="package-page-wrapper">
				<Tabs type="card" defaultActiveKey="0">
					<TabPane tab="College" key="0">
					<div className="package-wrapper">
						<Row gutter={8} style={{ marginRight: '0' }}>
							<Col xs={24} md={12} lg={10} className="package-details-wrapper">
								<Fade delay={1000}>
									<Header />
								</Fade>
								{/* <div className="services-container" style={{ marginTop: '40px' }}>
									<Fade delay={1000}>
										<Row>
											<Col style={{ textAlign: 'center' }} xs={10} sm={6}>
												<img src={service} alt="Customer Care Person" />
											</Col>
											<Col xs={14} sm={18}>
												<p>Colleges across Mumbai hosting some of the best fests,
				 workshops and other such event experiences.</p>
											</Col>
										</Row>
									</Fade>
									<Fade delay={1200}>
										<Row style={{ marginTop: '40px' }}>
											<Col style={{ textAlign: 'center' }} xs={10} sm={6}>
												<img src={delivery} alt="Delivery Truck" />
											</Col>
											<Col xs={14} sm={18}>
												<p>Colleges across Mumbai hosting some of the best fests,
				 workshops and other such event experiences.</p>
											</Col>
										</Row>
									</Fade>
									<Fade delay={1400}>
										<Row style={{ marginTop: '40px' }}>
											<Col style={{ textAlign: 'center' }} xs={10} sm={6}>
												<img src={quality} alt="5 Star Tool" />
											</Col>
											<Col xs={14} sm={18}>
												<p>Colleges across Mumbai hosting some of the best fests,
				 workshops and other such event experiences.</p>
											</Col>
										</Row>
									</Fade>
								</div> */}
								<Box className="package-small-wrapper">
									<PackageSummary />
								</Box>
							</Col>
							<Col xs={0} md={12} lg={14} className="package-big-wrapper">
								<PackageSummary />
							</Col>
						</Row>
					</div>
					</TabPane>
				<TabPane tab="Birthday" key="1">
					Test
				</TabPane>
				</Tabs>
				</div>
			</PackageLayout>
		);
	}
}

export default CollegePackage;