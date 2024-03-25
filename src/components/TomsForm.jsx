import "../styles/dataForms.css";

const TomsForm = ({ formData, setFormData }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="formTemplate toms">
				<h1>TOMs Framework</h1>
				<label>
					Theme Name
					<input type="text" name="Theme name" value={formData.tomsThemeName} onChange={handleChange} />
				</label>
				<br />
				<label>
					Outcomes
					<input type="text" name="Outcomes" value={formData.outcomes} onChange={handleChange} />
				</label>
				<br />
				<label>
					Reference ID
					<input type="text" name="Reference Id" value={formData.tomsReferenceId} onChange={handleChange} />
				</label>
				<br />
				<label>
					Measure
					<input type="text" name="Measure" value={formData.measure} onChange={handleChange} />
				</label>
				<br />
				<label>
					Proxy Unit
					<textarea type="text" name="proxyUnit" value={formData.tomsProxyUnit} onChange={handleChange} />
				</label>
				<br />
				<label>
					Per unit Value
					<input type="number" name="Per unit Value" value={formData.perUnitValue} onChange={handleChange} />
				</label>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
export default TomsForm;
