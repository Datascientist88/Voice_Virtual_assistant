import React from "react";
import styles from "@/styles/VoiceAssistant.module.css";
import useAudioBarsVisualizer, {
  UseAudioBarsVisualizerProps,
  AUDIO_BARS_CANVAS_ID,
} from "./useAudioBarsVisualizer";

const AudioBarsVisualizer = (props: UseAudioBarsVisualizerProps) => {
  const audioFileUrl = props;
  useAudioBarsVisualizer(props);
  if (!audioFileUrl) {
    return null;
  }
  return (
    
      <canvas id={AUDIO_BARS_CANVAS_ID}
      className={styles["voice-assistant-audio-visualizer-canvas"]}
      />
    
  );
};

export default AudioBarsVisualizer;
