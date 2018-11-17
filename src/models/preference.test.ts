import Days from '../constants/days';
import Preference from './preference';

it('sets the preference type to next available', async () => {
  const preference = new Preference;

  expect(preference.next()).toHaveProperty('attributes', {
    day: null,
    end: null,
    start: null,
    type: Preference.NEXT_AVAILABLE,
  });
});

it('sets the preference type to next available', async () => {
  const end = '1:00 PM';
  const start = '9:00 AM';
  const preference = new Preference;

  expect(preference.on(Days.MONDAY).between(start, end)).toHaveProperty('attributes', {
    day: Days.MONDAY,
    end,
    start,
    type: Preference.CERTAIN_DAYS,
  });
});

it('can set any of the available days', async () => {
  const days = [
    Days.SUNDAY,
    Days.MONDAY,
    Days.TUESDAY,
    Days.WEDNESDAY,
    Days.THURSDAY,
    Days.FRIDAY,
    Days.SATURDAY,
  ];

  days.forEach(day => {
    const preference = new Preference;

    expect(preference.on(day)).toHaveProperty('attributes', {
      day,
      end: null,
      start: null,
      type: Preference.CERTAIN_DAYS,
    });
  });
});
