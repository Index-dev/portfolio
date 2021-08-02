import { observable } from 'mobx';

const BaseStore = observable({
    // state
    titleArray: ['Main', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
    componentHeights: [0, 0, 0, 0, 0, 0, 0],
    innerWidth: 0,
    scrollY: 0,

    setComponentHeight(index, height) {
        this.componentHeights[index] = height;
    },

    setInnerWidth(innerWidth) {
        this.innerWidth = innerWidth;
    },

    setScrollY(scrollY) {
        this.scrollY = scrollY;
    },

    getAccumulateComponentHeight(index) {
        let count = 0;
        for (let i = 0; i < index; i++) {
            count += this.componentHeights[i];
        }

        return count;
    },
});

export default BaseStore;
