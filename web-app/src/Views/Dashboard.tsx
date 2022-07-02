import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Button,
    Heading,
    Stack,
    Box,
    Center,
    Text
} from '@chakra-ui/react';
import TopNavBar from '../Layouts/TopNavBar';

function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <TopNavBar />
            <Heading mt={10} textAlign="center">Sample calls to MongoDB</Heading>
            <Center padding={10}>
                <Box minW='480' textAlign="center" borderWidth='1px' padding={10} borderRadius='lg' overflow='hidden'>
                    <Text fontSize='4xl'>CRUD Calls</Text>
                    <br />
                    <Stack spacing={4} direction='column' align='center'>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            bg={'red.400'}
                            onClick={() => {
                                navigate('/getusers' + location.search);
                            }}>
                            Get all users
                        </Button>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            bg={'yellow.400'}
                            onClick={() => {
                                navigate('/adduser' + location.search);
                            }}>
                            Add a new user
                        </Button>
                    </Stack>
                </Box>
            </Center>
        </>
    )
}

export default Dashboard;