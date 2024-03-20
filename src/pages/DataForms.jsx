import { useState } from 'react';
import ActivityForm from '../components/ActivityForm';
import ContractForm from '../components/ContractForm';
import ProxyCalcForm from '../components/ProxyCalcForm';
import TomsForm from '../components/TomsForm';

const DataForms = () => {
    const [formData, setFormData] = useState({
        contractId: '',
        activityId: '',
        themeName: '',
        references: '',
        activityName: '',
        activityDesc: '',
        contractId: '',
        customerName: '',
        status: '',
        commitedValue: '',
        deliveredValue: '',
        contractStartDate: '',
        contractEndDate: '',
        location: '',
        contractInfo: '',
        additionalYear: '',
        proxyId: '',
        proxyContractId: '',
        proxyThemeName: '',
        proxyReferences: '',

      proxyUnit: '',
        proxyValue: '',
        commitedNumber: '',
        proxyCommitedValue: '',
        deliveredNumber: '',
        proxyDeliveredValue: '',
        tomsThemeName: '',
        outcomes: '',
        tomsReferenceId: '',
        measure: '',
        tomsProxyUnit: '',
        perUnitValue: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ActivityForm formData={formData} handleChange={handleChange} />
            <ContractForm formData={formData} handleChange={handleChange} />
            <ProxyCalcForm formData={formData} handleChange={handleChange} />
            <TomsForm formData={formData} handleChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default DataForms;