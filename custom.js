// custom.js
// Hide the download button in Jupyter Notebook
require(["base/js/namespace", "base/js/events"], function(Jupyter, events) {
    events.on("app_initialized.NotebookApp", function() {
        Jupyter.toolbar.actions.get("jupyter-notebook:download-notebook").remove();
    });
});
