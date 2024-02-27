import os
import webview


class Api:
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


def get_dev_entrypoint():
    return "http://localhost:4321"


def get_entrypoint():
    def exists(path):
        return os.path.exists(os.path.join(os.path.dirname(__file__), path))

    if exists("../dist/index.html"):
        return "../dist/index.html"

    raise Exception("No index.html found")


def main():
    api = Api()

    if os.environ.get("ENV") == "production":
        entry = get_entrypoint()
        debug= False
    else:
        entry = get_dev_entrypoint()
        debug = True

    window = webview.create_window("Uta Timeline", entry, js_api=api)

    webview.start(debug=debug)


if __name__ == "__main__":
    main()
