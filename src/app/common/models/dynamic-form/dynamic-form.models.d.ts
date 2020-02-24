declare interface DynamicFormModelBlockDTO {
    id: number;
    block_id: number;
    block_title: string;
    block_description: string;
    fields: Array<number>;
    children: Array<DynamicFormModelBlockDTO>;  
}

declare interface DynamicFormBlockDTO {
    id: number,
    style: object,
}

declare interface DynamicFormBlocksDTO extends Array<DynamicFormBlockDTO> {}

declare type DynamicFormFieldDisabledDTO = 'disable' | 'enable';

declare type DynamicFormFieldAutocompleteDTO = 'off' | 'on';

declare type DynamicFormFieldTypeDTO = 'input' | 'checkbox' | 'radio' | 'select';

declare type DynamicFormInputTypeDTO = 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week';

declare interface DynamicFormSelectOptionDTO {
    key : string;
    value : string;
} 

declare interface DynamicFormSelectOptionsDTO extends Array<DynamicFormSelectOptionDTO> {}

declare interface DynamicFormFieldDTO {
    id : number;
    fieldType : DynamicFormFieldTypeDTO;
    inputType? : DynamicFormInputTypeDTO;
    label? : string;
    disabled? : DynamicFormFieldDisabledDTO;
    autocomplete? : DynamicFormFieldAutocompleteDTO;
    defaultValue? : string | number | boolean;
    options? : DynamicFormSelectOptionsDTO;
    placeholder? : string;
    tooltip? : string;
    required? : boolean;
    mask? : string;
    validators? : Array<string>;
    style?: string;
}

declare interface DynamicFormFieldsDTO extends Array<DynamicFormFieldDTO> {}

declare interface DynamicFormDTO {
    model : DynamicFormModelBlockDTO;
    blocks : DynamicFormBlocksDTO;
    fields : DynamicFormFieldsDTO;
}