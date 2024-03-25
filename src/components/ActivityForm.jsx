import { saveData } from "../API";
import "../styles/dataForms.css";

const ActivityForm = ({ formData, setFormData }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		saveData(import.meta.env.VITE_DATASET_ID, "Activity", formData);
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
			<div className="formTemplate activity">
				<h1>Activity</h1>
				<label>
					Contract ID
					<input type="text" name="Contract ID" value={formData.contractId} onChange={handleChange} />
				</label>
				<br />
				<label>
					Activity ID
					<input type="text" name="Activity ID" value={formData.activityId} onChange={handleChange} />
				</label>
				<br />
				<label>
					Theme Name
					<input type="text" name="Theme name" value={formData.themeName} onChange={handleChange} />
				</label>
				<br />
				<label>
					References
					<input type="text" name="References" value={formData.references} onChange={handleChange} />
				</label>
				<br />
				<label>
					Activity Name
					<input type="text" name="Activity Name" value={formData.activityName} onChange={handleChange} />
				</label>
				<br />
				<label>
					Activity Description
					<textarea name="Activity Description" value={formData.activityDesc} onChange={handleChange} />
				</label>
				<br />
				<label>
					Services Provided
					<textarea name="Services Provided" value={formData.servicesProvided} onChange={handleChange} />
				</label>
				<br />
				<label>
					Status
					<input type="text" name="Status" value={formData.status} onChange={handleChange} />
				</label>
				<br />
				<label>
					Proxy Unit
					<textarea name="Proxy Unit" value={formData.proxyUnit} onChange={handleChange} />
				</label>
				<br />
				<label>
					Proxy Value (Per Unit)
					<input type="number" step=".01" name="Proxy Value (Per Unit)" value={formData.proxyValue} onChange={handleChange} />
				</label>
				<br />
				<label>
					Committed Units
					<input type="number" name="Committed Units" value={formData.committedUnits} onChange={handleChange} />
				</label>
				<br />
				<label>
					Committed Value per Activity
					<input type="number" step=".01" name="Committed Value per Activity" value={formData.committedValue} onChange={handleChange} />
				</label>
				<br />
				<label>
					Delivered Units
					<input type="number" name="Delivered Units" value={formData.deliveredUnits} onChange={handleChange} />
				</label>
				<br />
				<label>
					Delivered Value per Activity
					<input type="number" step=".01" name="Delivered Value per Activity" value={formData.deliveredValue} onChange={handleChange} />
				</label>
				<br />
				<label>
					Start Date
					<input type="date" name="Start Date" value={formData.startDate} onChange={handleChange} />
				</label>
				<br />
				<label>
					End Date
					<input type="date" name="End Date" value={formData.endDate} onChange={handleChange} />
				</label>
				<br />
				<label>
					Department Lead
					<input type="text" name="Department Lead" value={formData.departmentLead} onChange={handleChange} />
				</label>
				<br />
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
export default ActivityForm;
