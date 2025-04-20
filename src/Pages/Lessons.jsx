import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';
import LessonsData from '../assets/LessonsData.json';
import { useContext } from 'react';
import LessonsContext from '../Context/LessonContext.jsx';



function BasicTable({data, levels}) {
    const headers = [
            { "title": "Name", "align": "left" },
            { "title": "Leetcode link", "align": "right" },
            { "title": "YouTube link", "align": "right" },
            { "title": "Articel link", "align": "right" },
            { "title": "Level", "align": "right" },
            { "title": "Status", "align": "right" }
        ];

    const statusClick = (e, row) =>{
        const statusEle = document.getElementById(`status${row.name}`);
        if(e.target.checked){
            statusEle.innerHTML = "Done";
            data.find(e => e.name === row.name).status = "Done";
            levels[`set${row.level}`](levels[row.level.toLowerCase()]+1);
        }
        else {
            statusEle.innerHTML = "Pending";
            data.find(e => e.name === row.name).status = "Pending";
            levels[`set${row.level}`](Math.max(levels[row.level.toLowerCase()]-1, 0));
        }
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            headers.map((header, index) =>  <TableCell key={index} align={header.align}>{header.title}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" onClick={(e) => statusClick(e, row)} > <input type='checkbox' checked={row.status==='Done'}/> {row.name} </TableCell>
                            <TableCell align="right">{<Link href={row.leetcode}>practice</Link>}</TableCell>
                            <TableCell align="right">{<Link href={row.youtube}>watch</Link>}</TableCell>
                            <TableCell align="right">{<Link href={row.article}>read</Link>}</TableCell>
                            <TableCell align="right">{row.level}</TableCell>
                            <TableCell id={`status${row.name}`}align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}




export default function DisabledAccordion() {
    const levels = useContext(LessonsContext);
    return (
        <section className='section'>

        {LessonsData.map((lesson, idx) =>{
            return(<Accordion key={lesson.title}>
                <AccordionSummary
                    expandIcon={"+"}
                    aria-controls={`panel${idx+1}-content`}
                    id={`panel${idx+1}-header`}
                >
                    <Typography component="span">{lesson.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BasicTable data={lesson.tableData} levels={levels} />
                </AccordionDetails>
            </Accordion>)
        })}
        </section>
    );
}


