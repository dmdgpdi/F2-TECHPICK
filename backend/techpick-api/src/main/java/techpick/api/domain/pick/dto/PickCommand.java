package techpick.api.domain.pick.dto;

import java.util.List;

import techpick.api.domain.link.dto.LinkInfo;

public class PickCommand {

	public record Read(Long userId, Long id) {
	}

	public record ReadList(Long userId, List<Long> folderIdList) {
	}

	public record Search(Long userId, List<Long> folderIdList, List<String> searchTokenList,
						 List<Long> tagIdList, Long cursor, int size) {
	}

	public record Create(Long userId, String title, List<Long> tagIdOrderedList, Long parentFolderId,
						 LinkInfo linkInfo) {
	}

	public record Update(Long userId, Long id, String title, Long parentFolderId, List<Long> tagIdOrderedList) {
	}

	public record Move(Long userId, List<Long> idList, Long destinationFolderId, int orderIdx) {
	}

	public record Delete(Long userId, List<Long> idList) {
	}
}
