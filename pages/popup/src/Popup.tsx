import '@src/Popup.css';
import { useStorageSuspense, withErrorBoundary, withSuspense } from '@extension/shared';
import { appStorage } from '@extension/storage';
import logo from '../public/icon.png';

const Popup = () => {
  const appStorageData = useStorageSuspense(appStorage);
  console.log(appStorageData);

  return (
    <div className="p-4 bg-base-100">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-x-2">
        <span>Twitter DND</span>
        <img src={logo} alt="logo" className="w-8 aspect-square block" />
      </h1>

      {/* Show time saved */}
      <p className="mb-4">
        Time saved: <span className="font-semibold">{appStorageData.removedVideos.size ?? 0}</span> seconds
      </p>

      {/* Disable videos checkbox */}
      <div className="form-control mb-4">
        <label className="cursor-pointer label">
          <span className="label-text">Disable videos</span>
          <input
            type="checkbox"
            checked={appStorageData.disableVideos}
            onChange={appStorage.toggleDisableVideos}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>

      {/* Disable ads checkbox */}
      <div className="form-control mb-4">
        <label className="cursor-pointer label">
          <span className="label-text">Disable ads</span>
          <input
            type="checkbox"
            checked={appStorageData.disableAds}
            onChange={appStorage.toggleDisableAds}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>

      {/* Add a button to reload page, if config changes */}
      <p className="mb-4 text-sm text-gray-500">You must reload the page in case of changes</p>
      <button
        className="btn btn-primary w-full"
        onClick={() => {
          // Reload the active tab here
          chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            if (tabs[0]) {
              chrome.tabs.reload(() => tabs[0].id);
            }
          });

          // Close the popup
          window.close();
        }}>
        Reload
      </button>
    </div>
  );
};

export default withErrorBoundary(
  withSuspense(Popup, <div className="p-4">Loading...</div>),
  <div className="p-4 text-red-500">Error Occur</div>,
);
