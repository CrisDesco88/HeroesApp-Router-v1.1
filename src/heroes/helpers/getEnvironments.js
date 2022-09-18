export const getEnvironment = () => {
	import.meta.env.MODE;
	console.log(import.meta.env);
	return {
		...import.meta.env,
	};
};
