import os


def get_dev_entrypoint():
    return "http://localhost:4321"


def get_entrypoint():
    def exists(path):
        return os.path.exists(os.path.join(os.path.dirname(__file__), path))

    if exists("../dist/index.html"):
        return "../dist/index.html"

    raise Exception("No index.html found")
