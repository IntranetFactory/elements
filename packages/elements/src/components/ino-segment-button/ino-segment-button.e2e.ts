import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SEGMENT_BUTTON = '<ino-segment-button value="1"></ino-segment-button>'
const INO_SEGMENT_BUTTON_CHECKED = '<ino-segment-button checked></ino-segment-button>'
const INO_SEGMENT_BUTTON_DISABLED = '<ino-segment-button disabled></ino-segment-button>'

describe('ino-segment-button', () => {

  it('should render with default values', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_BUTTON);
    const button = await page.find('ino-segment-button');
    expect(button).toBeDefined();
  });

  it('should render unchecked', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_BUTTON);
    const button = await page.find('ino-segment-button');
    const isChecked = await button.getProperty('checked');
    expect(isChecked).toBeFalsy();
  });

  it('should render checked', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_BUTTON_CHECKED);
    const button = await page.find('ino-segment-button');
    const isChecked = await button.getProperty('checked');
    expect(isChecked).toBeTruthy();
  });

  it('should render disabled', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_BUTTON_DISABLED);
    const button = await page.find('ino-segment-button');
    const isChecked = await button.getProperty('disabled');
    expect(isChecked).toBeTruthy();
  });

  it('should emit a checkedChange event upon clicking the button', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_BUTTON);
    const button = await page.find('ino-segment-button');
    const clickEl = await page.spyOnEvent('checkedChange');

    await button.click();
    await page.waitForChanges();

    expect(clickEl).toHaveReceivedEvent();
    expect(clickEl).toHaveReceivedEventDetail(true);
  });

  it('should not emit a checkedChange event if the button is disabled', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_BUTTON_DISABLED);
    const button = await page.find('ino-segment-button');
    const clickEl = await page.spyOnEvent('clickEl');

    await button.click();
    await page.waitForChanges();

    expect(clickEl).not.toHaveReceivedEvent();
  });

  it('should not emit a clickEl event if the button is checked', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_BUTTON_CHECKED);
    const button = await page.find('ino-segment-button');
    const clickEl = await page.spyOnEvent('clickEl');

    await button.click();
    await page.waitForChanges();

    expect(clickEl).not.toHaveReceivedEvent();
  });

});
