import os

import webview
from ..fs import create_folder


class API:
    def create_folder(self, video_id):
        return create_folder(video_id).unwrap()

    def fullscreen(self):
        webview.windows[0].toggle_fullscreen()

    def save_content(self, content):
        filename = webview.windows[0].create_file_dialog(webview.SAVE_DIALOG)
        if not filename:
            return

        with open(filename, "w") as f:
            f.write(content)

    def ls(self):
        return os.listdir(".")

    def takeScreenshot(self):
        print("Take screenshot 5")
        return
