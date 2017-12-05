export class Attribute {
  attributeTypeId: string;
  attributeDataTypeKey: QIQOAttributeDataType;
  attributeDefaultFormat: string;
  attributeTypeCode: string;
  attributeTypeCategory: string;
  attributeTypeName: string;
  attributeTypeDesc: string;
}

export enum QIQOAttributeDataType {
  number = 1,
  string = 2,
  money = 3
}
