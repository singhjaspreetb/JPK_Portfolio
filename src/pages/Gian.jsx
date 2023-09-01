import {
    Container,
    Typography,
    Paper,
    List,
    ListItem,
    Link,
    Grid,
} from '@mui/material';

const GIAN = () => {
    const paperStyle = {
        padding: '16px',
        marginBottom: '16px',
        border: '2px solid #336699',
    };

    return (
        <Container>
            <Paper elevation={3} sx={{ ...paperStyle }}>
                <Typography variant="h4" fontWeight="bolder" marginBottom="1rem">
                    GIAN COURSE ON MECHANICAL DESIGN FOR PRICE SENSITIVE MARKETS
                </Typography>
                
                <Typography variant="h6">
                    Overview
                </Typography>
                <Typography variant="body1">
                    The growth in mechanical engineering goods is for compact, intelligent, and cost-effective solutions.
                    Successful designs evolve out of frugal specification of the needs and precise formulations. Fundamental
                    machine design theory is augmented in this course to parametrically analyze technologies; bottom-up/top-down
                    design processes; engaging stakeholders in the design process; understanding socioeconomic factors that affect
                    adoption of products; and developing and emerging market dynamics and their effect on the business and technology
                    of new product acceptance. The educational objective of the course is to introduce tools required to understand,
                    tackle, and solve challenging technical problems that have to be overcome for the Make-in-India initiative.
                    The first section introduces the principles of human-centric design and their use to evolve minimum specifications
                    of the needs. This is followed by embodiment design, based on degree of freedom, constraint, and stiffness analysis.
                    The next section looks at methods to prototype and analyze systems for evaluations, both in-silicon and physically.
                    Finally, the use of assembly requirements through exact-constrained design methodologies will be deployed to simplify
                    machining and assembly effort to target cost-sensitive markets.
                </Typography>

                <Typography variant="h6">
                    Lecture videos of Prof Amos G Winter, MIT, USA
                </Typography>
                <List>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <Link href="https://youtu.be/Q1DmGtz_OFo" target="_blank">
                                    Prof Amos G Winter Lecture 1
                                </Link>
                                <iframe
                                    width="320"
                                    height="180"
                                    src="https://www.youtube.com/embed/Q1DmGtz_OFo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen=""
                                ></iframe>
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <Link href="https://youtu.be/rFbiTlMC-Xw" target="_blank">
                                    Prof Amos G Winter Lecture 2
                                </Link>
                                <iframe
                                    width="320"
                                    height="180"
                                    src="https://www.youtube.com/embed/rFbiTlMC-Xw"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen=""
                                ></iframe>
                            </ListItem>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <Link href="https://youtu.be/EkYwlgayOL4" target="_blank">
                                    Prof Amos G Winter Lecture 3
                                </Link>
                                <iframe
                                    width="320"
                                    height="180"
                                    src="https://www.youtube.com/embed/EkYwlgayOL4"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen=""
                                ></iframe>
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <Link href="https://youtu.be/56MjWOAA7iU" target="_blank">
                                    Prof Amos G Winter Lecture 4
                                </Link>
                                <iframe
                                    width="320"
                                    height="180"
                                    src="https://www.youtube.com/embed/56MjWOAA7iU"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen=""
                                ></iframe>
                            </ListItem>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <Link href="https://youtu.be/KRt1Ly8Nt_s" target="_blank">
                                    Prof Amos G Winter Lecture 5
                                </Link>
                                <iframe
                                    width="320"
                                    height="180"
                                    src="https://www.youtube.com/embed/KRt1Ly8Nt_s"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen=""
                                ></iframe>
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ListItem>
                                <Link href="https://youtu.be/Y7XoFaw00XY" target="_blank">
                                    Prof Amos G Winter Lecture 6
                                </Link>
                                <iframe
                                    width="320"
                                    height="180"
                                    src="https://www.youtube.com/embed/Y7XoFaw00XY"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen=""
                                ></iframe>
                            </ListItem>
                        </Grid>
                    </Grid>
                </List>

                {/* <Typography variant="h6">
                    Suggested Books and Reference Materials
                </Typography>
                <ul style={{ listStyleType: 'square' }}>
                    <li>
                    </li>
                </ul> */}

                <Typography variant="h6">
                    Interesting Links and Articles
                </Typography>
                <ul style={{ listStyleType: 'circle' }}>
                    <li>
                        <Link href="http://www.gian.iitkgp.ac.in/" target="_blank">
                            Global Initiative of Academic Networks (GIAN)
                        </Link>
                    </li>
                    <li>
                        <Link href="docs/GIAN_DPM_info.pdf" target="_blank">
                            Course information
                        </Link>
                    </li>
                    <li>
                        <Link href="http://gear.mit.edu/" target="_blank">
                            Global Engineering and Research Lab, MIT
                        </Link>
                    </li>
                    <li>
                        <Link href="http://meche.mit.edu/people/faculty/awinter@mit.edu" target="_blank">
                            Amos G Winter, MIT
                        </Link>
                    </li>
                </ul>
            </Paper>
        </Container>
    );
};

export default GIAN;
