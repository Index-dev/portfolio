import * as React from 'react';
import Base from './base';
import styled from 'styled-components';

interface ICareer {
    title: string;
}

const Career: React.FC<ICareer> = ({ title }): JSX.Element => {
    return (
        <Base title={title}>
            <p>career</p>
        </Base>
    );
};

export default Career;
