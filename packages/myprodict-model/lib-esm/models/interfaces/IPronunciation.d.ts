import { EPLocal, EPSystem, EWClass } from '../enums';
export interface IPronunciation {
    keyid: string;
    value: IPronunciationValue;
}
export interface IPronunciationValue {
    word_keyid: string;
    word_class: EWClass;
    system: EPSystem;
    local: EPLocal;
    transcript: string;
    description: string;
    sound_url: string;
    created_at: number;
    updated_at: number;
}
