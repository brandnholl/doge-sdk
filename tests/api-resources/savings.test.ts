// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doge from '@departmentofgovernmentefficiency/sdk';

const client = new Doge({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource savings', () => {
  // skipped: tests are disabled for the time being
  test.skip('listContracts', async () => {
    const responsePromise = client.savings.listContracts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listContracts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.savings.listContracts(
        { page: 1, per_page: 1, sort_by: 'savings', sort_order: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doge.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listGrants', async () => {
    const responsePromise = client.savings.listGrants();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listGrants: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.savings.listGrants(
        { page: 1, per_page: 1, sort_by: 'savings', sort_order: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doge.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listLeases', async () => {
    const responsePromise = client.savings.listLeases();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listLeases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.savings.listLeases(
        { page: 1, per_page: 1, sort_by: 'savings', sort_order: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doge.NotFoundError);
  });
});
