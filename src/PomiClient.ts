import classScheduleService from './services/classScheduleService.js';
import classService from './services/classService.js';
import courseOfferingService from './services/courseOfferingService.js';
import courseService from './services/courseService.js';
import instituteService from './services/instituteService.js';
import professorService from './services/professorService.js';
import studyPeriodService from './services/studyPeriodService.js';

class PomiClient {
	institutes = instituteService
	courseOfferings = courseOfferingService
	courses = courseService
	classes = classService
	classSchedules = classScheduleService
	professors = professorService
	studyPeriods = studyPeriodService
}

export default PomiClient;
