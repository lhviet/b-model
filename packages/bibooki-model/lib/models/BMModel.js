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
    BMModel.initUser = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            username: '',
            email: '',
            password: '',
            status: BMStatus_1.BMStatus.list.general.verifying.code,
            role: BMRole_1.BMRole.user_role.user.code,
            updated_at: NOW,
            created_at: NOW,
        };
    };
    BMModel.initUserBasic = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
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
    };
    BMModel.initPerson = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            contributor_keyid: '',
            custom_url: '',
            native_name: '',
            english_name: undefined,
            alternative_names: { en: [] },
            language: 'en',
            country: 'U_N',
            gender: BMGender_1.BMGender.list.noanswer.code,
            year_of_birth: undefined,
            year_of_death: undefined,
            description: undefined,
            tags: undefined,
            links: [''],
            images: [BMModel.DEFAULT_IMG.PERSON],
            status: BMStatus_1.BMStatus.list.general.pending.code,
            view_count: undefined,
            rate_avg: undefined,
            rate_count: 0,
            updated_at: NOW,
            created_at: NOW,
        };
    };
    BMModel.initBook = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
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
    };
    BMModel.initBookText = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
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
    };
    BMModel.initBookTextChapter = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
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
    };
    BMModel.initQuote = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
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
    };
    BMModel.initSlider = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            language: 'en',
            content: '',
            cover_url: BMModel.DEFAULT_IMG.COVER,
            link: '',
            tags: '',
            updated_at: NOW,
            created_at: NOW,
        };
    };
    BMModel.initInfo = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            contributor_keyid: '',
            custom_url: '',
            language: 'en',
            title: '',
            description: '',
            content: '',
            cover_url: '',
            updated_at: NOW,
            created_at: NOW,
            tags: '' // 512 varchars
        };
    };
    BMModel.initUserFriendship = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            user_keyid_1: '',
            user_keyid_2: '',
            status: BMStatus_1.BMStatus.list.friendship_status.pending.code,
            created_at: NOW,
        };
    };
    BMModel.initUserActivity = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            sbj: '',
            verb: '',
            obj: '',
            tags: '',
            created_at: NOW,
        };
    };
    BMModel.initUserActivityExtracted = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            sbj: { keyid: '', username: '', displayname: '', avatar_url: '' },
            obj: { keyid: '', custom_url: '', cover_url: '', title: '', description: '' },
            type: '',
            obj_url: '',
            description: '',
            created_at: NOW
        };
    };
    BMModel.initConfig = function () {
        return {
            name: '',
            config_value: '',
            description: '',
        };
    };
    BMModel.initRatePerson = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            person_keyid: undefined,
            user_keyid: undefined,
            rate: 3,
            updated_at: NOW,
            created_at: NOW,
        };
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
    return BMModel;
}());
exports.BMModel = BMModel;
//# sourceMappingURL=BMModel.js.map