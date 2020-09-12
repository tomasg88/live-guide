import moment from "moment";
/**
 *
 */

export const getSuggestedTime = () => {
	return moment()
		.hour(moment().hour() + 1)
		.minutes(0)
		.seconds(0)
		.valueOf();
};

const prefixes = {
	youtube: "www.youtube.com/u/",
	facebook: "fb.com/",
	instagram: "@",
};

export const giveMePlatformPrefix = (platform) => prefixes[platform];
