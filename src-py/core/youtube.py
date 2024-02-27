import yt_dlp


def download_audio(url, path):
    yt_dlp_opts = {
        "format": "ba",
        "format_sort": ["+size"],
        "paths": path,
        "postprocessors": [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "wav",
            }
        ],
    }
