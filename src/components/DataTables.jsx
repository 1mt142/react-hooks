import React,{useEffect} from 'react'
import bdCustomer from "../DB/customer";
import DataTable from "react-data-table-component";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

function DataTables() {

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(bdCustomer());
      setPending(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  const conditionalRowStyles = [
    {
      when: (row) => row.amount > 20,
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.amount >= 30 && row.amount < 50,
      style: {
        backgroundColor: "rgba(248, 148, 6, 0.9)",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.total_amount >= 300 && row.total_amount <= 800,
      style: {
        backgroundColor: "rgba(242, 38, 19, 0.9)",
        color: "white",
        "&:hover": {
          cursor: "not-allowed",
        },
      },
    },
  ];

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
  const LinearIndeterminate = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <LinearProgress />
      </div>
    );
  };

  const columns = [
    {
      name: "First Name",
      // selector: "first_name",
      sortable: true,
      cell: row => row.first_name
    },
    {
      name: "Last Name",
      // selector: "last_name",
      sortable: true,
      cell: row => row.last_name

    },
    {
      name: "Email",
      // selector: "email",
      sortable: true,
      cell: row => row.email

    },
    {
      name: "Address",
      // selector: "address",
      sortable: true,
      cell: row => row.address


    },
    {
      name: "Zip Code",
      // selector: "zipCode",
      sortable: true,
      cell: row => row.zipCode

    },
    {
      name: "Amount",
      // selector: "amount",
      sortable: true,
      cell: row => row.amount
    },
    {
      name: "Total Amount",
      // selector: "total_amount",
      sortable: true,
      cell: row => row.total_amount

    },
  ];
  return (
    <div>
       <DataTable
        title="Customer Data Example"
        columns={columns}
        data={rows}
        conditionalRowStyles={conditionalRowStyles}
        pagination
        progressPending={pending}
        progressComponent={<LinearIndeterminate />}
        // persistTableHead
        
      />
    </div>
  )
}

export default DataTables
