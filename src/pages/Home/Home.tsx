import React, { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '../../data/people';
import { Person } from '../../models';
import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/states';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
    const pageSize = 5;
    const dispatch = useDispatch();

    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

    const findPerson = (person: Person) => !!selectedPeople.find((p) => p.id === person.id )
    const filterPerson = (person: Person) => selectedPeople.filter((p) => p.id !== person.id )

    const handleChange = (person: Person) => {
        const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
        dispatch(addFavorite(filteredPeople))
        setSelectedPeople(filteredPeople) 
    }
    const columns = [
        {
            field: 'action',
            type: 'actions',
            headerName: '',
            width: 50,
            renderCell: (params: GridRenderCellParams) => <>{
                <Checkbox size='small' checked={findPerson(params.row)} onChange={() => handleChange(params.row)}/>
            }</>
         },
        {
            field: 'name',
            headerName: 'Name',
            minWidth: 200,
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
         },
         {
            field: 'category',
            headerName: 'Category',
            minWidth: 100,
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
         },
         {
            field: 'company',
            headerName: 'Company',
            minWidth: 200,
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
         },
    ]
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <DataGrid
                rows={People}
                columns={columns}
                disableColumnSelector
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: pageSize,
                      },
                    },
                }}
                pageSizeOptions={[5, 10]}
                getRowId={(row: any) => row.id}
            />    
        </div>
    )
};

export default Home;
