import { Paper, Typography, Link, List, ListItem, Grid } from '@mui/material';

function DPM() {
    const paperStyle = {
        padding: '16px',
        marginBottom: '16px',
        border: '2px solid #336699',
    };
    const hrStyle = {
        margin: '2rem 0',
        border: 'none',
        borderTop: '1px solid #ccc',
    };
    return (
        <Paper elevation={3} sx={paperStyle}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Design of Precision Machines
            </Typography>
            <hr style={hrStyle} />
            <Typography variant="h5" color="#4B0082" fontStyle="italic" marginBottom="1rem">
                <i>Interesting links related to DPM!!!</i>
            </Typography>

            <hr style={hrStyle} />
            <Typography variant="h6" gutterBottom>
                Compliant Mechanisms
            </Typography>
            <List>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <ListItem>
                            <Link href="https://youtu.be/97t7Xj_iBv0" target="_blank" rel="noopener">
                                Why Machines That Bend Are Better
                            </Link>
                            <iframe
                                width="320"
                                height="180"
                                src="https://www.youtube.com/embed/97t7Xj_iBv0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube Video 1"
                            ></iframe>
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ListItem>
                            <Link href="https://www.youtube.com/djxsE6zo_tc" target="_blank" rel="noopener">
                                Harvard's milliDelta: A high-bandwidth, high-precision, millimeter-scale Delta robot
                            </Link>
                            <iframe
                                width="320"
                                height="180"
                                src="https://www.youtube.com/embed/djxsE6zo_tc"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube Video 2"
                            ></iframe>
                        </ListItem>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <ListItem>
                            <iframe
                                width="320"
                                height="180"
                                src="https://www.youtube.com/embed/L_9BDZ6ZBwk"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube Video 3"
                            ></iframe>
                        </ListItem>
                    </Grid>
                </Grid>
            </List>

            <hr style={hrStyle} />
            <Typography variant="h6" gutterBottom>
                Reading Materials
            </Typography>
            <ul>
                <li>
                    <Link href="http://privateweb.iitd.ac.in/~jpkhatait/dpm/reading/Schellekens1998_dfp.pdf" target="_blank" rel="noopener">
                        Design for Precision: Current Status and Trends
                    </Link>
                </li>
                <li>
                    <Link href="http://privateweb.iitd.ac.in/~jpkhatait/dpm/reading/Hale1999_PE.pdf" target="_blank" rel="noopener">
                        Precision Engineering Principles
                    </Link>
                </li>
            </ul>

            <hr style={hrStyle} />
            <Typography variant="h6" gutterBottom>
                Suggested Books and Reference Materials
            </Typography>
            <ul>
                <li>Soemers H.M.J.R., Design Principles for Precision Mechanism, 978-90-365-3103-0, 2011 (available at IIT Delhi Central Library and Mechanical Engg Dept Library)</li>
                <li>Smith S.T. and Chetwynd D.G., Foundations of Ultraprecision Mechanism Design, Volume 2 of Developments in Nanotechnology, CRC Press, 2003 (available at IIT Delhi library)</li>
                <li>Douglass L. Blanding, Exact Constraint: Machine Design Using Kinematic Principles, ASME Press, 1999</li>
                <li>Alexander H. Slocum, Precision machine design, Prentice Hall, 1992 (available at IIT Delhi library)</li>
                <li>Hiromu Nakazawa, Principles of Precision Engineering, Oxford University Press, 1994 (available at IIT Delhi library)</li>
            </ul>

            <hr style={hrStyle} />
            <Typography variant="h6" gutterBottom>
                Interesting Articles
            </Typography>
            <ul>
                <li>
                    <Link href="http://privateweb.iitd.ac.in/~jpkhatait/dpm/articles/Mikroniek-2010-2-1.pdf" target="_blank" rel="noopener">
                        Design Principles: A Way of Working
                    </Link>
                </li>
            </ul>

            <hr style={hrStyle} />
            <Typography variant="h6" gutterBottom>
                Journals and Magazines
            </Typography>
            <h4>Journals</h4>
            <ul>
                <li>
                    <Link href="http://www.sciencedirect.com/science/journal/01416359" target="_blank" rel="noopener">
                        Precision Engineering
                    </Link>
                    , Journal of the International Societies for Precision Engineering and Nanotechnology
                    <ul>
                        <li>
                            <Typography variant="body2">
                                <i>Please check for good articles related to the course and discuss if interested to work</i>
                            </Typography>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="http://www.dspe.nl/mikroniek/archive" target="_blank" rel="noopener">
                        Mikroniek
                    </Link>
                    , the magazine of DSPE, containing technical articles, and information about the precision engineering community
                    <ul>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=2115" target="_blank" rel="noopener">
                                Mikroniek, Issue 1, 2018
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=2114" target="_blank" rel="noopener">
                                Mikroniek, Issue 6, 2017
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=2113" target="_blank" rel="noopener">
                                Mikroniek, Issue 5, 2017
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=2112" target="_blank" rel="noopener">
                                Mikroniek, Issue 4, 2017
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=2039" target="_blank" rel="noopener">
                                Mikroniek, Issue 3, 2017
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=2038" target="_blank" rel="noopener">
                                Mikroniek, Issue 2, 2017
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=2040" target="_blank" rel="noopener">
                                Mikroniek, Issue 1, 2017
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=1482" target="_blank" rel="noopener">
                                Mikroniek, Issue 2, 2014
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=1481" target="_blank" rel="noopener">
                                Mikroniek, Issue 1, 2014
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=1480" target="_blank" rel="noopener">
                                Mikroniek, Issue 6, 2013
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=1479" target="_blank" rel="noopener">
                                Mikroniek, Issue 5, 2013
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=1478" target="_blank" rel="noopener">
                                Mikroniek, Issue 4, 2013
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=1477" target="_blank" rel="noopener">
                                Mikroniek, Issue 3, 2013
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=1476" target="_blank" rel="noopener">
                                Mikroniek, Issue 2, 2013
                            </Link>
                        </li>
                        <li>
                            <Link href="http://www.dspe.nl/cms_file.php?fromDB=1468" target="_blank" rel="noopener">
                                Mikroniek, Issue 1, 2013
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </Paper>
    );
}

export default DPM;
