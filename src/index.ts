import Axios, { AxiosInstance } from 'axios';
import { ResultFail, ResultOk, ResultFAIL, ResultOK } from 'node-result';

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

  /**
   * Get store profile.
   */
  async getProfile() {
    try {
      const { data } = await this.instance.get('/profile');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Get order by order_id.
   * @param {OrderId} id - order_id.
   */
  async getOrder(id: OrderId) {
    try {
      const { data } = await this.instance.get(`/orders/${id}`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Get all payments options.
   */
  async getPaymentOptions(): Promise<ResultOK<PaymentOption[]> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.get('/profile/paymentOptions');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }
}
