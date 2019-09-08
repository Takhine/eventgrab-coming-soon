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


import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


export default function AdminPackage() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Description', field: 'description' },
            { title: 'slide_image_1', field: 'slide1'}, 
            { title: 'slide_image_2', field: 'slide2'}, 
            { title: 'slide_image_3', field: 'slide3'}
        ],
        data: [],
    });


    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogData, setDialogData] = useState({name: '', description: '', slide1: '', slide2: '', slide3: ''});

    function handleClickOpen(rowData = {}) {
        setDialogData({
            ...dialogData, 
            ...rowData
        })
        setDialogOpen(true);
    }

    const handleAddCategory = async () => {

        const data = {
            "name": dialogData.name, 
            "description": dialogData.description, 
            "slide1": dialogData.slide1, 
            "slide2":dialogData.slide2, 
            "slide3":dialogData.slide3
        }

        if(dialogData._id){
            data["_id"] = dialogData._id; 
        }

         await axios.post('/api/addUpdatePackage', data).then((res) => {
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
        axios.get('/api/getAllPackages')
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
                title="View Packages"
                columns={state.columns}
                data={state.data}
                actions={[
                    {
                        icon: 'add',
                        tooltip: 'Add Packages',
                        isFreeAction: true,
                        onClick: (event) =>handleClickOpen({name: '', description: '', slide1: '', slide2: '', slide3: ''})
                    },
                    {
                        icon: 'edit',
                        tooltip: 'Edit Package',
                        onClick: (event, rowData) => handleClickOpen(rowData)
                    }
                ]}
            />

            <div>
                <Dialog
                    open={dialogOpen}
                    onClose={handleClose}
                >
                    <DialogTitle id="add-update-dialog-category">{"Add/Update Equipment"}</DialogTitle>
                    <Divider />

                    <DialogContent>
                        <div>
                            <TextField
                                name="name"
                                label="Name"
                                margin="normal"
                                type="text"
                                fullWidth
                                value={dialogData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <TextField
                                name="description"
                                label="Description"
                                margin="normal"
                                type="text"
                                multiline
                                fullWidth
                                value={dialogData.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                name="slide1"
                                label="Slider 1"
                                margin="normal"
                                type="text"
                                multiline
                                fullWidth
                                value={dialogData.slide1}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                        <TextField
                            name="slide2"
                            label="Slider 2"
                            margin="normal"
                            type="text"
                            multiline
                            fullWidth
                            value={dialogData.slide2}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                    <TextField
                        name="slide3"
                        label="Slider 3"
                        margin="normal"
                        type="text"
                        multiline
                        fullWidth
                        value={dialogData.slide3}
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