import * as React from 'react';
import styled from 'styled-components';
import Base from './base';

interface IProjects {
    componentNo: number;
}

const Projects: React.FC<IProjects> = ({ componentNo }): JSX.Element => {
    return (
        <Base componentNo={componentNo}>
            <div>
                <p>Projects page</p>
            </div>
        </Base>
    );
};

export default Projects;
