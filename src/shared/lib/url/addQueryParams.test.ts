import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('Test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toEqual('?test=value');
    });
    test('Test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
        });
        expect(params).toEqual('?test=value&second=2');
    });
    test('Test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toEqual('?test=value');
    });
});
