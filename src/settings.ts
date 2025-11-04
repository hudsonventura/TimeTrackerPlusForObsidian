export interface TimeTrackerPlusSettings {
	timestampFormat: string;
	editableTimestampFormat: string;
	csvDelimiter: string;
	fineGrainedDurations: boolean;
	reverseSegmentOrder: boolean;
	timestampDurations: boolean;
	autoStopTimes: string;
}

export const DEFAULT_SETTINGS: TimeTrackerPlusSettings = {
	timestampFormat: "YY-MM-DD HH:mm:ss",
	editableTimestampFormat: "YYYY-MM-DD HH:mm:ss",
	csvDelimiter: ",",
	fineGrainedDurations: true,
	reverseSegmentOrder: false,
	timestampDurations: false,
	autoStopTimes: ""
};

