import { HTTPError } from 'ky';

export const handleHTTPError = async (error: HTTPError): Promise<never> => {
  const errorData = await error.response.json<ApiErrorBody>();

  if (errorData) {
    throw new Error(`${errorData.message}`);
  }

  throw new Error(`알 수 없는 에러: ${error.response.statusText}`);
};

export const returnErrorFromHTTPError = async (
  error: HTTPError
): Promise<Error> => {
  const errorData = await error.response.json<ApiErrorBody>();

  if (errorData) {
    return new Error(`${errorData.message}`);
  }

  return new Error(`알 수 없는 에러: ${error.response.statusText}`);
};

export type ApiErrorBody = {
  code: string;
  message: string;
};

export const ERROR_MESSAGE_JSON: { [key: string]: string } = {
  'TG-001': '중복된 태그가 존재합니다.',
  'TG-002': '유효하지 않는 태그 이름입니다.',
  'PK-001': '북마크가 실패했습니다! 이미 존재하는 픽입니다!',
  'LI-002': '이미 존재하는 링크입니다.',
  'PK-005': '제목이 허용된 최대길이를 초과했습니다.',
  'LI-003': '이 링크는 넣을 수 없습니다. ㅠㅠ',
};
