import os
import webview

from core.webview.entrypoint import get_dev_entrypoint, get_entrypoint
from core.webview.API import API


def main():
    api = API()

    if os.environ.get("ENV") == "production":
        entry = get_entrypoint()
        debug = False
    else:
        entry = get_dev_entrypoint()
        debug = True

    webview.create_window("Uta Timeline", entry, js_api=api)

    webview.start(debug=debug)


if __name__ == "__main__":
    main()
