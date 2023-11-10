import { emailTemplate } from '../../src/foundation/email-template';
describe('foundation/email-template', () => {
  it('email template should contain a greeting', () => {
    expect(emailTemplate).toContain('Hi');
  });

  it('email template should contain {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toContain('{{name}}');
    expect(emailTemplate).toContain('{{orderId}}');
  });
});
