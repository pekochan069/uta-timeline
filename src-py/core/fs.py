import os
from pathlib import Path

from result import Result


def get_data_folder() -> str:
    """Get data folder where all the audio files and timelines are stored

    Returns:
        str: Path to the data folder
    """
    data_folder = os.path.join(Path(__file__).parent.parent.parent, "data")

    if not os.path.exists(data_folder):
        os.mkdir(data_folder)

    return data_folder


def get_audio_folder(video_id: str) -> str:
    """Get the audio folder for a specific video

    Args:
        video_id (str): youtube video id

    Returns:
        str: Path to the audio folder
    """
    data_folder = get_data_folder()

    path = os.path.join(data_folder, video_id)

    if not os.path.exists(path):
        os.mkdir(path)

    return path


def get_previous_timeline(video_id: str) -> Result[str, str]:
    """Get the previous timeline for a video

    Args:
        video_id (str): youtube video id

    Returns:
        Result[str, str]: The previous timeline or an no previous timeline message
    """
    timeline_path = os.path.join(get_audio_folder(video_id), "timeline.json")

    if not os.path.exists(timeline_path):
        return Result.fail("No previous timeline")

    with open(timeline_path, "r") as f:
        return Result.ok(f.read())
