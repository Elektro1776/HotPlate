import React, { Component } from 'react';
import ReactTable from 'react-table';

class CustomerTable extends Component {

  render() {
    const { customers } = this.props;
    console.log('WE GOT CUSTOMERS IN THE TABLE', customers[0]);
    const columns = [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstname"
          },
          {
            Header: "Last Name",
            id: "lastname",
            accessor: d => d.lastName
          }
        ]
      },
    ]
  console.log('about to render customer table ');
    return (
      <div>
        {customers.length === 0 ? (
          <div>No Customers</div>
        )
          : (
            <ReactTable
              data={customers[0]}

              columns={[
                {
                  Header: "Name",
                  columns: [
                    {
                      Header: "First Name",
                      accessor: "firstname",
                      minWidth: 200,
                    },
                    {
                      Header: "Last Name",
                      id: "lastname",
                      minWidth: 200,
                      accessor: d => d.lastname
                    }
                  ],
                  style: { display: 'inline-flex' },
                },
                {
                  Header: "Info",
                  columns: [
                    {
                      Header: "Age",
                      accessor: "age"
                    },
                    {
                      Header: "Status",
                      accessor: "status"
                    }
                  ]
                },
                {
                  Header: 'Stats',
                  columns: [
                    {
                      Header: "Visits",
                      accessor: "visits"
                    }
                  ]
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          )}
      </div>
    );
  }
}

export default CustomerTable;
