import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { Person } from '../../../models';
import { removeFavorite } from '../../../redux/states';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export interface FavoriteTableIterface {}

const FavoriteTable: React.FC<FavoriteTableIterface> = () => {
    const pageSize = 5;
    const dispatch = useDispatch();

    const stateFavorites = useSelector((store: AppStore) => store.favorites)


    const handleClick = (person: Person) => {
        dispatch(removeFavorite(person))
    }
    const columns = [
        {
            field: 'action',
            type: 'actions',
            headerName: '',
            width: 50,
            renderCell: (params: GridRenderCellParams) => <>{
                <IconButton color="secondary" aria-label="favorites" component='label'  onClick={()=> handleClick(params.row)}>
                    <DeleteIcon />
                </IconButton>
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
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <DataGrid
                rows={stateFavorites}
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

export default FavoriteTable;
