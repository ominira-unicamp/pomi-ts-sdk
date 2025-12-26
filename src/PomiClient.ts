import classScheduleService from './services/classScheduleService';
import classService from './services/classService';
import courseOfferingService from './services/courseOfferingService';
import courseService from './services/courseService';
import instituteService from './services/instituteService';
import professorService from './services/professorService';
import studyPeriodService from './services/studyPeriodService';

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
