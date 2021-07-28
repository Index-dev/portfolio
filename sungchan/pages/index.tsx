import * as React from 'react';
import styled from 'styled-components';
import Main from '../component/main';
import Intro from '../component/intro';
import WhyIt from '../component/whyIt';
import Skills from '../component/skills';
import Career from '../component/career';
import Init from '../component/init';
import indexStore from '../modules/indexStore';
import { useObserver } from 'mobx-react';

const Index = (): JSX.Element => {
    const { initStore, baseStore } = indexStore();

    React.useEffect(() => {
        window.addEventListener('resize', onChangeResize);
        onChangeResize();

        return () => {
            window.removeEventListener('resize', onChangeResize);
        };
    }, []);

    // onChange
    const onChangeResize = () => {
        baseStore.setInnerWidth(window.innerWidth);
        baseStore.setInnerHeight(window.innerHeight);
    };

    return useObserver(() => (
        <>
            {initStore.isEnd ? (
                <>
                    <Main />
                    <Intro />
                    <WhyIt />
                    <Skills />
                    <Career />
                </>
            ) : (
                <Init />
            )}

            <style global jsx>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                    }

                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6,
                    span,
                    p {
                        font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
                    }

                    @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
                `}
            </style>
        </>
    ));
};

export default Index;
