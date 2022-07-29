import fs, { PathLike } from 'fs';
import path from 'path';

export async function listFilePaths(
  directory: PathLike,
  extension: 'js' | 'ts' = 'ts'
): Promise<string[]> {
  const entries = await fs.promises.readdir(directory, { withFileTypes: true });
  let filePaths: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      filePaths = [
        ...filePaths,
        ...(await listFilePaths(
          path.join(directory.toString(), entry.name),
          extension
        )),
      ];
    } else if (entry.name.endsWith(extension)) {
      filePaths = [...filePaths, path.join(directory.toString(), entry.name)];
    }
  }

  return filePaths;
}
