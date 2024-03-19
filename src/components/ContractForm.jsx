const ContractForm = ({ formData, handleChange }) => {
    return (
      <div>
          <h1>Contract</h1>
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
                  Customer Name 
                  <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                  />
              </label>
              <br />
              <label>
                  Status
                  <input
                      type="text"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                  />
              </label>
              <br />
              <label>
                  Delivered Value 
                  <input
                      type="number"
                      name="deliveredValue"
                      value={formData.deliveredValue}
                      onChange={handleChange}
                  />
              </label>
              <br />
              <label>
                  Contract Start Date  
                  <input
                      type="date"
                      name="contractStartDate"
                      value={formData.contractStartDate}
                      onChange={handleChange}
                  />
              </label>
              <br />
              <label>
                  Contract End Date
                  <input
                    type="date"
                    name="contractEndDate"
                    value={formData.contractEndDate}
                    onChange={handleChange}
                  />
              </label>
              <br />
              <label>
                  Location
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
              </label>
              <br />
              <label>
                  Contract Info
                  <textarea
                    name="contractInfo"
                    value={formData.contractInfo}
                    onChange={handleChange}
                  />
              </label>
              <br />
              <label>
                  Additional Year
                  <input
                    type="number"
                    name="additionalYear"
                    value={formData.additionalYear}
                    onChange={handleChange}
                  />
              </label>
              <br />
      </div>
    )
  }
  export default ContractForm