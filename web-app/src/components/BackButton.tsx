import React from 'react'
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    return (
        <Button
            rounded={'full'}
            size={'md'}
            fontWeight={'normal'}
            px={6}
            leftIcon={<ArrowBackIcon h={4} w={4} />}
            onClick={() => navigate(-1)}
        >
            Back
        </Button>
    )
}

export default BackButton;