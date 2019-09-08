import React from 'react';
import { Row, Col, Tabs, Button, Modal, Form, Input } from 'antd';
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


import axios from '../../../api/axios'; 

const { TabPane } = Tabs;
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
	// eslint-disable-next-line
	class extends React.Component {
		render() {
			const { visible, onCancel, onCreate, form, title } = this.props;
			const { getFieldDecorator } = form;
			return (
				<Modal
					visible={visible}
					title={title}
					okText="Submit"
					onCancel={onCancel}
					onOk={onCreate}
				>
					<Form layout="vertical">
						<Form.Item label="Email">
							{getFieldDecorator('email', {
								rules: [
									{
										type: 'email',
										message: 'The input is not valid E-mail!',
									},
									{ required: true, message: 'Please input your email ID' }],
							})(<Input type="email" placeholder="info@eventgrab.com" />)}
						</Form.Item>
						<Form.Item label="Contact Number">
							{getFieldDecorator('number', {
								rules: [
									{ required: true, message: 'Please enter a phone number' }],
							})(<Input addonBefore="+91" placeholder="8104142534" />
							)}
						</Form.Item>
					</Form>
				</Modal>
			);
		}
	},
);

const itemList1 = [
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
const itemList2 = [
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
];
function Items(props) {
	return (
		<Row gutter={8} style={{ marginTop: '10px' }}>
			{props.itemList.map(item => (
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
										alt={item.name}
										width="100%"
										src={item.thumbnail}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									style={{ paddingRight: '10px', textAlign: 'center' }}
								>
									<h2 style={{ fontSize: '1.2rem' }}>{item.name}</h2>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Col>
			))}
		</Row>
	);
}

function Includes(props) {
	return (
		<div>
			<Items itemList={props.itemList} />
		</div>
	);
}
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
function PackageSummary(props) {
	return (
		<div className="package-big">
			<Fade delay={1000}>
				<h1 className="package-header">{props.title}</h1>
			</Fade>
			<Fade delay={1000}>
				<p className="package-message">{props.desc}</p>
			</Fade>
			<Fade delay={1000}>
				<div className="package-button-row">
					<Button className="package-call-button" onClick={props.showModal}>Send Quote</Button>
				</div>
			</Fade>
			<Fade delay={1000}>
				<div className="package-details">
					<Tabs defaultActiveKey="0">
						<TabPane tab="Includes" key="0">
							<Includes itemList={props.itemList} />
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
function PackageType(props) {
	return (
		<div className="package-wrapper">
			<Row gutter={8} style={{ marginRight: '0' }}>
				<Col xs={24} md={12} lg={10} className="package-details-wrapper">
					<div>
						<Fade delay={1000}>
							<div className="header-container">
								<Header imageLink={props.imageLink} />
							</div>
						</Fade>
						<Box className="package-small-wrapper">
							<PackageSummary showModal={props.showModal} title={props.title} desc={props.desc} itemList={props.itemList} />
						</Box>
					</div>
				</Col>
				<Col xs={0} md={12} lg={14} className="package-big-wrapper">
					<PackageSummary showModal={props.showModal} title={props.title} desc={props.desc} itemList={props.itemList} />
				</Col>
			</Row>
		</div>
	);
}
class Packages extends React.Component {
	state = {
		visible: false,
		college_package: [],
		birthday_package: [],
	};
	
	componentDidMount(){
		axios.get(`/api/getEquipmentByPackage?package=birthday-package`).then((res) => {
			this.setState({
				birthday_package: res.data
			}); 
		}).catch((err) => {
			alert('No birthday_package items found'); 
		})

		axios.get(`/api/getEquipmentByPackage?package=college-package`).then((res) => {
			this.setState({
				college_package: res.data
			}); 
		}).catch((err) => {
			alert('No college_package items found');
		})

	}

	showModal = () => {
		this.setState({ visible: true });
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	handleCreate = () => {
		const { form } = this.formRef.props;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}

			console.log('Received values of form: ', values);
			form.resetFields();
			this.setState({ visible: false });
		});
	};

	saveFormRef = formRef => {
		this.formRef = formRef;
	};
	render() {
		const collegeTitle = "College Fest";
		const birthdayTitle = "Birthday Party";
		const collegeDesc = "Colleges across Mumbai hosting some of the best fests, workshops and other such event experiences. To help you make your college event stand out,book this package now!";
		const birthdayDesc = "Birthday party timeeee";
		const imageLink1 = "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
		const imageLink2 = "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
		return (
			<PackageLayout>
				<div className="package-page-wrapper">
					<Tabs type="card" defaultActiveKey="0">
						<TabPane tab="College Fests" key="0">
							<PackageType showModal={this.showModal} title={collegeTitle} desc={collegeDesc} imageLink={imageLink1} itemList={this.state.college_package} />
							<CollectionCreateForm
								wrappedComponentRef={this.saveFormRef}
								visible={this.state.visible}
								onCancel={this.handleCancel}
								onCreate={this.handleCreate}
								title={collegeTitle}
							/>
						</TabPane>
						<TabPane tab="Birthday" key="1">
							<PackageType showModal={this.showModal} title={birthdayTitle} desc={birthdayDesc} imageLink={imageLink2} itemList={this.state.birthday_package} />
							<CollectionCreateForm
								wrappedComponentRef={this.saveFormRef}
								visible={this.state.visible}
								onCancel={this.handleCancel}
								onCreate={this.handleCreate}
								title={birthdayTitle}
							/>
						</TabPane>
					</Tabs>

				</div>
			</PackageLayout>
		);
	}
}

export default Packages;