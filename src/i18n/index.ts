import I18n from 'i18n-js';
import en from './locales/english';
import ar from './locales/arabic';

I18n.fallbacks = true;
I18n.translations = { en, ar };

const Trans: (string: string, variables?: {} | undefined) => string = (string, variables) => I18n.t(string, variables);

export { Trans };

export default I18n;
