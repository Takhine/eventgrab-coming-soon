import React from 'react';
import { Row, Col, Button, Tabs } from 'antd';
import '../../../static/css/construction/Package.scss';
import PackageLayout from '../../../components/PackageLayout';
import service from '../../../static/images/service.svg';
import delivery from '../../../static/images/delivery.svg';
import quality from '../../../static/images/quality.svg';
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
		title: 'Chairs',
	},
	{
		id: 2,
		title: 'Collar Mic',
	},
	{
		id: 3,
		title: 'Table',
	},
	{
		id: 4,
		title: 'Parcan Lights',
	},
	{
		id: 5,
		title: 'Tables',
	},
	{
		id: 6,
		title: 'Halogen Lights',
	},
	{
		id: 7,
		title: 'Speaker Tops',
	},
	{
		id: 8,
		title: 'Tent Stalls',
	},
	{
		id: 9,
		title: 'Sound Truss',
	},
];
function Items() {
	return (
		<Row gutter={8} style={{ marginTop: '10px' }}>
			{itemList.map(item => (
				<Col
					xs={24}
					sm={12}
					lg={8}
					className="gutter-row"
					key={item.id}
				>
					<Card className="cart-card">
						<CardContent className="cart-card-content">
							<Grid container item xs={12} className="cart-item-body">
								<Grid
									item
									style={{ width: '100%' }}
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
									xs={12}
									style={{ paddingRight: '10px', textAlign: 'center' }}
								>
									<h2 style={{ fontSize: '1.2rem' }}>{item.title}</h2>
								</Grid>
							</Grid>
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
// function Offers() {
// 	return (
// 		<div style={{ marginLeft: '20px' }}>
// 			<ol>
// 				<li>Tap into our network of performers and organizers!</li>
// 				<li>Need to get in touch with food brands? We're partnered with some of the best ones!</li>
// 				<li>Incredible offers in store for some of our premium customers :)</li>
// 			</ol>
// 		</div>
// 	)
// }
function Services() {
	return (
		<div style={{ marginLeft: '30px' }}>
			<div className="services-container" style={{ marginTop: '40px' }}>
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
			</div>
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
						<TabPane tab="Services" key="1">
							<Services />
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
						<TabPane tab="College Fests" key="0">
							<div className="package-wrapper">
								<Row gutter={8} style={{ marginRight: '0' }}>
									<Col xs={24} md={12} lg={10} className="package-details-wrapper">
										<div>
										<Fade delay={1000}>
											<div className="header-container">
												<Header />
											</div>
										</Fade>
										<Box className="package-small-wrapper">
											<PackageSummary />
										</Box>
										</div>
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