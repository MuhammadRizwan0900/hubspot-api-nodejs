/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* A serverless function associated with this custom workflow action.
*/
export class ActionFunction {
    /**
    * The function source code.
    */
    'functionSource': string;
    /**
    * The type of function. This determines when the function will be called.
    */
    'functionType': ActionFunctionFunctionTypeEnum;
    /**
    * The ID qualifier for the function. This is used to specify which input field a function is associated with for `PRE_FETCH_OPTIONS` and `POST_FETCH_OPTIONS` function types.
    */
    'id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "functionSource",
            "baseName": "functionSource",
            "type": "string",
            "format": ""
        },
        {
            "name": "functionType",
            "baseName": "functionType",
            "type": "ActionFunctionFunctionTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActionFunction.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ActionFunctionFunctionTypeEnum = "PRE_ACTION_EXECUTION" | "PRE_FETCH_OPTIONS" | "POST_FETCH_OPTIONS" ;

