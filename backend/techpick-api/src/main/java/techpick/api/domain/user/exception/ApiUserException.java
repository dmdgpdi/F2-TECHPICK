package techpick.api.domain.user.exception;

import techpick.core.exception.base.ApiErrorCode;
import techpick.core.exception.base.ApiException;

public class ApiUserException extends ApiException {

	private ApiUserException(ApiErrorCode errorCode) {
		super(errorCode);
	}

	/**
	 * TODO: Implement static factory method
	 * */
	public static ApiUserException USER_NOT_FOUND() {
		return new ApiUserException(ApiUserErrorCode.USER_NOT_FOUND);
	}
}
