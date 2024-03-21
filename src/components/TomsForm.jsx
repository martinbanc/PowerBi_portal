import "../styles/dataForms.css";

const TomsForm = ({ formData, handleChange }) => {
  return (
    <div className="formTemplate toms">
        <h1>TOMs Framework</h1>
            <label>
                Theme Name 
                <input
                    type="text"
                    name="Theme name"
                    value={formData.tomsThemeName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Outcomes
                <input
                    type="text"
                    name="Outcomes"
                    value={formData.outcomes}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Reference ID
                <input
                    type="text"
                    name="Reference Id"
                    value={formData.tomsReferenceId}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Measure 
                <input
                    type="text"
                    name="Measure"
                    value={formData.measure}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Proxy Unit
                <textarea
                    type="text"
                    name="proxyUnit"
                    value={formData.tomsProxyUnit}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Per unit Value
                <input
                    type="number"
                    name="Per unit Value"
                    value={formData.perUnitValue}
                    onChange={handleChange}
                />
            </label>
    </div>
  )
}
export default TomsForm;