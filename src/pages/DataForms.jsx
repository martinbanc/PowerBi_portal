import { useState } from "react";
import ActivityForm from "../components/ActivityForm";
import ContractForm from "../components/ContractForm";
import ProxyCalcForm from "../components/ProxyCalcForm";
import TomsForm from "../components/TomsForm";

const DataForms = () => {
	// const [formData, setFormData] = useState({
	//     contractId: '',
	//     activityId: '',
	//     themeName: '',
	//     references: '',
	//     activityName: '',
	//     activityDesc: '',
	//     ContractId: '',
	//     customerName: '',
	//     status: '',
	//     commitedValue: '',
	//     deliveredValue: '',
	//     contractStartDate: '',
	//     contractEndDate: '',
	//     location: '',
	//     contractInfo: '',
	//     additionalYear: '',
	//     proxyId: '',
	//     proxyContractId: '',
	//     proxyThemeName: '',
	//     proxyReferences: '',

	//   proxyUnit: '',
	//     proxyValue: '',
	//     commitedNumber: '',
	//     proxyCommitedValue: '',
	//     deliveredNumber: '',
	//     proxyDeliveredValue: '',
	//     tomsThemeName: '',
	//     outcomes: '',
	//     tomsReferenceId: '',
	//     measure: '',
	//     tomsProxyUnit: '',
	//     perUnitValue: '',
	// });

	const [activityFormData, setActivityFormData] = useState([
		{
			Contractid: "",
			activityID: "",
			themeName: "",
			references: "",
			activityName: "",
			activityDesc: "",
			servicesProvided: "",
			status: "",
			proxyUnit: "",
			proxyValue: "",
			committedUnits: "",
			committedValue: "",
			deliveredUnits: "",
			deliveredValue: "",
			startDate: "",
			endDate: "",
			departmentLead: "",
		},
	]);

	const [contractFormData, setContractFormData] = useState({
		contractId: "",
		customerName: "",
		status: "",
		committedValue: "",
		deliveredValue: "",
		contractStartDate: "",
		contractEndDate: "",
		location: "",
		contractInfo: "",
		additionalYear: "",
	});

	const [proxyFormData, setProxyFormData] = useState({
		proxyId: "",
		contractId: "",
		themeName: "",
		references: "",
		proxyUnit: "",
		proxyValue: "",
		commitedNumber: "",
		commitedValue: "",
		deliveredNumber: "",
		deliveredValue: "",
	});

	const [tomsFormData, setTomsFormData] = useState({
		tomsThemeName: "",
		outcomes: "",
		tomsReferenceId: "",
		measure: "",
		tomsProxyUnit: "",
		perUnitValue: "",
	});

	return (
		<div className="forms">
			<ActivityForm formData={activityFormData} setFormData={setActivityFormData} />
			<ContractForm formData={contractFormData} setFormData={setContractFormData} />
			<ProxyCalcForm formData={proxyFormData} setFormData={setProxyFormData} />
			<TomsForm formData={tomsFormData} setFormData={setTomsFormData} />
		</div>
	);
};

export default DataForms;
