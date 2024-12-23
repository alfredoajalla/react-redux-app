import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { addFavorite } from '../../../../redux/states';
import { Person } from '../../../../models';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../../../redux/store';

export interface PeopleTableIterface {}

const PeopleTable: React.FC<PeopleTableIterface> = () => {
    const pageSize = 5;
    const dispatch = useDispatch();

    const statePeople = useSelector((store: AppStore) => store.people);
    const stateFavorites = useSelector((store: AppStore) => store.favorites);

    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

    const findPerson = (person: Person) => !!stateFavorites.find((p) => p.id === person.id )
    const filterPerson = (person: Person) => stateFavorites.filter((p) => p.id !== person.id )

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
        {
            field: 'levelOfHappiness',
            headerName: 'Level of happyness',
            minWidth: 100,
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
    ]

    useEffect(() => {
        setSelectedPeople(stateFavorites);
    }, [stateFavorites])
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <DataGrid
                rows={statePeople}
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

export default PeopleTable;
