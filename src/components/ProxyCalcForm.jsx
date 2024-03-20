const ActivityForm = ({ formData, handleChange }) => {
  return (
    <div>
        <h1>Proxy Calculator</h1>
            <label>
                Proxy ID
                <input
                    type="text"
                    name="proxyId"
                    value={formData.proxyId}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Contract ID
                <input
                    type="text"
                    name="contractId"
                    value={formData.proxyContractId}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Theme Name
                <input
                    type="text"
                    name="themeName"
                    value={formData.proxyThemeName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                References 
                <input
                    type="text"
                    name="references"
                    value={formData.proxyReferences}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Proxy Unit 
                <textarea
                    type="text"
                    name="proxyUnit"
                    value={formData.proxyUnit}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Proxy Value (per unit)
                <input
                    type="number"
                    name="proxyValue"
                    value={formData.proxyValue}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Commited Number 
                <input
                    type="number"
                    name="commitedNumber"
                    value={formData.commitedNumber}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Committed Value
                <input
                    type="number"
                    name="commitedValue"
                    value={formData.proxyCommitedValue}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Delivered Number
                <input
                    type="number"
                    name="deliveredNumber"
                    value={formData.deliveredNumber}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Delivered value
                <input
                    type="number"
                    name="deliveredValue"
                    value={formData.proxyDeliveredValue}
                    onChange={handleChange}
                />
            </label>
            <br />
    </div>
  )
}
export default ActivityForm;