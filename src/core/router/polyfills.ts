(function(history){
    const pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state} as any as Event);
        }
        return pushState.apply(history, arguments as any);
    };
})(window.history);

export {};
