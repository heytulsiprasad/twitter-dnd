import { StorageType, createStorage } from './base';

type AppStorage = {
  removedVideos: Set<number>;
  disableVideos: boolean;
  disableAds: boolean;
  toggleDisableVideos: () => Promise<void>;
  toggleDisableAds: () => Promise<void>;
  addVideos: (videoLength: number) => Promise<void>;
};

const initialStorage: AppStorage = {
  removedVideos: new Set(),
  disableVideos: true,
  disableAds: true,
  toggleDisableVideos: async () => {},
  toggleDisableAds: async () => {},
  addVideos: async () => {},
};

const storage = createStorage('app-storage', initialStorage, {
  storageType: StorageType.Sync,
  liveUpdate: true,
});

export const appStorage = {
  ...storage,
  toggleDisableVideos: async () => {
    await storage.set(state => {
      return {
        ...state,
        disableVideos: !state.disableVideos,
      };
    });
  },
  toggleDisableAds: async () => {
    await storage.set(state => {
      return {
        ...state,
        disableAds: !state.disableAds,
      };
    });
  },
  addVideos: async (videoLength: number) => {
    await storage.set(state => {
      return {
        ...state,
        removedVideos: new Set([...state.removedVideos, videoLength]),
      };
    });
  },
};
