import * as settings from '../use-cases';

const getGeneralSettings = async (req, res, next) => {
  try {
    const generalSettings = await settings.getGeneralSettings();

    res.json(generalSettings);
  } catch (error) {
    next(error);
  }
};

export default getGeneralSettings;
