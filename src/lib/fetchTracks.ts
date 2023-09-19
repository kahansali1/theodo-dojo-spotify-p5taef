import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQDA-LDyDnaPSeymqOnlzTOCpnSqupaPm9L4vWzdebvPvLoQ9iAwAt1hat1-SES46BjMEsHOuLQh57kSuFIxcxisS3vMIKw93HffxwUurzn3286VmLwWEFkPcQKvfkJux_36dfstwy0Iv3ZQp5D8IoUPIvid09_FPvRl21N7AqGuMkJyaPE6NCgBR-vlapVPI21jFnBHBI8rDuh2nqEHZ1FXOK71EQ';

export const fetchTracks = async (): Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
