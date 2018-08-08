import React, { Fragment } from 'react'

// Import React Table
import ReactTable from "react-table"
import "react-table/react-table.css"

export default ({ match: { url }, messages }) =>
    <Fragment>
        <ReactTable
            data={messages.reverse()}
            columns={[
                {
                    Header: "Message",
                    accessor: "message"
                },
                {
                    Header: "Time",
                    accessor: "time"
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
        <br />
    </Fragment>
