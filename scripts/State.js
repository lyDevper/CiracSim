class State {
    constructor(value = null) {
        this.value = value;
        this.reactFunctions = [];
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        if (value === this.value) {
            return;
        }
        
        this.value = value;
        for (let func of this.reactFunctions) {
            func(value);
        }
    }

    addReactFunc(func) {
        this.reactFunctions.push(func);
    }

}
