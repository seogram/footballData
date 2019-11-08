import React, { useContext, useState } from "react";
import Container from "@material-ui/core/Container";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from "@material-ui/core/TablePagination";
import Paper from '@material-ui/core/Paper';
//@ts-ignore
import Img from 'react-image'
import CircularProgress from "@material-ui/core/CircularProgress";
import { UserContext } from "../utils/context";
import { Team } from "../types";
import { Filter } from "./header/Filter";

export const TeamTable = () => {
  const theme = useContext(UserContext);
  const [page , setPage] = useState<number>(0);
  const [rowsPerPage , setRowsPerPage] = useState<number>(10);

  const handleChangePage = (event : any, page: number) => {
   setPage(page)
  };

  const handleChangeRowsPerPage = (event : any) => {
    setRowsPerPage(event.target.value)
   };
  const table = theme.newTeams.length && (
    <Table className={theme.classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Logo</TableCell>
                    <TableCell align="center">Abbr.</TableCell>
                    <TableCell align="center">School</TableCell>
                    <TableCell align="center">Mascot</TableCell>
                    <TableCell align="center">Division</TableCell>
                    <TableCell align="center">Conference</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {theme.newTeams.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: Team) => {
                    return (
                      <TableRow key={row.id}>
                      <TableCell component="th" scope="row">  
                       <Img
                        className={theme.classes.icon}
                        src={[
                          row.logos && row.logos[0],
                          row.logos && row.logos[1]
                        ]}
                        loader="loading"
                        unloader="not available"
                      />
                      </TableCell>
                      <TableCell align="center">{row.abbreviation}</TableCell>
                      <TableCell align="center">{row.school}</TableCell>
                      <TableCell align="center">{row.mascot}</TableCell>
                      <TableCell align="center">{row.division}</TableCell>
                      <TableCell align="center">{row.conference}</TableCell>
                    </TableRow>
                    )
                  }
                  )}
                </TableBody>
              </Table>
  )

  return (
    <main className={theme.classes.content}>
      <Container className={theme.classes.cardGrid}>
        <Filter />
              <Paper className={theme.classes.root}>
                 {table}
              <TablePagination
                  component="div"
                  count={theme.newTeams.length}
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

export default TeamTable;

