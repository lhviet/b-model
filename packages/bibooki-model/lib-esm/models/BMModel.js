import * as moment from 'moment';
import { BMStatus } from './BMStatus';
import { BMRole } from './BMRole';
import { BMGender } from './BMGender';
import { BMBookType } from './BMBookType';
var BMModel = /** @class */ (function () {
    function BMModel() {
    }
    BMModel.initUser = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            username: '',
            email: '',
            password: '',
            status: BMStatus.list.general.verifying.code,
            role: BMRole.user_role.user.code,
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
            gender: BMGender.list.noanswer.code,
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
            gender: BMGender.list.noanswer.code,
            year_of_birth: undefined,
            year_of_death: undefined,
            description: undefined,
            tags: undefined,
            links: [''],
            images: [BMModel.DEFAULT_IMG.PERSON],
            status: BMStatus.list.general.pending.code,
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
            type: BMBookType.list.text.code,
            year_of_start: 0,
            year_of_end: 0,
            author_info: '',
            links: [''],
            images: [BMModel.DEFAULT_IMG.BOOK],
            description: '',
            tags: '',
            status: BMStatus.list.general.pending.code,
            view_count: undefined,
            rate_avg: undefined,
            rate_count: 0,
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
            status: BMStatus.list.sharing_status.public_share.code,
            links: [''],
            images: [BMModel.DEFAULT_IMG.BOOK],
            files: [''],
            isbn: '',
            tags: '',
            view_count: undefined,
            rate_avg: undefined,
            rate_count: 0,
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
            tags: '',
            view_count: undefined,
            rate_avg: undefined,
            rate_count: 0,
            updated_at: NOW,
            created_at: NOW,
        };
    };
    BMModel.initUserFriendship = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            user_keyid_1: '',
            user_keyid_2: '',
            status: BMStatus.list.friendship_status.pending.code,
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
    BMModel.initRateBook = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            book_keyid: undefined,
            user_keyid: undefined,
            rate: 3,
            updated_at: NOW,
            created_at: NOW,
        };
    };
    BMModel.initRateBooktext = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            booktext_keyid: undefined,
            user_keyid: undefined,
            rate: 3,
            updated_at: NOW,
            created_at: NOW,
        };
    };
    BMModel.initRateInfo = function () {
        var NOW = parseInt(moment().format('X'), 10);
        return {
            info_keyid: undefined,
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
export { BMModel };
//# sourceMappingURL=BMModel.js.map