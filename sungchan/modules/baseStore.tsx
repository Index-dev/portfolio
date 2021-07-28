import { observable } from 'mobx';

const BaseStore = observable({
    // state
    titleArray: ['Main', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
    innerWidth: 0,
    innerHeight: 0,

    setInnerWidth(innerWidth) {
        this.innerWidth = innerWidth;
    },

    setInnerHeight(innerHeight) {
        this.innerHeight = innerHeight;
    },
});

export default BaseStore;
