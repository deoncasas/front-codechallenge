import reportWebVitals from './reportWebVitals';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

jest.mock('web-vitals');

describe('reportWebVitals', () => {
  it('calls the web-vitals metrics functions', async () => {
    const mockReportHandler = jest.fn();
    
    reportWebVitals(mockReportHandler);
  });

  it('does not call the web-vitals metrics functions if no function is passed', async () => {
    reportWebVitals();

    expect(getCLS).not.toHaveBeenCalled();
    expect(getFID).not.toHaveBeenCalled();
    expect(getFCP).not.toHaveBeenCalled();
    expect(getLCP).not.toHaveBeenCalled();
    expect(getTTFB).not.toHaveBeenCalled();
  });
});