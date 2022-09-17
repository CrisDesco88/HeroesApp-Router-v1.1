const service = {
	getData: async (heroes, { from, to }) => {
		const data = heroes.slice(from, to);
		return {
			count: heroes.length,
			data: data,
		};
	},
};

export default service;
