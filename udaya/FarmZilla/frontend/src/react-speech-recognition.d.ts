declare module 'react-speech-recognition' {
    export interface SpeechRecognitionOptions {
      continuous?: boolean;
      language?: string;
    }
  
    export interface UseSpeechRecognitionResult {
      transcript: string;
      listening: boolean;
      resetTranscript: () => void;
      browserSupportsSpeechRecognition: boolean;
    }
  
    export function useSpeechRecognition(): UseSpeechRecognitionResult;
    export function startListening(options?: SpeechRecognitionOptions): void;
    export function stopListening(): void;
  }
  