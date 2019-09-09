import React, {useState} from 'react';
import MaterialTable from 'material-table';
import AdminLayout from './AdminLayout';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
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


export default function AdminEquipment() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Description', field: 'description' },
            {
                title: 'Package',
                field: 'package',
                editComponent: props => (

                    <FormControl>
                        <NativeSelect
                            value={props.value}
                            onChange={e => props.onChange(e.target.value)}
                        >
                            <option value={'college-package'}>college-package</option>
                            <option value={'birthday-package'}>birthday-package</option>
                        </NativeSelect>
                    </FormControl>
                )
            },
            {
                title: 'Thumbnail',
                field: 'thumbnail',
                render: rowData => <img src={rowData.thumbnail} style={{width: 50}}/>
            }
        ],
        data: [],
    });


    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogData, setDialogData] = useState({name: '', description: '', package: '', thumbnail: ''});

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
            "package": dialogData.package, 
            "thumbnail": dialogData.thumbnail, 
        }

        if(dialogData._id){
            data["_id"] = dialogData._id; 
        }

         await axios.post('/api/addUpdateEquipment', data).then((res) => {
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
        axios.get('/api/getAllEquipments')
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
                title="View Equipments"
                columns={state.columns}
                data={state.data}
                actions={[
                    {
                        icon: 'add',
                        tooltip: 'Add Equipment',
                        isFreeAction: true,
                        onClick: (event) =>handleClickOpen({name: '', description: '', package: '', thumbnail: ''})
                    },
                    {
                        icon: 'edit',
                        tooltip: 'Edit Equipment',
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
                            <FormControl>
                                <InputLabel htmlFor="age-native-simple">Package</InputLabel>
                                <Select
                                native
                                style={{width: 250}}
                                value={dialogData.package}
                                onChange={handleChange}
                                name="package"
                                >
                                <option value="" />
                                <option value={'college-package'}>college-package</option>
                                <option value={'birthday-package'}>birthday-package</option>
                                </Select>
                            </FormControl>
                        </div>
                        
                        <div>
                            <TextField
                                name="thumbnail"
                                label="Thumnail"
                                margin="normal"
                                type="text"
                                multiline
                                fullWidth
                                value={dialogData.thumbnail}
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