import React, { useContext, useState } from "react";
import Container from "@material-ui/core/Container";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from "@material-ui/core/TablePagination";
import Paper from '@material-ui/core/Paper';
import CircularProgress from "@material-ui/core/CircularProgress";
import { UserContext } from "../utils/context";
import { Conference } from "../types";

export const ConferenceTable = () => {
  const theme = useContext(UserContext);
  const [page , setPage] = useState<number>(0);
  const [rowsPerPage , setRowsPerPage] = useState<number>(10);

  const handleChangePage = (event : any, page: number) => {
   setPage(page)
  };

  const handleChangeRowsPerPage = (event : any) => {
    setRowsPerPage(event.target.value)
   };
  
  const table = theme.newConferences.length && (
    <Table className={theme.classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Abbr.</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Shot Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {theme.newConferences.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row :Conference) => {
                    return (
                      <TableRow key={row.id}>
                      <TableCell align="center">{row.abbreviation}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.short_name}</TableCell>
                    </TableRow>
                    )
                  }
                  )}
                </TableBody>
              </Table>
  );

  return (
    <main className={theme.classes.content}>
      <Container className={theme.classes.cardGrid}>
              <Paper className={theme.classes.root}>
                 {table}
              <TablePagination
                  component="div"
                  count={theme.newConferences.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
        
        <div className={theme.classes.loader}>
          {theme.loading && <CircularProgress disableShrink />}
        </div>
      </Container>
    </main>
  );
};

export default ConferenceTable;

