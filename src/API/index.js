export const saveData = async (datasetId, tableName, formData) => {
	const response = await fetch(`https://api.powerbi.com/v1.0/myorg/datasets/${datasetId}/tables/${tableName}/rows`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_POWERBI_POWER_BI_ACCESS_TOKEN}`,
		},
		body: JSON.stringify({
			rows: [formData],
		}),
	});
	const data = await response.json();
	console.log(data);
	return data;
};
