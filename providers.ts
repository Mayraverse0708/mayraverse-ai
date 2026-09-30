export interface TextProvider{generateText(input:{system:string;prompt:string}):Promise<string>}
export interface ImagePromptProvider{generateImagePrompt(input:string):Promise<string>}
export interface VideoPromptProvider{generateVideoPrompt(input:string):Promise<string>}
export interface VoiceoverProvider{generateVoiceover(input:{scene:string;durationSeconds:number;language:string}):Promise<string>}
// Add Gemini/OpenAI/other server-side adapters here. Keep API keys out of client code.
