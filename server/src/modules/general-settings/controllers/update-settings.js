import * as settings from '../use-cases';
import { validateSettings } from '../utils';
import { timeFormatter } from '../../../helpers';

const updateGeneralSettings = async (req, res, next) => {
  const { daysOff, openTime, workingHours, appointmentDurationInMinutes } =
    req.body;
  try {
    await validateSettings({
      daysOff,
      openTime: timeFormatter(openTime),
      workingHours,
      appointmentDurationInMinutes,
    });

    const generalSettings = await settings.updateSettings({
      daysOff,
      openTime,
      workingHours,
      appointmentDurationInMinutes,
    });

    res.json(generalSettings);
  } catch (error) {
    next(error);
  }
};

export default updateGeneralSettings;
