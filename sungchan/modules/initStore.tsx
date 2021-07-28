import { observable } from 'mobx';

const InitStore = observable({
    // state
    isEnd: false,

    setIsEnd(isEnd: boolean) {
        this.isEnd = isEnd;
    },
});

export default InitStore;
