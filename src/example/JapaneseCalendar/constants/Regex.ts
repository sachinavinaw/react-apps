const REGEX = {
  NOT_ALPHABET_NOR_NUMBERS: /[^a-zA-Z0-9]/gi,
  NOT_NUMBERS: /[^0-9]/gi,
  NOT_NUMBERS_WITH_DECIMAL_POINT: /[^0-9.]/gi,
  NOT_HALF_LENGTH_KANA: /[^ｦ-ﾟ]+$/,
  HALF_WIDTH_KANA: /[ｦ-ﾟ]+$/,
  NOT_FULL_LENGTH_KANA: /[^ァ-ンヴー]+$/,
  NOT_ALPHABET_NOR_NUMBERS_FULL_LENGTH_KANA_HALF_LENGTH_KANA: /[^a-zA-Z0-9ｦ-ﾟァ-ンヴー]/gi,
  ALPHABET_OR_NUMBERS: /^[a-zA-Z0-9]*$/,
  NOT_NUMBERS_AND_SPECIAL_CHARS: /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|'"`]/g,
  ALPHANUMERIC_OR_EMPTY: /^([a-zA-Z0-9]*|)$/,
  NUMBERS_OR_EMPTY: /^\d*$/g,
  VALID_MONTH_OR_EMPTY: /^(?!0$)([1-9]|1[0-2])?$/,
  VALID_DAY_OR_EMPTY: /^(?:(?:[1-9]|[1-2][\d]|3[0-1])|\d)?$/,
};

export default REGEX;
