export const now = (): Date => {
	return new Date();
};

export const parseTimeString = (time: string) => {
	const parts = time.split(':').map((p) => Number(p));
	const hours = Number.isFinite(parts[0]) ? parts[0] : 0;
	const minutes = Number.isFinite(parts[1]) ? parts[1] : 0;
	return { hours, minutes };
};

const setToTime = (base: Date, hours: number, minutes: number) => {
	const d = new Date(base);
	d.setHours(hours, minutes, 0, 0);
	return d;
};

export const nextOccurrenceOfTime = (timeStr: string, from = new Date()) => {
	const { hours, minutes } = parseTimeString(timeStr);
	let candidate = setToTime(from, hours, minutes);
	// If candidate is earlier than (or equal to) `from`, move to the next day
	if (candidate <= from) {
		candidate = new Date(candidate.getTime());
		candidate.setDate(candidate.getDate() + 1);
	}
	return candidate;
};

export const computeSleepDuration = (
	bedtimeStr: string,
	wakeTimeStr = '07:00',
) => {
	const bed = nextOccurrenceOfTime(bedtimeStr, new Date());
	let wake = nextOccurrenceOfTime(wakeTimeStr, bed);
	// Ensure wake is after bed
	if (wake <= bed) {
		wake = new Date(wake.getTime());
		wake.setDate(wake.getDate() + 1);
	}
	const ms = wake.getTime() - bed.getTime();
	const hours = ms / (1000 * 60 * 60);
	return hours;
};

export const formatDurationHours = (hoursFloat: number) => {
	if (!Number.isFinite(hoursFloat) || hoursFloat <= 0) return '0h';
	const hours = Math.floor(hoursFloat);
	const minutes = Math.round((hoursFloat - hours) * 60);
	if (minutes === 0) return `${hours}h`;
	return `${hours}h ${minutes}m`;
};

export const classifyPerformance = (hours: number) => {
	// Thresholds tuned for simple messaging
	if (hours >= 7.5) return 'Optimal';
	if (hours >= 6) return 'Reduced';
	if (hours >= 4) return 'Impaired';
	return 'Severe';
};
