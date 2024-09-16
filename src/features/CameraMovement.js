import { createSlice } from "@reduxjs/toolkit";

// 0, 25, 600
const initialState = {
  position: { x: 0, y: 25, z: 475 },
};

const cameraMovement = createSlice({
  name: "cameraMoving",
  initialState,
  reducers: {
    movingCamera: (state, { payload }) => {
      state.position.x += Number(payload.x);
      state.position.y += Number(payload.y);
      state.position.z += Number(payload.z);
    },
  },
});

export const { movingCamera } = cameraMovement.actions;
export default cameraMovement.reducer;
