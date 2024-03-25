import "../styles/dataForms.css";

const ContractForm = ({ formData, setFormData }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="formTemplate contract">
				<h1>Contract</h1>
				<label>
					Contract ID
					<input type="text" name="contractId" value={formData.contractId} onChange={handleChange} />
				</label>
				<br />
				<label>
					Customer Name
					<input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />
				</label>
				<br />
				<label>
					Status
					<input type="text" name="status" value={formData.status} onChange={handleChange} />
				</label>
				<br />
				<label>
					Committed Value
					<input type="number" name="status" value={formData.status} onChange={handleChange} />
				</label>
				<br />
				<label>
					Delivered Value
					<input type="number" name="deliveredValue" value={formData.deliveredValue} onChange={handleChange} />
				</label>
				<br />
				<label>
					Contract Start Date
					<input type="date" name="contractStartDate" value={formData.contractStartDate} onChange={handleChange} />
				</label>
				<br />
				<label>
					Contract End Date
					<input type="date" name="contractEndDate" value={formData.contractEndDate} onChange={handleChange} />
				</label>
				<br />
				<label>
					Location
					<input type="text" name="location" value={formData.location} onChange={handleChange} />
				</label>
				<br />
				<label>
					Contract Info
					<textarea name="contractInfo" value={formData.contractInfo} onChange={handleChange} />
				</label>
				<br />
				<label>
					Additional Year
					<input type="number" name="additionalYear" value={formData.additionalYear} onChange={handleChange} />
				</label>
				<br />
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
export default ContractForm;
