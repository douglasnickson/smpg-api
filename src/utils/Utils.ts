import { AxiosRequestConfig } from 'axios';
import { URLSearchParams } from 'url';

export class Utils {
  public getParamsWithValue(
    originalParams: AxiosRequestConfig
  ): AxiosRequestConfig {
    const { params } = originalParams;
    const result = { params: {} };

    for (const index in params) {
      if (params[index] !== undefined && params[index] !== '') {
        Object.assign(result.params, { [index]: params[index] });
      }
    }
    return result;
  }

  public getUrlParamsWithValue(
    originalParams: URLSearchParams
  ): URLSearchParams {
    const params = new URLSearchParams();
    originalParams.forEach((value, key) => {
      if (value !== undefined && value !== 'undefined' && value !== '') {
        params.append(key, value);
      }
    });
    return params;
  }

  public isAttributeRangeValid(
    value: number,
    minimum: number,
    maximum: number
  ): boolean {
    return value > minimum && value <= maximum;
  }
}
