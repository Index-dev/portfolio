import * as React from 'react';
import Base from './base';

interface IMore {
    componentNo: number;
}

const More: React.FC<IMore> = ({ componentNo }): JSX.Element => {
    return (
        <Base componentNo={componentNo}>
            <div>
                <p>more page</p>
            </div>
        </Base>
    );
};

export default More;
