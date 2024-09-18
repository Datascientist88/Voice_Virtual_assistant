import os
import requests
from utils.file_utils import create_unique_tmp_file
from project_config import setup_app_config

def get_api_key():
    return os.getenv[""]

def convert_text_to_audio(text_content: str):
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "x-api-key": get_api_key()
    }

    print("headers>>", headers)

    data = {
        "text": text_content,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.5
        }
    }

    voice_id = "JBFqnCBsd6RMkjVDRZzb"
    CHUNK_SIZE=1024

    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"

    response = requests.post(url, data=data, headers=headers)

    output_file_path = create_unique_tmp_file("ai_voice_output.mp3")

    with open(output_file_path, "ab") as f:
        for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
            f.write(chunk)

    return output_file_path
