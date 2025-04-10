/**
 * File[]에서 단일 파일 추출
 * @param fileList - 입력받은 FileList 객체
 * @returns 첫 번째 File 객체 또는 null
 */
export const getSingleFile = (files: File[]): File => {
  return files[0];
};

/**
 * 파일 중복 확인
 * @param file - 검사할 파일
 * @param existingFiles - 기존 파일 목록
 * @returns 중복 여부
 */
export const isDuplicateFile = (file: File, existingFiles: File[]): boolean => {
  return existingFiles.some(
    (existingFile) =>
      existingFile.name === file.name && existingFile.size === file.size,
  );
};

/**
 * 중복되지 않은 파일 필터링
 * @param newFiles - 새로 추가할 파일 목록
 * @param existingFiles - 기존 파일 목록
 * @returns 중복되지 않은 파일 목록
 */
export const filterDuplicateFiles = (
  newFiles: File[],
  existingFiles: File[],
): File[] => {
  return newFiles.filter((file) => !isDuplicateFile(file, existingFiles));
};

/**
 * 파일명 확장자 제거
 * @param fileName - 확장자가 포함된 파일명
 * @returns 확장자를 제거한 파일명
 */
export const removeExtension = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf('.');
  return lastDotIndex === -1 ? fileName : fileName.substring(0, lastDotIndex);
};

/**
 * 파일 중복 검사 및 필터링
 * @param newFiles - 새로 선택된 파일 목록
 * @param existingFiles - 기존 파일 목록
 * @returns 중복되지 않은 파일 목록
 */
export const removeDuplicateFiles = (
  newFiles: File[],
  existingFiles: File[],
): File[] => {
  const existingFileNames = new Set(
    existingFiles.map((file) => removeExtension(file.name)),
  );
  return newFiles.filter(
    (file) => !existingFileNames.has(removeExtension(file.name)),
  );
};

/**
 * 파일 크기 검증 및 필터링
 * @param files - 검증할 파일 목록
 * @param maxSize - 최대 파일 크기 (바이트)
 * @returns 크기 제한을 만족하는 파일 목록
 */
export const filterByFileSize = (files: File[], maxSize: number): File[] => {
  return files.filter((file) => file.size <= maxSize);
};

/**
 * 파일 개수 검증
 * @param files - 검증할 파일 목록
 * @param maxCount - 최대 허용 파일 개수
 * @returns 검증 결과 (유효한 파일 목록과 초과 개수)
 */
export const validateFileCount = (
  files: File[],
  maxCount: number,
): { files: File[]; exceededCount: number } => {
  const exceededCount = Math.max(0, files.length - maxCount);
  const validFiles = files.slice(0, maxCount);

  return {
    files: validFiles,
    exceededCount,
  };
};
