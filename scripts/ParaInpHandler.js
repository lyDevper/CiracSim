class ParaInpHandler {
    /* This class is a template for objects that will handle component
    of parameter input.
    One component contains text input, reset button.
    This will handle events when text input is changed or reset button is clicked,
    and update with StatePara.
    */

    constructor(inputId, resetId) {
        this.input = document.getElementById(inputId);
        this.resetBtn = document.getElementById(resetId);

        this.input.addEventListener('change', this.handleInputChange.bind(this));
        this.resetBtn.addEventListener('click', this.handleResetBtnClick.bind(this));
    }
    // tsuzuku

    //setValue



    static buildHandlers() {
        // instantiate each handler as a static property
    }
}