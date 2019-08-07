import { HumanizePipe } from "./humanize.pipe";

describe('Pipe: Humanize', () => {
  let pipe: HumanizePipe;

  beforeEach(() => {
    pipe = new HumanizePipe();
  });

  it('should return an empty string if passed an empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should return Beta Client App if passed beta_client_app', () => {
    expect(pipe.transform('beta_client_app')).toBe('Beta Client App');
  });

  it('should return Test Client App if passed test_client_app', () => {
    expect(pipe.transform('test_client_app')).toBe('Test Client App');
  });

  it('should return Beta API Resource if passed beta_API_resource', () => {
    expect(pipe.transform('beta_API_resource')).toBe('Beta API Resource');
  });

  it('should return Test API Resource if passed test_API_resource', () => {
    expect(pipe.transform('test_API_resource')).toBe('Test API Resource');
  });

});
