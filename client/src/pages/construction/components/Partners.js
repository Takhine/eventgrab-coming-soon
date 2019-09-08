import React from 'react';
import { Row, Col, Button, Modal, Form, Input } from 'antd';
import Box from '@material-ui/core/Box';
import vendor from '../../../static/images/vendor.svg';
import organiser from '../../../static/images/organiser.svg';
import performer from '../../../static/images/performer.svg';
import Fadein from 'react-reveal/Fade';
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
function PartnersCard(props) {
    return (
        <div className="partners-wrapper">
            <Row gutter={16} style={{ marginBottom: '100px' }}>
                <Col xs={24} lg={8}>
                    <span id="partners-mobile" style={{ position: 'absolute', top: '-450px' }}></span>
                    <span id="partners-section" style={{ position: 'absolute', top: '-350px' }}></span>
                    <Box className="partner-box">
                        <Fadein bottom duration={1500}>
                            <div name="partners" className="text-center" style={{ maxWidth: '250px', margin: 'auto' }}>
                                <img style={{ padding: '20px' }} src={vendor} alt="Vendor Truck" width="100%" />
                            </div>
                            <h2 className="text-center partner-heading">Vendors</h2>
                            <p className="text-center partner-message">Earn a passive income by renting out your equipment, for events or daily use!</p>
                            <div className="text-center">
                                <Button className="partner-button" onClick={props.showModal}>Enquire</Button>
                            </div>
                        </Fadein>

                    </Box>
                </Col>

                <Col xs={24} lg={8}>
                    <Box className="partner-box">
                        <Fadein bottom duration={1500}>

                            <div className="text-center" style={{ maxWidth: '250px', margin: 'auto' }}>
                                <img style={{ padding: '20px' }} src={performer} alt="Vendor Truck" width="100%" />
                            </div>
                            <h2 className="text-center partner-heading">Performers</h2>
                            <p className="text-center partner-message">Get booked for gigs and performances at events across Mumbai city! </p>
                            <div className="text-center">
                                <Button className="partner-button" onClick={props.showModal}>Enquire</Button>
                            </div>
                        </Fadein>

                    </Box>
                </Col>

                <Col xs={24} lg={8}>
                    <Box className="partner-box">
                        <Fadein bottom duration={1500}>

                            <div className="text-center" style={{ maxWidth: '250px', margin: 'auto' }}>
                                <img style={{ padding: '20px' }} src={organiser} alt="Vendor Truck" width="100%" />
                            </div>
                            <h2 className="text-center partner-heading">Organisers</h2>
                            <p className="text-center partner-message">Have professional experience organizing events? Call us to collaborate!</p>
                            <div className="text-center">
                                <Button className="partner-button" onClick={props.showModal}>Enquire</Button>
                            </div>
                        </Fadein>

                    </Box>
                </Col>
            </Row>
        </div>
    )
}
class Partners extends React.Component {
    state = {
        visible: false,
    };

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
        return (
            <React.Fragment>
                <PartnersCard showModal={this.showModal} />
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    title={"Get in touch"}
                />
            </React.Fragment>
        )

    }
}

export default Partners;