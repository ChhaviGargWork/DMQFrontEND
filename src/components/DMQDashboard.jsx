
//import {dummyHL7Messages} from './DummyHL7Messages'
import BackToTop from './appBar';
import DataGridDemo from './table';
import CardDesign from './card';
import GraphDesign from './graph';

const DMQDashboard = () => {
    // const handlePurge = (messageId) => {
    //   console.log(`Purging HL7 message with ID ${messageId}`);
    // };
  
    // const handleResend = (messageId) => {
    //   console.log(`Resending HL7 message with ID ${messageId}`);
    // };
  
    return (
      <div>
        <BackToTop />
        <CardDesign />
        <GraphDesign />
        <DataGridDemo />

      </div>
    );
  };
  
  export default DMQDashboard;