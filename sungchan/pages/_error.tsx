import * as React from 'react';
import { GetServerSideProps } from 'next';

const Error: React.FC = (): JSX.Element => {
    return (
        <div>
            에러 발생 시 나오는 페이지 <br />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
    const statusCode = res.statusCode;

    return {
        props: {
            statusCode,
        },
    };
};

export default Error;
