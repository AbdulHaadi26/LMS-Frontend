import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import FilledButton from "../../components/buttons/filled.button";
import {
  ColContainer,
  FormContainer,
  RowContainer,
} from "../../components/containers";
import PopupContainer from "../../components/containers/popup.container";
import SelectInput from "../../components/inputs/select.input";
import TextAreaInput from "../../components/inputs/teaxtarea.input";
import TextInput from "../../components/inputs/text.input";
import ErrorComponent from "../../components/typography/error.typo";
import { createInvoice } from "../../redux/actions/invoice.actions";
import { INVOICES_STATUSES, INVOICES_TYPES } from "../../utils/constants";
import { ButtonActions } from "../../utils/enum";
import { DispatchType, UserContactType } from "../../utils/types";

type AddInvoicesFormProps = {
  show: boolean;
  setShow: (show: boolean) => void;
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
  const dispatch: DispatchType = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
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

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const res = await dispatch(createInvoice(form));

      if (res?.error) {
        setError(res.error);
      } else {
        setShow(false);
      }

      setIsLoading(false);
    },
    [dispatch, form, setIsLoading, setShow, setError]
  );

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
        className="w-full flex flex-col flex-1 overflow-y-auto"
      >
        <ColContainer className="w-full flex-1 overflow-y-auto custom-scroll pb-4">
          <h1 className="w-full rounded font-primary text-sm font-black text-primary-400 mb-0 px-4 py-2 bg-primary-50">
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
                text={String(form.amount)}
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
          <h1 className="w-full rounded font-primary text-sm font-black text-primary-400 mb-0 px-4 py-2 bg-primary-50 mt-4">
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
              />
            </RowContainer>
          </RowContainer>
          <h1 className="w-full rounded font-primary text-sm font-black text-primary-400 mb-0 px-4 py-2 bg-primary-50 mt-4">
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
              />
            </RowContainer>
          </RowContainer>
          <h1 className="w-full rounded font-primary text-sm font-black text-primary-400 mb-0 px-4 py-2 bg-primary-50 mt-4">
            Description
          </h1>
          <RowContainer className="w-full flex-wrap px-4 pr-2 py-0">
            <RowContainer className="w-full pr-4">
              <TextAreaInput
                label="Description"
                name="description"
                text={form.description}
                className="h-20 p-2"
                onChange={(text) =>
                  setForm((prevForm) => ({
                    ...prevForm,
                    description: text,
                  }))
                }
              />
            </RowContainer>
          </RowContainer>
          <h1 className="w-full rounded font-primary text-sm font-black text-primary-400 mb-0 px-4 py-2 bg-primary-50 mt-4">
            Attachments
          </h1>
        </ColContainer>
        <RowContainer className="w-full flex-wrap justify-end px-4 pb-3 pt-4 border-t border-primary-200">
          <RowContainer className="w-full justify-center">
            {error && <ErrorComponent error={error} />}
          </RowContainer>
          <FilledButton
            disabled={isLoading}
            onClick={() => setShow(false)}
            type={ButtonActions.BUTTON}
            className="w-fit p-2 px-4 mr-2 bg-gray-500 hover:bg-gray-400 text-white"
          >
            Cancel
          </FilledButton>
          <FilledButton
            disabled={isLoading}
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
