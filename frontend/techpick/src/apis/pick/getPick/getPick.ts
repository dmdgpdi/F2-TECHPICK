import { HTTPError } from 'ky';
import { apiClient, returnErrorFromHTTPError } from '@/apis';
import { API_URLS } from '@/apis/apiConstants';
import type {
  GetLinkOgTagDataResponseType,
  GetPickByUrlResponseType,
  PickInfoType,
} from '@/types';

export const getPick = async (pickId: number): Promise<PickInfoType> => {
  try {
    const response = await apiClient.get<PickInfoType>(`picks/${pickId}`);
    const data = await response.json();

    return data;
  } catch (httpError) {
    if (httpError instanceof HTTPError) {
      const error = await returnErrorFromHTTPError(httpError);
      throw error;
    }
    throw httpError;
  }
};

export const fetchPickByUrl = async (url: string) => {
  try {
    const response = await apiClient.get<GetPickByUrlResponseType>(
      API_URLS.GET_PICK_BY_URL(encodeURIComponent(url))
    );
    return await response.json();
  } catch (httpError) {
    return null;
  }
};

export const getLinkOgData = async (url: string) => {
  try {
    const response = await apiClient.get<GetLinkOgTagDataResponseType>(
      API_URLS.GET_LINK_OG_DATA(encodeURIComponent(url))
    );

    const data = await response.json();
    return data;
  } catch (httpError) {
    if (httpError instanceof HTTPError) {
      const error = await returnErrorFromHTTPError(httpError);
      throw error;
    }
    throw httpError;
  }
};
