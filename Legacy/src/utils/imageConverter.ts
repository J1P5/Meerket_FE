import Resizer from "react-image-file-resizer";

export const convertToWebP = (file: File, size = 500) =>
  new Promise<File>(resolve => {
    Resizer.imageFileResizer(
      file,
      size,
      size,
      "WEBP",
      90,
      0,
      uri => {
        resolve(uri as File);
      },
      "file"
    );
  });
