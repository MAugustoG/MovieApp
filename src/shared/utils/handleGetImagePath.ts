// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { IMAGE_URL } from '../constants';

interface HandleGetImagePathParams {
  path: string;
}

export const handleGetImagePath = ({
  path,
}: HandleGetImagePathParams): string => {
  return `${IMAGE_URL}${path}`;
};
