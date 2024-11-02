import { useCallback, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import FilledButton from "../../components/buttons/filled.button";
import {
  ColContainer,
  FormContainer,
  RowContainer,
} from "../../components/containers";
import PopupContainer from "../../components/containers/popup.container";
import SelectInput from "../../components/inputs/select.input";
import TextInput from "../../components/inputs/text.input";
import { INVOICES_STATUSES, INVOICES_TYPES } from "../../utils/constants";
import { ButtonActions } from "../../utils/enum";

type AddInvoicesFormProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

type UserContactType = {
  name: string;
  email: string;
  contactNo: string;
};

type AddInvoiceType = {
  name: string;
  invoiceNo: string;
  department: string;
  description: string;
  amount: number;
  currency: string;
  dated: string;
  type: string;
  status: string;
  sentBy: UserContactType;
  receivedBy: UserContactType;
  attachments: number[];
};

const AddInvoicesForm: React.FC<AddInvoicesFormProps> = ({ show, setShow }) => {
  const [form, setForm] = useState<AddInvoiceType>({
    name: "",
    invoiceNo: "",
    department: "",
    description: "",
    amount: 0,
    currency: "PKR",
    dated: "",
    type: INVOICES_TYPES[0].value,
    status: INVOICES_STATUSES[0].value,
    sentBy: {
      name: "",
      email: "",
      contactNo: "",
    },
    receivedBy: {
      name: "",
      email: "",
      contactNo: "",
    },
    attachments: [],
  });

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  if (!show) {
    return <Fragment />;
  }

  return (
    <PopupContainer
      className="w-1/2 h-[90vh] flex flex-col flex-1"
      title="Add Invoice"
      showCloseIcon={true}
      onClose={() => setShow(false)}
    >
      <FormContainer
        onSubmit={onSubmit}
        className="w-full flex-1 flex flex-col"
      >
        <ColContainer className="w-full flex-1 overflow-y-auto">
          <h1 className="w-full rounded font-primary text-sm font-black text-primary-400 mb-0 px-4 pt-2">
            Basic
          </h1>
          <RowContainer className="w-full flex-wrap px-4 pr-2 py-0">
            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Name"
                name="name"
                type="text"
                className="p-2"
                text={form.name}
                onChange={(text) =>
                  setForm((prevForm) => ({ ...prevForm, name: text }))
                }
                placeholder="Enter invoice name"
                required={true}
              />
            </RowContainer>
            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Invoice No"
                name="invoiceNo"
                type="text"
                className="p-2"
                text={form.invoiceNo}
                onChange={(text) =>
                  setForm((prevForm) => ({ ...prevForm, invoiceNo: text }))
                }
                placeholder="Enter invoice number"
                required={true}
              />
            </RowContainer>
            <RowContainer className="w-1/3 pr-4">
              <SelectInput
                label="Type"
                name="type"
                className="p-2"
                text={form.type}
                options={INVOICES_TYPES}
                onChange={(text) =>
                  setForm((prevForm) => ({ ...prevForm, type: text }))
                }
                placeholder="Select invoice type"
                required={true}
              />
            </RowContainer>

            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Amount"
                name="amount"
                type="number"
                className="p-2"
                text={form.invoiceNo}
                onChange={(text) =>
                  setForm((prevForm) => ({ ...prevForm, amount: Number(text) }))
                }
                placeholder="Enter invoice amount"
                required={true}
              />
            </RowContainer>
            <RowContainer className="w-1/3 pr-4">
              <SelectInput
                label="Status"
                name="status"
                className="p-2"
                text={form.status}
                options={INVOICES_STATUSES}
                onChange={(text) =>
                  setForm((prevForm) => ({ ...prevForm, status: text }))
                }
                placeholder="Select invoice stauts"
                required={true}
              />
            </RowContainer>
            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Date"
                name="dated"
                type="date"
                className="p-2"
                text={form.dated}
                onChange={(text) =>
                  setForm((prevForm) => ({ ...prevForm, dated: text }))
                }
                placeholder="Enter invoice date"
                required={true}
              />
            </RowContainer>
          </RowContainer>
          <h1 className="w-full border-t border-primary-200 px-4 pt-4 mt-4 rounded font-primary text-sm font-black text-primary-400">
            Sent By
          </h1>
          <RowContainer className="w-full flex-wrap px-4 pr-2 py-0">
            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Name"
                name="name"
                type="text"
                className="p-2"
                text={form.sentBy.name}
                onChange={(text) =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    sentBy: { ...prevForm.sentBy, name: text },
                  }))
                }
                placeholder="Enter sender name"
                required={true}
              />
            </RowContainer>
            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Email"
                name="email"
                type="email"
                className="p-2"
                text={form.sentBy.email}
                onChange={(text) =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    sentBy: { ...prevForm.sentBy, email: text },
                  }))
                }
                placeholder="Enter sender email"
                required={true}
              />
            </RowContainer>
            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Contact No"
                name="contactNo"
                type="text"
                className="p-2"
                text={form.sentBy.contactNo}
                onChange={(text) =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    sentBy: { ...prevForm.sentBy, contactNo: text },
                  }))
                }
                placeholder="Enter sender contact number"
                required={true}
              />
            </RowContainer>
          </RowContainer>
          <h1 className="w-full border-t border-primary-200 px-4 pt-4 mt-4 rounded font-primary text-sm font-black text-primary-400">
            Received By
          </h1>
          <RowContainer className="w-full flex-wrap px-4 pr-2 py-0">
            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Name"
                name="name"
                type="text"
                className="p-2"
                text={form.receivedBy.name}
                onChange={(text) =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    receivedBy: { ...prevForm.receivedBy, name: text },
                  }))
                }
                placeholder="Enter receiver name"
                required={true}
              />
            </RowContainer>
            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Email"
                name="email"
                type="email"
                className="p-2"
                text={form.receivedBy.email}
                onChange={(text) =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    receivedBy: { ...prevForm.receivedBy, email: text },
                  }))
                }
                placeholder="Enter receiver email"
                required={true}
              />
            </RowContainer>
            <RowContainer className="w-1/3 pr-4">
              <TextInput
                label="Contact No"
                name="contactNo"
                type="text"
                className="p-2"
                text={form.receivedBy.contactNo}
                onChange={(text) =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    receivedBy: { ...prevForm.receivedBy, contactNo: text },
                  }))
                }
                placeholder="Enter receiver contact number"
                required={true}
              />
            </RowContainer>
          </RowContainer>
        </ColContainer>
        <RowContainer className="w-full justify-end px-4 pb-3 mt-2">
          <FilledButton
            type={ButtonActions.SUBMIT}
            className="w-fit p-2 px-4 mr-2 bg-gray-500 hover:bg-gray-400 text-white"
          >
            Cancel
          </FilledButton>
          <FilledButton
            type={ButtonActions.SUBMIT}
            className="w-fit p-2 px-4 bg-primary-400 hover:bg-primary-300 text-white"
          >
            Create
          </FilledButton>
        </RowContainer>
      </FormContainer>
    </PopupContainer>
  );
};

export default AddInvoicesForm;
