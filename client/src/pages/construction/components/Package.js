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
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../../static/images/about-bg.svg';
import { DatePicker } from 'antd';

import axios from '../../../api/axios'; 
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment'; 
import Swal from 'sweetalert2'

const { TabPane } = Tabs;
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
	// eslint-disable-next-line
	class extends React.Component {
		state = {
			email: '', 
			contact_number: '', 
			comments: '', 
			package: this.props.packageName, 
			startDate: '', 
			endDate: '', 
		}
		
		handleChange(e) {
			const name = e.target.name; 
			const value = e.target.value; 
			this.setState({
				[name]: value 
			})
		}

		handleSubmit() {
			axios.post('/api/createOrder', this.state).then((res) => {
				Swal.fire(
				  'We\'ve got your requirements!',
				  'Someone will contact you soon.',
				  'success'
				).then(()=>{
					window.location.reload(); 
				})

			}).catch((err) => {
				alert('Failed to create order')
			})
		}


		disabledDate(current) {
			// Can not select days before today and today
			return current && current < moment().endOf('day');
		}


		handleDateChange(dates) {

			if(dates.length > 0){
				const start = dates[0]
				const end = dates[1]; 

				this.setState({
					startDate: start, 
					endDate: end
				})
			}

		}

		render() {
			const { visible, onCancel, onCreate, form, title } = this.props;
			const { getFieldDecorator } = form;
			return (
				<Modal
					visible={visible}
					title={title}
					okText="Submit"
					onCancel={onCancel}
					onOk={()=> this.handleSubmit()}
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
							})(<Input type="email" placeholder="info@eventgrab.com" name="email" value={this.email} onChange={(e) => this.handleChange(e)} />)}
						</Form.Item>
						<Form.Item label="Contact Number">
							{getFieldDecorator('number', {
								rules: [
									{ required: true, message: 'Please enter a phone number' }],
							})(<Input addonBefore="+91" placeholder="8104142534" name="contact_number" value={this.contact_number} onChange={(e) => this.handleChange(e)}/>
							)}
						</Form.Item>
						
						<Form.Item label="Event Date">
							<DatePicker.RangePicker 
								disabledDate={this.disabledDate}
								onChange={e => this.handleDateChange(e)}
							 />
						</Form.Item>

						<Form.Item label="Comments">
							{getFieldDecorator('text', {
							})(<TextArea placeholder="Have something to say?" name="comments" value={this.comments} onChange={(e) => this.handleChange(e)}/>
							)}
						</Form.Item>
						




					</Form>
				</Modal>
			);
		}
	},
);


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
							<p>Dedicated co-ordinator to help you with your event needs.</p>
						</Col>
					</Row>
				</Fade>
				<Fade delay={1200}>
					<Row style={{ marginTop: '40px' }}>
						<Col style={{ textAlign: 'center' }} xs={10} sm={6}>
							<img src={delivery} alt="Delivery Truck" />
						</Col>
						<Col xs={14} sm={18}>
							<p>On-time delivery, we make sure the setup is done for you before your event even starts.</p>
						</Col>
					</Row>
				</Fade>
				<Fade delay={1400}>
					<Row style={{ marginTop: '40px' }}>
						<Col style={{ textAlign: 'center' }} xs={10} sm={6}>
							<img src={quality} alt="5 Star Tool" />
						</Col>
						<Col xs={14} sm={18}>
							<p>Only quality assured equipment is sent your way.</p>
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
							<p>{JSON.stringify()}</p>
								<Carousel className="custom-carousel" showArrows={false} showStatus={false} emulateTouch={false} showIndicators={false} axis="vertical">
									<div>
										<img src={props.packageData.slide1} alt="test" />
									</div>
									<div>
										<img src={props.packageData.slide2} alt="test" />
									</div>
									<div>
										<img src={props.packageData.slide3} alt="test" />
									</div>
								</Carousel>


							</div>
						</Fade>
						<Box className="package-small-wrapper">
							<PackageSummary showModal={props.showModal} title={props.title} desc={props.packageData.description} itemList={props.itemList} />
						</Box>
					</div>
				</Col>
				<Col xs={0} md={12} lg={14} className="package-big-wrapper">
					<PackageSummary showModal={props.showModal} title={props.title} desc={props.packageData.description} itemList={props.itemList} />
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
		collPackData: {}, 
		birthPackData: {}
	};
	
	componentDidMount(){
		axios.get(`/api/getAllData`).then((res) => {
			this.setState({
				birthday_package: res.data.birthday_package, 
				college_package: res.data.college_package, 
				collPackData: res.data.collPackData, 
				birthPackData: res.data.birthPackData
			}); 
		}).catch((err) => {
			alert('No birthday_package items found'); 
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

			this.state.collPackData.length > 0 
			&& 
			<PackageLayout>
				<div className="package-page-wrapper">
					<Tabs type="card" defaultActiveKey="0">
						<TabPane tab="College Fests" key="0">
							<PackageType showModal={this.showModal} title={collegeTitle} desc={collegeDesc} imageLink={imageLink1} itemList={this.state.college_package} packageData={this.state.collPackData[0]}   />
							<CollectionCreateForm
								wrappedComponentRef={this.saveFormRef}
								visible={this.state.visible}
								onCancel={this.handleCancel}
								onCreate={this.handleCreate}
								title={collegeTitle}
								packageName={"college-package"}
							/>
						</TabPane>
						<TabPane tab="Birthday" key="1">
							<PackageType showModal={this.showModal} title={birthdayTitle} desc={birthdayDesc} imageLink={imageLink2} itemList={this.state.birthday_package}  packageData={this.state.birthPackData[0]}/>
							<CollectionCreateForm
								wrappedComponentRef={this.saveFormRef}
								visible={this.state.visible}
								onCancel={this.handleCancel}
								onCreate={this.handleCreate}
								title={birthdayTitle}
								packageName={"birthday-package"}
							/>
						</TabPane>
					</Tabs>
				</div>

			</PackageLayout>
		);
	}
	
}

export default Packages;