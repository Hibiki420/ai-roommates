// VoiceInput.tsx
export {}; // これを追加してモジュールとして扱う
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}