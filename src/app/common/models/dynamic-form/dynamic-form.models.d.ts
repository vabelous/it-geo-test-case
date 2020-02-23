declare interface DynamicFormBlockDTO {
    id: number,
    title: string,
    parent_id: number,
    style: object
}

declare interface DynamicFormBlocksDTO extends Array<DynamicFormBlockDTO> {}

declare interface DynamicFormFieldDTO {
    id: number,
    title: string,
    block_id: number
}

declare interface DynamicFormFieldsDTO extends Array<DynamicFormFieldDTO> {}

declare interface DynamicFormDTO {
    blocks: DynamicFormBlocksDTO,
    fields: DynamicFormFieldsDTO
}