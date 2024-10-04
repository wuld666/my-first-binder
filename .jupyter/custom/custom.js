// This script hides the download options from the File menu and toolbar
require(['base/js/namespace', 'base/js/events'], function (Jupyter, events) {
    events.on('app_initialized.NotebookApp', function () {
        // Hide the "Download as" option in the "File" menu
        $('li#download_as').remove();
        // Hide the download buttons in the toolbar (Jupyter Notebook)
        $('#save-notbook').remove();
    });
});
