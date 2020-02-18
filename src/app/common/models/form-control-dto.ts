import { AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn, FormArray, FormControl, FormGroup } from '@angular/forms';

export enum FormControlAutocomplete {
	Off='off',
	On='on',
}

export enum FormControlTypes {
	Text = 'text',
	Password = 'password',
}

export enum FormControlActions {
	Login = 'Вход в учетную запись',
	SalePoint = 'Выбор точки продаж',
	Search = 'Поиск абонента',
	ServicesWidget = 'Список сервисов',
	SearchReason = 'Поиск причин обращения',
	SearchCustomerStructure = 'Поиск по структуре пользователя',
	SaleContracts = 'Продажа контрактов',
}

export enum FormControlFields {
	Login = 'username',
	Password = 'password',
	Msisdn = 'msisdn',
	Passport = 'passport',
	DocSeries = 'docSeries',
	DocNumber = 'docNumber',
	IsRussianDocument = 'isRussianDocument',
	Contract = 'contract',
	Account = 'account',
	Sim = 'sim',
	LastName = 'lastName',
	FirstName = 'firstName',
	MiddleName = 'middleName',
	Birth = 'birth',
	Inn = 'inn',
	OrgName = 'orgName',
	IsArchive = 'isArchive',
	Region = 'region',
	SalePoint = 'salePoint',
	SearchProduct = 'searchProduct',
	SearchReason = 'searchReason',
	SearchCustomerStructure = 'SearchCustomerStructure',
	IsRangeSearch = 'isRangeSearch',
	SelectForNotSubType = 'selectForNotSubType',
	NotSubType = 'notSubType',
	LeftLimit = 'leftLimit',
	RightLimit = 'rightLimit',
	SimSelfInput = 'simSelfInput',
	SelectForCurrentContract = 'selectForCurrentContract',
	CurrentContract = 'currentContract',
	SelectForCurrentPa = 'selectForCurrentPa',
	CurrentPa = 'currentPa',
	SaleSimTable = 'saleSimTable',
	SelectedSimCount = 'selectedSimCount',
	CurrentServiceProvider = 'currentServiceProvider',
	SelectForIdentifyDocument = 'selectForIdentifyDocument',
	IdentifyDocument = 'identifyDocument',
	NoCustomerInfoMessage = 'noCustomerInfoMessage',
	SpecialNumberInfoMessage = 'specialNumberInfoMessage',
	TableDissimError = 'tableDissimError',
	SpDissimError = 'spDissimError',
	InterscectionInfoMessage = 'interscectionInfoMessage',
	SelectedSimTable = 'selectedSimTable',
	SelectedHlr = 'selectedHlr',
	SelectedHlrCode = 'selectedHlrCode',
	SelectedSeriveProvider = 'selectedSeriveProvider',
	SelectedServiceProviderCode = 'selectedServiceProviderCode',
	AvailableTariffPlansTable = 'availableTariffPlansTable',
	NewTariffPlan = 'newTariffPlan',
	ChangeNumberTable = 'changeNumberTable',
	SelectionNumberTable = 'selectionNumberTable',
	NewNumberFilter = 'newNumberFilter',
	NewNumberMask = 'newNumberMask',
	NumberNotChosenWarning = 'numberNotChosenWarning',
	NotAllNumbersChosenWarning = 'notAllNumbersChosenWarning',
	NoNumbersFoundWarning = 'noNumbersFoundWarning',
	SelectForNewNumberType = 'selectForNewNumberType',
	SelectedNewNumberType = 'selectedNewNumberType',
	ServicesTable = 'servicesTable',
	SelectForServicesTable = 'selectForServicesTable',
	NewInfoMessage = 'newInfoMessage',
	ChangeNumberTableResult = 'changeNumberTableResult',
	SelectForDeliveryType = 'selectForDeliveryType',
	DeliveryType = 'deliveryType',
	DeliveryAdress = 'deliveryAdress',
	TransferDisable = 'transferDisable',
	SimCount = 'simCount',
	ContractPrice = 'contractPrice',
	WhereToSale = 'whereToSale',
	DocumentsDeliveryAddress = 'documentsDeliveryAddress',
	Dity = 'city',
	Home = 'home',
	Housing = 'housing',
	Apartment = 'apartment',
	Hint = 'hint',
	SubscriberLegalCategory = 'subscriberLegalCategory',
	SelectForSubscriberLegalCategory = 'selectForSubscriberLegalCategory',
	SubscriberDocumentType = 'subscriberDocumentType',
	SelectForSubscriberDocumentType = 'selectForSubscriberDocumentType',
	SubscriberDocumentSeriesAndNumber = 'subscriberDocumentSeriesAndNumber',
	SubscriberDocumentSeries = 'subscriberDocumentSeries',
	SubscriberDocumentNumber = 'subscriberDocumentNumber',
	SubscriberBirthday = 'subscriberBirthday',
	SubscriberLastName = 'subscriberLastName',
	SubscriberFirstName = 'subscriberFirstName',
	SubscriberMiddleName = 'subscriberMiddleName',
	SubscriberGender = 'subscriberGender',
	SelectForSubscriberGender = 'selectForSubscriberGender',
	SubscriberNationality = 'subscriberNationality',
	SubscriberDocumentIssueCountry = 'subscriberDocumentIssueCountry',
	SelectForSubscriberCountry = 'selectForSubscriberCountry',
	SubscriberDocumentIssuerCode = 'subscriberDocumentIssuerCode',
	SubscriberDocumentIssueDate = 'subscriberDocumentIssueDate',
	SubscriberBirthPlace = 'subscriberBirthPlace',
	SubscriberDocumentIssuer = 'subscriberDocumentIssuer',
	SubscriberLengthOfStay = 'subscriberLengthOfStay',
	SubscriberAddress = 'subscriberAddress',
	SubscriberIndex = 'subscriberIndex',
	SubscriberRegion = 'subscriberRegion',
	SubscriberDistrict = 'subscriberDistrict',
	SubscriberCity = 'subscriberCity',
	SubscriberStreet = 'subscriberStreet',
	SubscriberHouse = 'subscriberHouse',
	SubscriberBlock = 'subscriberBlock',
	SubscriberFlat = 'subscriberFlat',
	SubscriberContactEmail = 'subscriberContactEmail',
	NumberOfSubscribers = 'numberOfSubscribers',
	CustomerTable = 'customerTable',
	SubscriberTable = 'subscriberTable',
	SelectedPassportId = 'selectedPassportId',
}

export enum FormControlProperties {
	disabled = 'disabled',
	validators = 'validators',
	mask = 'mask',
	defaultValue = 'defaultValue',
	placeholder = 'placeholder',
	label = 'label',
	required = 'required',
	type = 'type',
	autocomplete = 'autocomplete',
}

export enum DisabledPropertyTypes {
  disable = 'disable',
  enable = 'enable',
}

export type FormControlConfig = Map<string, Set<FormControlFields>>;

export type SetOfFormControlFields = Set<FormControlFields>;

export type FormContolFieldsWithFormContolList = Map<FormControlFields, ITGeoFormControl>;

export abstract class ITGeoAbstractControl extends AbstractControl {
	mask?: InputMask;
	placeholder?: string;
	label?: string;
	name?: string;
	required?: boolean;
	type?: FormControlTypes;
	autocomplete?: FormControlAutocomplete;
}

export class ITGeoFormControl extends FormControl {
	mask?: InputMask;
	placeholder?: string;
	label?: string;
	name?: string;
	required?: boolean;
	type?: FormControlTypes;
	autocomplete?: FormControlAutocomplete;
}

export class ITGeoFormArray extends FormArray {

	constructor(public controls: ITGeoAbstractControl[],
		validatorOrOpts?: ValidatorFn|ValidatorFn[]|AbstractControlOptions|null,
		asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null) {
		super(controls, validatorOrOpts, asyncValidator);
	}

	at(index: number): ITGeoAbstractControl { return this.controls[index]; }
	insert(index: number, control: ITGeoAbstractControl): void {
		super.insert(index, control);
	}
	setControl(index: number, control: ITGeoAbstractControl): void {
		super.setControl(index, control);
	}
}

export class ITGeoFormGroup extends FormGroup {
	constructor(public controls: {[key: string]: ITGeoAbstractControl},
		validatorOrOpts?: ValidatorFn|ValidatorFn[]|AbstractControlOptions|null,
		asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null) {
			super(controls, validatorOrOpts, asyncValidator);
		}
	registerControl(name: string, control: ITGeoAbstractControl): ITGeoAbstractControl {
		return super.registerControl(name, control);
	}
	addControl(name: string, control: ITGeoAbstractControl): void {
		super.addControl(name, control);
  }
	setControl(name: string, control: ITGeoAbstractControl): void {
		super.setControl(name, control);
  }
}
