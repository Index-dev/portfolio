import * as React from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { setIsEndAction } from '../modules/actions';

const InitContainerKeyframe = keyframes`
    60% {
        transform: scale(1);
        opacity: 1;
    }

    90%, 100% {
        transform: scale(4.6);
        opacity: 0.2;
    }
`;

const InitContainer = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    animation-name: ${InitContainerKeyframe};
    animation-duration: 4s;
    animation-iteration-count: infinite;
`;

const InitImage = styled.img`
    max-width: 100%;
`;

const Init = (): JSX.Element => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        setTimeout(() => {
            dispatch(setIsEndAction(true));
        }, 3800);
    }, []);

    return (
        <InitContainer>
            <InitImage src="/image/init.gif" />
        </InitContainer>
    );
};

export default Init;
