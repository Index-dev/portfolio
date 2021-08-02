import * as React from 'react';
import Main from '../component/main';
import Intro from '../component/intro';
import WhyIt from '../component/whyIt';
import Skills from '../component/skills';
import Career from '../component/career';
import Init from '../component/init';
import indexStore from '../modules/indexStore';
import { useObserver } from 'mobx-react';
import Projects from '../component/projects';

const Index = (): JSX.Element => {
    const { initStore, baseStore } = indexStore();

    React.useEffect(() => {
        window.addEventListener('resize', onChangeResize);
        window.addEventListener('scroll', onChangeScroll);
        onChangeResize();
        onChangeScroll();

        return () => {
            window.removeEventListener('resize', onChangeResize);
            window.removeEventListener('scroll', onChangeScroll);
        };
    }, []);

    // onChange
    const onChangeResize = () => {
        baseStore.setInnerWidth(window.innerWidth);
    };

    const onChangeScroll = () => {
        baseStore.setScrollY(window.scrollY);
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
                    <Projects />
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
            <link
                type="text/css"
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
        </>
    ));
};

export default Index;
