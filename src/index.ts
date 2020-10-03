import Axios, { AxiosInstance } from 'axios';
import { ResultFail, ResultOk } from 'node-result';

type StoreId = number;
type StoreAccessToken = string;

// Order
type OrderId = number;

export class Ecwid {
  private readonly storeId: StoreId;
  private readonly storeAccessToken: StoreAccessToken;
  private readonly instance: AxiosInstance;
  constructor(storeId: StoreId, storeAccessToken: StoreAccessToken, timeout: number = 1000, headers: object = {}) {
    this.storeId = storeId;
    this.storeAccessToken = storeAccessToken;
    const baseURL = `https://app.ecwid.com/api/v3/${this.storeId}`;
    const params = {
      token: this.storeAccessToken,
    };
    this.instance = Axios.create({ baseURL, timeout, headers, params });
  }

  async getOrder(id: OrderId) {
    try {
      const { data } = await this.instance.get(`/orders/${id}`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }
}
