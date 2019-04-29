export module MPTypes {
  // Enum types
  // Gender
  export enum Gender {
    NA = 1,
    Male,
    Female,
    LGBT,
  }

  // Pronunciation locals
  export enum Local {
    US = 1,
    GB,
    AU,
  }

  // Pronunciation system
  export enum PronunciationSystem {
    IPA = 1,
  }

  // General status
  export enum Status {
    Pending = 1,
    Processing,
    Rejected,
    Active,
    Disabled,
  }

  // User 3rd party authorization provider
  export enum UserProvider {
    Local = 1,
    Google,
    Facebook,
  }

  // User roles
  export enum UserRole {
    User = 1,
    Admin,
    SuperAdmin,
  }

  // Dictionary word class
  export enum WordClass {
    all = 1,
    noun,
    verb,
    adjective,
    adverb,
    pronoun,
    abbreviation,
    interjection,
    conjunction,
    prefix,
    preposition,
    article,  // DEFINITE AND INDEFINITE ARTICLES: a, an, the
    unclassified,
  }
}
