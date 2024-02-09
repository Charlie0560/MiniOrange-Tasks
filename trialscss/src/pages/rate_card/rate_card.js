import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { transactions } from "@/pages/api/rate_card";
import { FormControl, MenuItem, Select } from "@mui/material";
import rateCardCSS from "../../styles/rateCard.module.scss";
import {
  faAngleLeft,
  faChevronRight,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const drawerBleeding = 56;
const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));
const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const columns = [
  { id: "countryName", label: "Country", minWidth: 500, align: "left" },
  { id: "numberOfTxn", label: "No. of Transactions", minWidth: 100 },
  {
    id: "smsPrice",
    label: "SMS Pricing(In USD)",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "emailPrice",
    label: "Email Pricing(In USD)",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
];

const no_of_trsc_list = [100, 500, 1000, 5000, 10000, 50000];
const no_of_entries_list = [10, 25, 50, 100];

function rate_card(props) {
  const [page, setPage] = useState(0);
  const [searchContry, setSearchContry] = useState("");
  const [no_of_trsc, setNo_of_trsc] = useState(1000);
  const [no_of_entries, setNo_of_entries] = useState(25);
  const [rowsPerPage, setRowsPerPage] = useState(no_of_entries);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(no_of_entries);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    function modifiedColumns() {
      if (document.documentElement.clientWidth < 768) {
        columns.forEach((c) => (c.align = "right"));
        console.log(columns);
      }
    }
    modifiedColumns();
  }, []);
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = searchContry
    ? transactions.filter((item) =>
        item.countryName.toLowerCase().startsWith(searchContry)
      )
    : transactions.filter((item) => item.numberOfTxn === no_of_trsc);

  const handleChange_trsc = (event) => {
    setNo_of_trsc(event.target.value);
  };

  const handleChange_entries = (event) => {
    setTo(event.target.value);
    setNo_of_entries(event.target.value);
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <>
      <button
        onClick={toggleDrawer(true)}
        className={rateCardCSS.rate_mobile_filter}
      >
        <FontAwesomeIcon icon={faFilter} />
        Fliter
      </button>
      <div className={rateCardCSS.rate_fltr}>
        <div className="searchContry">
          <span>Search:</span>
          <input
            type="search"
            placeholder="Search by Countries"
            onChange={(e) => setSearchContry(e.target.value)}
          />
        </div>
        <div className="noofTrsc">
          <span>No. of Transactions</span>
          <FormControl className={rateCardCSS.trasaction_fltr}>
            <Select
              value={no_of_trsc}
              onChange={handleChange_trsc}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              width={100}
              style={{
                fontSize: "12px",
                height: "30px",
              }}
            >
              {no_of_trsc_list.map((r) => (
                <MenuItem style={{ fontSize: "12px" }} value={r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="no_of_entries">
          <span>Show</span>
          <FormControl className={rateCardCSS.trasaction_fltr}>
            <Select
              value={no_of_entries}
              onChange={handleChange_entries}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              width={100}
              style={{
                fontSize: "12px",
                height: "30px",
              }}
            >
              {no_of_entries_list.map((r) => (
                <MenuItem style={{ fontSize: "12px" }} value={r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <span>entries</span>
        </div>
      </div>
      <Paper
        sx={{ width: "60%", overflow: "hidden", margin: "auto" }}
        className={rateCardCSS.paper}
      >
        <TableContainer className={rateCardCSS.rateCardTable}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      min_width: column.minWidth,
                      backgroundColor: "#ff5e1f",
                      color: "white",
                      fontWeight: 700,
                    }}
                    className={rateCardCSS.tableCell}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          row.numberOfTxn === no_of_trsc && (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={rateCardCSS.tableCell}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className={rateCardCSS.MuiTablePagination_selectLabel}
        />
      </Paper>
      {rows.length > rowsPerPage && (
        <div className={rateCardCSS.rateCardPagination}>
          <button
            onClick={(e) => {
              setPage(page - 1);
              setFrom(from - rowsPerPage);
              setTo(to - rowsPerPage);
            }}
            disabled={page === 0}
          >
            <FontAwesomeIcon icon={faAngleLeft} />{" "}
          </button>
          <span>
            {from + 1} - {to}
          </span>
          <button
            onClick={(e) => {
              setPage(page + 1);
              setFrom(from + rowsPerPage);
              setTo(to + rowsPerPage);
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          {/* <Typography sx={{ p: 2, color: "text.secondary" }}>
            51 results
          </Typography> */}
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <div className={rateCardCSS.mob_rate_fltr}>
            <div className="searchContry">
              <span>Search:</span>
              <input
                type="search"
                placeholder="Search by Countries"
                onChange={(e) => setSearchContry(e.target.value)}
              />
            </div>
            <div className="noofTrsc">
              <span>No. of Transactions</span>
              <FormControl className={rateCardCSS.trasaction_fltr}>
                <Select
                  value={no_of_trsc}
                  onChange={handleChange_trsc}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  width={100}
                  style={{
                    fontSize: "12px",
                    height: "30px",
                  }}
                >
                  {no_of_trsc_list.map((r) => (
                    <MenuItem style={{ fontSize: "12px" }} value={r}>
                      {r}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="no_of_entries">
              <span>Show</span>
              <FormControl className={rateCardCSS.trasaction_fltr}>
                <Select
                  value={no_of_entries}
                  onChange={handleChange_entries}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  width={100}
                  style={{
                    fontSize: "12px",
                    height: "30px",
                  }}
                >
                  {no_of_entries_list.map((r) => (
                    <MenuItem style={{ fontSize: "12px" }} value={r}>
                      {r}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <span>entries</span>
            </div>
          </div>

          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}

export default rate_card;
