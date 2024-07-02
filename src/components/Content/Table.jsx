import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tabledata from "../../services/Api/Tabledata";
import a from "../../assets/a.png";
import fill from "../../assets/filter.png";
import {Typography} from "@mui/material";
import "./Content.css";

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#DCE2F0",
        color: "#1B2D4F",
        fontFamily: '"Manrope", sans-serif !important',
        fontWeight: 500,
        fontSize: 14,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontFamily: '"Manrope", sans-serif !important',
        fontWeight: 500,
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "#F6F5FB",
    },

    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const StyledTable = styled(Table)(() => ({
    fontFamily: '"Manrope", sans-serif !important',
    fontWeight: 500,
    fontSize: 14,
}));

const StyledTableContainer = styled(TableContainer)(() => ({
    boxShadow: "none",
}));

const rowWrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    justifyContent: "space-between",
};

export default function CustomizedTables() {
    const {loading, rows, error} = Tabledata();
    if (loading) return <p>Loading data....</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <StyledTableContainer component={Paper}>
            <StyledTable sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            <div style={rowWrapperStyle}>
                                <div style={{display: "flex"}}>
                                    <img src={a} alt="Product Image" />
                                    <Typography variant="body1" className="productName" style={{whiteSpace: "nowrap"}}>
                                        Product Name
                                    </Typography>
                                </div>
                                <img src={fill} alt="Filter Icon" />
                            </div>
                        </StyledTableCell>
                        <StyledTableCell>
                            <div style={rowWrapperStyle}>
                                <div style={{display: "flex"}}>
                                    <img src={a} alt="Product Image" />
                                    <Typography variant="body1" className="productName" style={{whiteSpace: "nowrap"}}>
                                        Price
                                    </Typography>
                                </div>
                                <img src={fill} alt="Filter Icon" />
                            </div>
                        </StyledTableCell>
                        <StyledTableCell>
                            <div style={rowWrapperStyle}>
                                <div style={{display: "flex"}}>
                                    <img src={a} alt="Product Image" />
                                    <Typography variant="body1" className="productName" style={{whiteSpace: "nowrap"}}>
                                        Rating
                                    </Typography>
                                </div>
                                <img src={fill} alt="Filter Icon" />
                            </div>
                        </StyledTableCell>
                        <StyledTableCell>
                            <div style={rowWrapperStyle}>
                                <div style={{display: "flex"}}>
                                    <img src={a} alt="Product Image" />
                                    <Typography variant="body1" className="productName" style={{whiteSpace: "nowrap"}}>
                                        Brand
                                    </Typography>
                                </div>
                                <img src={fill} alt="Filter Icon" />
                            </div>
                        </StyledTableCell>
                        <StyledTableCell>
                            <div style={rowWrapperStyle}>
                                <div style={{display: "flex"}}>
                                    <img src={a} alt="Product Image" />
                                    <Typography variant="body1" className="productName" style={{whiteSpace: "nowrap"}}>
                                        Availability
                                    </Typography>
                                </div>
                                <img src={fill} alt="Filter Icon" />
                            </div>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.product_name}>
                            <StyledTableCell component="th" scope="row">
                                {row.product_name}
                            </StyledTableCell>
                            <StyledTableCell>{row.Price}</StyledTableCell>
                            <StyledTableCell>{row.Rating}</StyledTableCell>
                            <StyledTableCell>{row.Brand}</StyledTableCell>
                            <StyledTableCell>{row.Availability}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    );
}
