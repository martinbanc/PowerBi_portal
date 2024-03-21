import "../styles/dataForms.css";

const ActivityForm = ({ formData, handleChange }) => {
  return (
    <div className="formTemplate activity">
        <h1>Activity</h1>
            <label>
                Contract ID
                <input
                    type="text"
                    name="contractId"
                    value={formData.contractId}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Activity ID
                <input
                    type="text"
                    name="activityId"
                    value={formData.activityId}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Theme Name 
                <input
                    type="text"
                    name="themeName"
                    value={formData.themeName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                References 
                <input
                    type="text"
                    name="references"
                    value={formData.references}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Activity Name 
                <input
                    type="text"
                    name="activityName"
                    value={formData.activityName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Activity Description
                <textarea
                    name="activityDesc"
                    value={formData.activityDesc}
                    onChange={handleChange}
                />
            </label>
            <br />
    </div>
  )
}
export default ActivityForm