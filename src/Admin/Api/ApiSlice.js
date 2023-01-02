import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
var baseUrl =
  //   "https://frozen-journey-49199.herokuapp.com/https://crudapi.co.uk/api/v1/";
  "http://localhost:3001/api/";
var header = {
  "Content-Type": "application/json",
  Authorization: "Bearer -x4lh2uQVDw6APz677MEC_c8gFZd3BnjxX5MHFUXi1_qGCA7NQ",
};

const initialState = {
  cms: [],
  mission: [],
  missionapp: [],
  story: [],
  user: [],
  isLoading: true,
};
export const getCms = createAsyncThunk(
  "cms/cmsItems",
  async (name, thunkAPI) => {
    try {
      var config = {
        method: "get",
        url: baseUrl + "cms",
        headers: header,
      };
      const resp = await axios(config);
      return resp.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const getMission = createAsyncThunk(
  "mission/missionItems",
  async (name, thunkAPI) => {
    try {
      var config = {
        method: "get",
        url: baseUrl + "mission",
        headers: header,
      };
      const resp = await axios(config);
      return resp.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const getMissionApp = createAsyncThunk(
  "missionApp/missionAppItems",
  async (name, thunkAPI) => {
    try {
      var config = {
        method: "get",
        url: baseUrl + "missionapp",
        headers: header,
      };
      const resp = await axios(config);
      return resp.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const getStory = createAsyncThunk(
  "story/storyItems",
  async (name, thunkAPI) => {
    try {
      var config = {
        method: "get",
        url: baseUrl + "story",
        headers: header,
      };
      const resp = await axios(config);
      return resp.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const getUser = createAsyncThunk(
  "user/userItems",
  async (name, thunkAPI) => {
    try {
      var config = {
        method: "get",
        url: baseUrl + "user",
        headers: header,
      };
      const resp = await axios(config);
      return resp.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const addCms = createAsyncThunk(
  "cms/cmsdata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "post",
        url: baseUrl + "cms",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const addMission = createAsyncThunk(
  "mission/missiondata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "post",
        url: baseUrl + "mission",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const addMissionApp = createAsyncThunk(
  "missionapp/missionappdata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "post",
        url: baseUrl + "missionapp",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const addStory = createAsyncThunk(
  "story/storydata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "post",
        url: baseUrl + "story",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const addUser = createAsyncThunk(
  "user/userdata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "post",
        url: baseUrl + "user",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const deleteCms = createAsyncThunk(
  "cms/cmsdata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "delete",
        url: baseUrl + "cms" + "/" + data,
        headers: header,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const deleteMission = createAsyncThunk(
  "mission/missiondata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "delete",
        url: baseUrl + "mission" + "/" + data,
        headers: header,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const deleteMissionApp = createAsyncThunk(
  "missionApp/missionAppdata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "delete",
        url: baseUrl + "missionapp" + "/" + data,
        headers: header,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const deleteStory = createAsyncThunk(
  "story/Storydata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "delete",
        url: baseUrl + "story" + "/" + data,
        headers: header,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const deleteUser = createAsyncThunk(
  "user/userdata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "delete",
        url: baseUrl + "user" + "/" + data,
        headers: header,
      };
      const resp = await axios(config);
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const updateCms = createAsyncThunk(
  "cms/cmsdata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "put",
        url: baseUrl + "cms",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const updateMission = createAsyncThunk(
  "mission/missiondata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "put",
        url: baseUrl + "mission",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const updateMissionApp = createAsyncThunk(
  "missionApp/missiondata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "put",
        url: baseUrl + "missionapp",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/userdata",
  async (data, thunkAPI) => {
    try {
      var config = {
        method: "put",
        url: baseUrl + "user",
        headers: header,
        data: data,
      };
      const resp = await axios(config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
const ApiSlice = createSlice({
  name: "mission",
  initialState,
  extraReducers: {
    [getCms.pending]: (state) => {
      state.isLoading = true;
    },
    [getCms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cms = action.payload;
    },
    [getCms.rejected]: (state) => {
      state.isLoading = false;
    },
    [getMission.pending]: (state) => {
      state.isLoading = true;
    },
    [getMission.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mission = action.payload;
    },
    [getMission.rejected]: (state) => {
      state.isLoading = false;
    },
    [getMissionApp.pending]: (state) => {
      state.isLoading = true;
    },
    [getMissionApp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.missionapp = action.payload;
    },
    [getMissionApp.rejected]: (state) => {
      state.isLoading = false;
    },
    [getStory.pending]: (state) => {
      state.isLoading = true;
    },
    [getStory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.story = action.payload;
    },
    [getStory.rejected]: (state) => {
      state.isLoading = false;
    },
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [addCms.pending]: (state) => {
      state.isLoading = true;
    },
    [addCms.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addCms.rejected]: (state) => {
      state.isLoading = false;
    },
    [addMission.pending]: (state) => {
      state.isLoading = true;
    },
    [addMission.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addMission.rejected]: (state) => {
      state.isLoading = false;
    },
    [addMissionApp.pending]: (state) => {
      state.isLoading = true;
    },
    [addMissionApp.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addMissionApp.rejected]: (state) => {
      state.isLoading = false;
    },
    [addStory.pending]: (state) => {
      state.isLoading = true;
    },
    [addStory.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addStory.rejected]: (state) => {
      state.isLoading = false;
    },
    [addUser.pending]: (state) => {
      state.isLoading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateCms.pending]: (state) => {
      state.isLoading = true;
    },
    [updateCms.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updateCms.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export default ApiSlice.reducer;
