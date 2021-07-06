import Boom from '@hapi/boom';

import * as settings from '../model';
import { errorMsgs } from '../../../services/error-handler';

const updateSettings = async (data) => {
  const newSettings = await settings.updateGeneralSettings(data);

  if (!newSettings) {
    throw Boom.badData(errorMsgs['VALIDATION_ERROR']);
  }

  return newSettings;
};

export default updateSettings;
