"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var BMStatus_1 = require("./BMStatus");
var BMRole_1 = require("./BMRole");
var BMGender_1 = require("./BMGender");
var BMBookType_1 = require("./BMBookType");
var BMModel = /** @class */ (function () {
    function BMModel() {
    }
    // retrieve the correct key using in SQL in PostgreSQL in backend
    BMModel.getConditionKey = function (key) {
        var conditionKey = key;
        switch (key) {
            case BMModel.CONDITION_KEY.IN_ARRAY:
                conditionKey = ' IN ';
                break;
            case BMModel.CONDITION_KEY.NOT_IN_ARRAY:
                conditionKey = ' NOT IN ';
                break;
            default:
                break;
        }
        return conditionKey;
    };
    BMModel.initUser = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            username: '',
            email: '',
            password: '',
            status: BMStatus_1.BMStatus.list.general.verifying.code,
            role: BMRole_1.BMRole.user_role.user.code,
            updated_at: NOW,
            created_at: NOW,
        };
        return value;
    };
    BMModel.initUserBasic = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            update_from_provider: BMModel.AUTH_PROVIDER.LOCAL,
            displayname: '',
            firstname: '',
            lastname: '',
            middlename: '',
            avatar_url: BMModel.DEFAULT_IMG.PERSON,
            cover_url: BMModel.DEFAULT_IMG.COVER,
            home_url: '',
            gender: BMGender_1.BMGender.list.noanswer.code,
            birthday: '',
            language: 'en',
            country: '',
            timezone: '',
            quote: '',
            updated_at: NOW,
        };
        return value;
    };
    BMModel.initPerson = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            contributor_keyid: '',
            custom_url: '',
            native_name: '',
            english_name: '',
            alternative_names: { en: [] },
            language: 'en',
            country: 'U_N',
            gender: BMGender_1.BMGender.list.noanswer.code,
            year_of_birth: 0,
            year_of_death: 0,
            description: '',
            tags: '',
            links: [''],
            images: [BMModel.DEFAULT_IMG.PERSON],
            status: BMStatus_1.BMStatus.list.general.pending.code,
            updated_at: NOW,
            created_at: NOW,
        };
        return value;
    };
    BMModel.initBook = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            contributor_keyid: '',
            custom_url: '',
            native_name: '',
            english_name: '',
            alternative_names: { en: [] },
            language: 'en',
            countries: '',
            type: BMBookType_1.BMBookType.list.text.code,
            year_of_start: 0,
            year_of_end: 0,
            author_info: '',
            links: [''],
            images: [BMModel.DEFAULT_IMG.BOOK],
            description: '',
            tags: '',
            status: BMStatus_1.BMStatus.list.general.pending.code,
            updated_at: NOW,
            created_at: NOW
        };
        return value;
    };
    BMModel.initBookText = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            contributor_keyid: '',
            book_keyid: '',
            custom_url: '',
            language: 'en',
            native_name: '',
            alternative_names: { en: [] },
            author_info: '',
            book_info: '',
            description: '',
            year: null,
            status: BMStatus_1.BMStatus.list.sharing_status.public_share.code,
            links: [''],
            images: [BMModel.DEFAULT_IMG.BOOK],
            files: [''],
            isbn: '',
            tags: '',
            updated_at: NOW,
            created_at: NOW,
        };
        return value;
    };
    BMModel.initBookTextChapter = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            booktext_keyid: '',
            custom_url: '',
            chapter_order: 1,
            part_name: '',
            chapter_name: '',
            description: '',
            content: '',
            links: [''],
            image_location: '',
            updated_at: NOW,
            created_at: NOW,
        };
        return value;
    };
    BMModel.initQuote = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            person_keyid: '',
            book_keyid: '',
            person_info: '',
            book_info: '',
            language: 'en',
            content: '',
            cover_url: BMModel.DEFAULT_IMG.COVER,
            tags: '',
            updated_at: NOW,
            created_at: NOW,
        };
        return value;
    };
    BMModel.initSlider = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            language: 'en',
            content: '',
            cover_url: BMModel.DEFAULT_IMG.COVER,
            link: '',
            tags: '',
            updated_at: NOW,
            created_at: NOW,
        };
        return value;
    };
    BMModel.initInfo = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            contributor_keyid: '',
            custom_url: '',
            language: 'en',
            title: '',
            description: '',
            content: '',
            updated_at: NOW,
            created_at: NOW,
        };
        return value;
    };
    BMModel.initUserFriendship = function () {
        var NOW = parseInt(moment().format('X'), 10);
        var value = {
            user_keyid_1: '',
            user_keyid_2: '',
            status: BMStatus_1.BMStatus.list.friendship_status.pending.code,
            created_at: NOW,
        };
        return value;
    };
    BMModel.initConfig = function () {
        var value = {
            name: '',
            config_value: '',
            description: '',
        };
        return value;
    };
    /**
     * parse array string in format "[abc, def, xyz,...]"
     * @param {string} input
     * @returns {any[]}
     */
    BMModel.parseArray = function (input) {
        var result = [input];
        try {
            var tempStr = input.replace(/{/g, '[');
            tempStr = tempStr.replace(/}/g, ']');
            result = JSON.parse(tempStr);
        }
        catch (ex) {
            console.error('parseArray ERROR = ' + JSON.stringify(ex));
            console.error('parseArray ERROR input = ' + JSON.stringify(input));
            // throw ex;
        }
        return result;
    };
    BMModel.DEFAULT_IMG = {
        COVER: '/images/default-cover.png',
        PERSON: '/images/default-person.png',
        BOOK: '/images/default-book.png',
    };
    BMModel.AUTH_PROVIDER = {
        LOCAL: 'local',
        FACEBOOK: 'facebook',
        GOOGLE: 'google'
    };
    BMModel.SUPPORT_ACTION = {
        remindUsername: 'remind_username',
        emailActivation: 'email_activation',
        resetPassword: 'reset_password'
    };
    // condition key using for JSON condition format in request to convert to SQL in PostgreSQL in backend server
    BMModel.CONDITION_KEY = {
        IN_ARRAY: 'in_array',
        NOT_IN_ARRAY: 'not_in_array',
    };
    return BMModel;
}());
exports.BMModel = BMModel;
//# sourceMappingURL=BMModel.js.map