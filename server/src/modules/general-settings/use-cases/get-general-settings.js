import * as settings from '../model';

const getGeneralSettings = async () => settings.findGeneralSettings();

export default getGeneralSettings;
