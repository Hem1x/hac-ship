import { endpointEnum } from './api.types';

class Api {
  baseURL;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get<T>(endpoint: endpointEnum): Promise<T> {
    const response = await fetch(`${this.baseURL}/${endpoint}/`);
    return await response.json();
  }

  async getWithParams<T>(
    endpoint: endpointEnum,
    params: Record<string, string>,
  ): Promise<T> {
    const queryParams = new URLSearchParams(params);
    const response = await fetch(
      `${this.baseURL}/${endpoint}/?${queryParams.toString()}`,
    );
    return await response.json();
  }

  async send<T, G>(endpoint: endpointEnum, data: G): Promise<T> {
    const response = await fetch(`${this.baseURL}/${endpoint}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async downloadFile(
    endpoint: endpointEnum,
    filenameWithExtention: string,
  ): Promise<void> {
    const response = await fetch(`${this.baseURL}/${endpoint}/`);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(new Blob([blob]));

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filenameWithExtention);

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
}

const apiBaseURL = 'https://sanekteam.ru';
export const api = new Api(apiBaseURL);
