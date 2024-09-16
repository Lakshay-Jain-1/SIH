import { configureStore } from '@reduxjs/toolkit';
import threeSixtyViewerReducer from '../features/360ViewSlice';
import movingCamera from "../features/CameraMovement"
const store = configureStore({
  reducer: {
    threeSixtyViewer: threeSixtyViewerReducer, 
    cameraMovement:movingCamera   
  },
});


export default store
