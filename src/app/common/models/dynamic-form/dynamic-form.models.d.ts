declare interface DynamicFormModelBlockDTO {
    key: string;
    block_id: number;
    block_title: string;
    block_description: string;
    fields: DynamicFormModelFieldsDTO;
    children: Array<DynamicFormModelBlockDTO>;
    style? : object;
}

declare interface DynamicFormModelBlocksDTO extends Array<DynamicFormModelBlockDTO> {}

declare interface DynamicFormModelFieldDTO {
    key: string;
    field_id: number;
    protractorId? : string;    
    fieldType? : DynamicFormFieldTypeDTO;
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
    style?: object;
}

declare interface DynamicFormModelFieldsDTO extends Array<DynamicFormModelFieldDTO> {}

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
    style?: object;
}

declare interface DynamicFormFieldsDTO extends Array<DynamicFormFieldDTO> {}

declare interface DynamicFormDTO {
    model : DynamicFormModelBlocksDTO;
    blocks : DynamicFormBlocksDTO;
    fields : DynamicFormFieldsDTO;
}