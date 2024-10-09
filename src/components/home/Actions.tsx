import { Button } from '../ui/button';
import Modal from '../container/ModalContainer';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface HeaderDataInterface {
  vrNno: number;
  vrDate: string; 
  Status: boolean;
  acName: string;
  acAmt: number;
}

const Actions = () => {
  const [modal, setModal] = useState<{ new: boolean; insert: boolean }>({
    new: false,
    insert: false,
  });
  const [headerData, setHeaderData] = useState<HeaderDataInterface>({
    vrNno: 0,
    vrDate: '',
    Status: false,
    acName: '',
    acAmt: 0,
  });
  const [errors, setErrors] = useState<string[]>([]);

  const toggleModal = (key: keyof typeof modal) => {
    setModal((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  // Handle form input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value, type, checked } = e.target;
    // Handle types explicitly
    const newValue = type === 'checkbox' ? checked : value;

    setHeaderData((prevState) => ({
      ...prevState,
      [id]: type === 'checkbox' ? newValue : type === 'number' ? parseFloat(value) || 0 : value,
    }));
  };

  // Form validation
  const validateForm = () => {
    const validationErrors: string[] = [];
    if (headerData.vrNno <= 0) validationErrors.push('VR No. is required and should be greater than 0.');
    if (!headerData.acName) validationErrors.push('Account Name is required.');
    if (headerData.acAmt <= 0) validationErrors.push('Account Amount is required and should be greater than 0.');
    if (!headerData.vrDate) validationErrors.push('VR Date is required.');
    return validationErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted successfully:', headerData);
    setHeaderData({
      vrNno: 0,
      vrDate: '',
      Status: false,
      acName: '',
      acAmt: 0,
    });
    toggleModal('new');
  };

  return (
    <>
      <div className="h-24 w-5/6 md:w-1/6 md:h-5/6 bg-transparent flex p-1 gap-2 justify-between md:flex-col items-center">
        <div className="w-1/4 h-3/4 bg-gray-500/[.05] rounded-xl md:w-full md:h-1/4 flex justify-center items-center">
          <Button variant="secondary" onClick={() => toggleModal('new')}>New</Button>
        </div>
        <div className="w-1/4 h-3/4 bg-gray-500/[.05] md:w-full md:h-1/4 flex justify-center items-center">
          <Button variant="secondary" onClick={() => toggleModal('insert')}>Insert</Button>
        </div>
        <div className="w-1/4 h-3/4 bg-gray-500/[.05] md:w-full md:h-1/4 flex justify-center items-center">
          <Button variant="secondary">Save</Button>
        </div>
        <div className="w-1/4 h-3/4 bg-gray-500/[.05] md:w-full md:h-1/4 flex justify-center items-center">
          <Button variant="secondary">Print</Button>
        </div>
      </div>

      {/* New Modal */}
      {modal.new && (
        <Modal onClick={() => toggleModal('new')}>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="vrNno">VR No.</Label>
              <Input id="vrNno" type="number" value={headerData.vrNno} onChange={handleChange} />

              <Label htmlFor="vrDate">VR Date</Label>
              <Input id="vrDate" type="date" value={headerData.vrDate} onChange={handleChange} />

              <Label htmlFor="Status">Status</Label>
              <Input id="Status" type="checkbox" checked={headerData.Status} onChange={handleChange} />

              <Label htmlFor="acName">Account Name</Label>
              <Input id="acName" type="text" value={headerData.acName} onChange={handleChange} />

              <Label htmlFor="acAmt">Account Amount</Label>
              <Input id="acAmt" type="number" value={headerData.acAmt} onChange={handleChange} />
            </div>
            
            {/* Display validation errors */}
            {errors.length > 0 && (
              <div className="text-red-500 mt-2">
                {errors.map((error, idx) => (
                  <p key={idx}>{error}</p>
                ))}
              </div>
            )}

            <div className="mt-4 flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Modal>
      )}

      {/* Insert Modal */}
      {modal.insert && (
        <Modal onClick={() => toggleModal('insert')}>
          <div>
            <p>Insert modal content here</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Actions;
