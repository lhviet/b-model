"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class is used to support UserActivity
 * BMActivity.list defines all types of activities of a UserActivity
 */
var BMActivity = /** @class */ (function () {
    function BMActivity() {
    }
    BMActivity.list = {
        // person
        add_person: {
            code: 'add_person',
            description: 'Users Create a new Person'
        },
        verify_person: {
            code: 'verify_person',
            description: 'Admin is Verifying a Person'
        },
        reject_person: {
            code: 'reject_person',
            description: 'Admin Rejects a Person'
        },
        approve_person: {
            code: 'approve_person',
            description: 'Admin Approves a Person'
        },
        disable_person: {
            code: 'disable_person',
            description: 'Admin Disables a Person'
        },
        // book
        add_book: {
            code: 'add_book',
            description: 'Users Create a new Book'
        },
        verify_book: {
            code: 'verify_book',
            description: 'Admin is Verifying a Book'
        },
        reject_book: {
            code: 'reject_book',
            description: 'Admin Rejects a Book'
        },
        approve_book: {
            code: 'approve_book',
            description: 'Admin Approves a Book'
        },
        disable_book: {
            code: 'disable_book',
            description: 'Admin Disables a Book'
        },
        // book-text
        add_booktext: {
            code: 'add_booktext',
            description: 'Users Create a new BookText'
        },
        // book-text chapter
        add_booktext_chapter: {
            code: 'add_booktext_chapter',
            description: 'Users Create a new BookText Chapter'
        },
        // info
        add_info: {
            code: 'add_info',
            description: 'Users Create a new Info'
        },
    };
    return BMActivity;
}());
exports.BMActivity = BMActivity;
//# sourceMappingURL=BMActivity.js.map