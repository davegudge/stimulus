import { Controller } from "../../controller"
import { ValueDefinitionMap, ValueDescriptorMap } from "../../value_properties"

export class DefaultValueController extends Controller {
  static values: ValueDefinitionMap = {
    defaultBoolean: false,
    defaultBooleanTrue: { type: Boolean, default: true },
    defaultBooleanOverride: true,

    defaultString: "",
    defaultStringHello: { type: String, default: "Hello" },
    defaultStringOverride: "Override me",

    defaultNumber: 0,
    defaultNumberThousand: { type: Number, default: 1000 },
    defaultNumberOverride: 9999,

    defaultArray: [],
    defaultArrayFilled: { type: Array, default: [1, 2, 3] },
    defaultArrayOverride: [9, 9, 9],

    defaultObject: {},
    defaultObjectPerson: { type: Object, default: { name: "David" } },
    defaultObjectOverride: { override: "me" }
  }

  valueDescriptorMap!: ValueDescriptorMap

  defaultBooleanValue!: boolean
  hasDefaultBooleanValue!: boolean
  defaultBooleanTrueValue!: boolean
  hasDefaultBooleanTrueValue!: boolean
  defaultBooleanOverrideValue!: boolean
  hasDefaultBooleanOverrideValue!: boolean

  defaultStringValue!: string
  hasDefaultStringValue!: boolean
  defaultStringHelloValue!: string
  hasDefaultStringHelloValue!: boolean
  defaultStringOverrideValue!: string
  hasDefaultStringOverrideValue!: boolean

  defaultNumberValue!: number
  hasDefaultNumberValue!: boolean
  defaultNumberThousandValue!: number
  hasDefaultNumberThousandValue!: boolean
  defaultNumberOverrideValue!: number
  hasDefaultNumberOverrideValue!: boolean

  defaultArrayValue!: any[]
  hasDefaultArrayValue!: boolean
  defaultArrayFilledValue!: { [key: string]: any }
  hasDefaultArrayFilledValue!: boolean
  defaultArrayOverrideValue!: { [key: string]: any }
  hasDefaultArrayOverrideValue!: boolean

  defaultObjectValue!: object
  hasDefaultObjectValue!: boolean
  defaultObjectPersonValue!: object
  hasDefaultObjectPersonValue!: boolean
  defaultObjectOverrideValue!: object
  hasDefaultObjectOverrideValue!: boolean
}
