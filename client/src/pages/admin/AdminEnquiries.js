import React, {useState} from 'react';
import MaterialTable from 'material-table';
import AdminLayout from './AdminLayout';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider'; 
import TextField from '@material-ui/core/TextField'; 


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from '../../api/axios';

import moment from 'moment'

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export default function AdminEnquiry() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Email', field: 'email' },
            { title: 'Contact', field: 'contact_number' }, 
            { title: 'Comments', field: 'comments'}, 
            { title: 'Type', field: 'type'}, 
            { title: 'Order Date', 
              field: 'created_at', 
            render: rowData => moment(rowData.created_at).format("DD MMM YY")}
        ],
        data: [],
    });


    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogData, setDialogData] = useState({email: '', contact_number: '', comments: '', type: ''});

    function handleClickOpen(rowData = {}) {
        setDialogData({
            ...dialogData, 
            ...rowData
        })
        setDialogOpen(true);
    }

    const handleAddCategory = async () => {

        const data = {
            "email" : dialogData.email, 
            "contact_number": dialogData.contact_number, 
            "comments": dialogData.comments, 
            "package": dialogData.package
        }

        if(dialogData._id){
            data["_id"] = dialogData._id; 
        }

         await axios.post('/api/createEnquiry', data).then((res) => {
            handleClose(); 
            window.location.reload();
        }).catch((err) => {
            alert('Failed to add category')
        })
    }

    function handleClose() {
        setDialogOpen(false);
    }

    const handleChange = (e) => {
        const name = e.target.name; 
        const value = e.target.value; 

        setDialogData({
            ...dialogData, 
            [name]: value
        })

    }

    React.useEffect(() => {
        axios.get('/api/getAllEnquiries')
            .then((res) => {
                setState({
                    ...state,
                    data: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <AdminLayout>
            <MaterialTable
                title="View Enquiries"
                columns={state.columns}
                data={state.data}
                actions={[
                    {
                        icon: 'add',
                        tooltip: 'Add Order',
                        isFreeAction: true,
                        onClick: (event) =>handleClickOpen({email: '', contact_number: '', comments: '', type: ''})
                    },
                    {
                        icon: 'edit',
                        tooltip: 'Edit Order',
                        onClick: (event, rowData) => handleClickOpen(rowData)
                    }
                ]}

                options={{
                    exportButton: true,
                    actionsColumnIndex: -1,
                    grouping: true,
                    filtering: true,
                    columnsButton: true,
                    padding: 'dense'
                }}
            />

            <div>
            <Dialog
                open={dialogOpen}
                onClose={handleClose}
            >
                <DialogTitle id="add-update-dialog-category">{"Add/Update Enquiries"}</DialogTitle>
                <Divider />

                <DialogContent>
                    <div>
                        <TextField
                            name="email"
                            label="Email"
                            margin="normal"
                            type="text"
                            fullWidth
                            value={dialogData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <TextField
                            name="contact_number"
                            label="Contact"
                            margin="normal"
                            type="text"
                            multiline
                            fullWidth
                            value={dialogData.contact_number}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <FormControl>
                            <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                            <Select
                            native
                            style={{width: 250}}
                            value={dialogData.package}
                            onChange={handleChange}
                            name="package"
                            >
                            <option value="" />
                            <option value={'vendors'}>Vendors</option>
                            <option value={'performers'}>Performers</option>
                            <option value={'organizers'}>Organizers</option>
                            </Select>
                        </FormControl>
                    </div>
                    
                    <div>
                        <TextField
                            name="comments"
                            label="Comments"
                            margin="normal"
                            type="text"
                            multiline
                            fullWidth
                            value={dialogData.comments}
                            onChange={handleChange}
                        />
                    </div>

                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                </Button>
                    <Button onClick={handleAddCategory} color="primary" autoFocus>
                        Add/Update
                </Button>
                </DialogActions>
            </Dialog>
        </div>


        </AdminLayout>
    );
}