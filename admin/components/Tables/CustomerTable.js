import React, { Component } from 'react';
import ReactTable from 'react-table';
// import * as styles from 'react-table/react-table.scss';
// console.log('DO WE HAVE STYLES?', styles);
import EditIcon from 'react-icons/lib/io/edit';

class CustomerTable extends Component {

  render() {
    const { customers } = this.props;
    const columns = [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: "firstname"
          },
          {
            Header: 'Last Name',
            id: 'lastname',
            accessor: (d) => d.lastName,
          },
        ],
      },
    ];
    return (
      <ReactTable
        data={customers}
        columns={[
          {
            Header: 'Name',
            columns: [
              {
                Header: 'First Name',
                accessor: 'firstname',
                minWidth: 200,
              },
              {
                Header: 'Last Name',
                id: 'lastname',
                minWidth: 200,
                accessor: (d) => d.lastname,
              },
            ],
            style: { display: 'inline-flex' },
          },
          {
            Header: 'Info',
            columns: [
              {
                Header: 'Age',
                accessor: 'age',
              },
              {
                Header: 'Status',
                accessor: 'status',
              },
            ],
          },
          {
            Header: 'Stats',
            columns: [
              {
                Header: 'Visits',
                accessor: 'visits',
              },
            ],
          },
          {
            Header: '',
            Cell: (row) => (
              <span>
                {/* Need to make this clickable
                  and render edit component with user
                  selected */}
                <EditIcon />
              </span>
            ),
          },
        ]}
        defaultPageSize={5}
        className="-striped -highlight"
      />
    );
  }
}

export default CustomerTable;
