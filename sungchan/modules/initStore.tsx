import { observable } from 'mobx';

const InitStore = observable({
    // state
    isEnd: true,

    setIsEnd(isEnd: boolean) {
        this.isEnd = isEnd;
    },
});

export default InitStore;
