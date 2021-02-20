import { AxiosRequestConfig } from 'axios';

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

  public isAttributeRangeValid(
    value: number,
    minimum: number,
    maximum: number
  ): boolean {
    return value > minimum && value <= maximum;
  }
}
