declare type LanguageValueDTO = 'ru' | 'en' | 'us';
declare type LanguageLabelDTO = 'Русский' | 'English' | 'US';

declare interface LanguageDTO {
    value: LanguageValueDTO;
    label: LanguageLabelDTO;
    imgUrl: string;
}

declare interface LanguagesDTO extends Array<LanguageDTO> {}