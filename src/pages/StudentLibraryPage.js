import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent, List, ListItemText, ListItem, ListItemIcon } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Resources
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Mathematics" {...a11yProps(0)} />
                            <Tab label="Physics" {...a11yProps(1)} />
                            <Tab label="Chemistry" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Khan Academy"
                                    secondary='https://in.khanacademy.org/science/physics

                                        '
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Unacademy Maths"
                                    secondary='https://www.youtube.com/channel/UCeWiEqYi0pZGmn-nYmzxZZw'
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Byju's Maths"
                                    secondary='https://byjus.com/mathematics/'
                                />
                            </ListItem>
                        </List>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Physics Galaxy by Ashish Arora"
                                    secondary='https://www.physicsgalaxy.com/'
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Resnick and Halliday"
                                    secondary='https://www.youtube.com/playlist?list=PLyqsVwFjK6vzFMnJQ2bXzJrxZWnU6F3q6'
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="PhysicsWallah"
                                    secondary='https://www.youtube.com/channel/UCqiFTyCxFFMAN_lhAzIkdpA'
                                />
                            </ListItem>
                        </List>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Chemistry Made Easy"
                                    secondary='https://www.youtube.com/channel/UC01X9TzSzcS2Bl_XFI2lOqQ'
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Chemistry Simplified"
                                    secondary='https://www.youtube.com/channel/UCJ0dX9XaC8-ZOyjrdH0hyJg'
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="ChemistryNotesInfo.com"
                                    secondary='https://www.chemistrynotesinfo.com/'
                                />
                            </ListItem>
                        </List>
                    </TabPanel>
                </Box>
            </CardContent>
        </Card>
    );
}
