class ParaInpHandler {
    /* This class is a template for objects that will handle component
    of parameter input.
    One component contains text input, reset button.
    This will handle events when text input is changed or reset button is clicked,
    and update with StatePara.
    */

    constructor(inputId, resetId, state, defaultVal) {
        this.input = document.getElementById(inputId);
        this.resetBtn = document.getElementById(resetId);
        this.state = state;
        this.defaultVal = defaultVal;

        // use arrow function to bind this
        this.input.addEventListener('change', () => {
            this.state.setValue(this.input.value);
        });

        this.resetBtn.addEventListener('click', () => {
            this.state.setValue(this.defaultVal);
        });

        // bind state to input appearance
        this.state.addReactFunc((val) => {
            this.input.value = val;
        });

        this.input.value = this.defaultVal;
    }
    
    getValue() {
        return this.input.value;
    }

    setValue(value) {
        this.input.value = value;
    }

    static buildHandlers() {
        // instantiate each handler as a static property
        this.rpm_handler = new ParaInpHandler('inp_rpm', 'reset_rpm', StatePara.state_rpm, DefaultPara.rpm);
    }
}