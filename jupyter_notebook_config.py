from notebook.utils import url_path_join
from tornado.web import HTTPError

def disable_download_handler(handler):
    raise HTTPError(403, "File download is disabled.")

def patch_jupyter_app(app):
    """Disable access to file downloads in Jupyter."""
    # Override the 'files' and 'download' handlers to block downloads
    app.web_app.add_handlers(".*", [
        (url_path_join(app.base_url, r'/files/(.*)'), disable_download_handler),
        (url_path_join(app.base_url, r'/download/(.*)'), disable_download_handler),
    ])

c.ServerApp.web_app_settings = {
    'before_start_hook': patch_jupyter_app
}