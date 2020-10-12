import { combineReducers } from 'redux';
import languageReducer from './languageReducer'
import userReducer from './userReducer';
import experienceReducer from './experienceReducer';
import perfectionReducer from './perfectionReducer';
import authReducer from './authReducer';
import workExperienceReducer from './workExperience';
import educationReducer from './educationReducer';
import educationLevelReducer from './educationLevelReducer';
import jobPostReducer from './jobPostReducer';
import jobApplicationReducer from './jobApplicationReducer';
import applicationDetailReducer from './applicationDetailReducer';
let rootReducer = combineReducers({
  user:userReducer,
  languageList:languageReducer,
  experienceList:experienceReducer,
  auth:authReducer,
  perfectionList:perfectionReducer,
  workExperienceList:workExperienceReducer,
  educationLevelList:educationLevelReducer,
  educationList:educationReducer,
  jobPostingList:jobPostReducer,
  jobApplicationList:jobApplicationReducer,
  selectedApplicationDetail:applicationDetailReducer
});

export default rootReducer;