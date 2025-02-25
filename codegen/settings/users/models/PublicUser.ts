/**
 * Users
 * Add, manage, and remove users from your account
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* A user
*/
export class PublicUser {
    /**
    * The user's unique ID
    */
    'id': string;
    /**
    * The user's email
    */
    'email': string;
    /**
    * The user's role
    */
    'roleId'?: string;
    /**
    * The user's primary team
    */
    'primaryTeamId'?: string;
    /**
    * The user's additional teams
    */
    'secondaryTeamIds'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryTeamId",
            "baseName": "primaryTeamId",
            "type": "string",
            "format": ""
        },
        {
            "name": "secondaryTeamIds",
            "baseName": "secondaryTeamIds",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicUser.attributeTypeMap;
    }

    public constructor() {
    }
}

