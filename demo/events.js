import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.on('anything', data => {
    console.log('ON: anything', data);
});

emitter.emit('anything', {a: 1});

setTimeout(() => {
    emitter.emit('anything', {c: 3});
}, 1500);


class Dispatcher extends EventEmitter {
    subscribe(e, callback) {
        console.log('[Subscribe...]');
        this.on(e, callback);
    };
    dispatch(e, data) {
        console.log('[Dispatching...]');
        this.emit(e, data);
    };
};

const dis = new Dispatcher();
dis.subscribe('aa', data => {
    console.log('ON: aa', data);
});
dis.dispatch('aa', {aa: 22});
