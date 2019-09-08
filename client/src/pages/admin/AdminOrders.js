import React from 'react';
import MaterialTable from 'material-table';
import AdminLayout from './AdminLayout';

export default function AdminOrders() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Email', field: 'email' },
            { title: 'Contact Number', field: 'contact_number'},
            { title: 'Comments', field: 'comments'} 
        ],
        data: [],
    });

    return (
        <AdminLayout>
            <MaterialTable
                title="View Orders"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.push(newData);
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data[data.indexOf(oldData)] = newData;
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.splice(data.indexOf(oldData), 1);
                                setState({ ...state, data });
                            }, 600);
                        }),
                }}
            />
        </AdminLayout>
    );
}